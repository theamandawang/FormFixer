import ffmpeg
import numpy as np
import os
from pathlib import Path
from tempfile import TemporaryDirectory
from ultralytics import YOLO
from ultralytics.engine.predictor import BasePredictor
from uuid import uuid4

model = YOLO('yolov8n-pose.pt')


def avi_to_mp4(avi_path, mp4_path):
    ffmpeg.input(avi_path).output(mp4_path).run()
    os.remove(avi_path)

def process_video(file):
    ret = None
    tmp_name = str(uuid4())
    tmp_path = os.path.join('/tmp', tmp_name + ".mp4")
    print(f"Input File: {tmp_path}", flush=True)

    file.save(tmp_path)
    os.chmod(tmp_path, 777)
    alignment_score, alignment_mask, depth = check_form(tmp_path)
    os.remove(tmp_path)
    
    out_avi = os.path.join("/usr/src/ultralytics/runs/pose/predict", tmp_name + ".avi")
    out_mp4 = os.path.join("/usr/src/ultralytics/runs/pose/predict", tmp_name + ".mp4")
    avi_to_mp4(out_avi, out_mp4)

    return out_mp4, alignment_score, alignment_mask, depth


def check_form(video_path):
    # make sure variance is less than some ratio between torso length or something
    # make sure you normalize x value

    # return model.predict(video_path, save=True)[0].tojson()
    # ret = model.predict(video_path, save=True)[0]
    ret = model.predict(video_path, save=True)

    left_shoulder_x = [result.keypoints.xy[0][5][0] for result in ret]
    left_shoulder = [result.keypoints.xy[0][5] for result in ret] # left shoulder:6
    left_hip = [result.keypoints.xy[0][11] for result in ret] # left hip:12
    left_knee = [result.keypoints.xy[0][13] for result in ret] # left knee:14
    left_ankle = [result.keypoints.xy[0][15] for result in ret] # left ankle:16

    alignment_score, alignment_mask = squat_alignment(left_shoulder_x, 30)
    depth = squat_depth(left_shoulder, left_hip, left_knee, left_ankle)

    return alignment_score, alignment_mask, depth

def squat_alignment(left_shoulder_x, squat_x_threshold):
    frame_mask = []
    mean_x_left_shoulder = np.mean(left_shoulder_x[:10])
    within_threshold_count_x = 0
    for i in range(len(left_shoulder_x)):
        x_diff = abs(left_shoulder_x[i] - mean_x_left_shoulder)
        if x_diff < squat_x_threshold:
            within_threshold_count_x += 1
            frame_mask.append(True)
        else:
            frame_mask.append(False)


    percentage_within_threshold_x = (within_threshold_count_x / len(left_shoulder_x)) * 100
    # print(percentage_within_threshold_x)
    return percentage_within_threshold_x, frame_mask

import math

def angle_between_points(p1, p2, p3):
    """Calculate the angle between three points."""
    # Calculate the lengths of the sides of the triangle
    a = math.sqrt((p2[0] - p1[0])**2 + (p2[1] - p1[1])**2)
    b = math.sqrt((p3[0] - p2[0])**2 + (p3[1] - p2[1])**2)
    c = math.sqrt((p1[0] - p3[0])**2 + (p1[1] - p3[1])**2)

    # Check if the three points form a valid triangle
    if a + b <= c or a + c <= b or b + c <= a:
        return -1

    # Calculate the angle using the Law of Cosines
    angle_rad = math.acos((a**2 + b**2 - c**2) / (2 * a * b))
    angle_deg = math.degrees(angle_rad)
    return angle_deg


def squat_depth(shoulder, hip, knee, ankle):
    angle_shoulder_hip_knee = 360
    angle_hip_knee_ankle = 360
    for i in range(len(shoulder)):
        cur_angle_shoulder_hip_knee = angle_between_points(shoulder[i], hip[i], knee[i])
        cur_angle_hip_knee_ankle = angle_between_points(hip[i], knee[i], ankle[i])  # Adjust the last parameter if needed

        # print(cur_angle_shoulder_hip_knee, cur_angle_hip_knee_ankle)

        if cur_angle_shoulder_hip_knee > 45:
            angle_shoulder_hip_knee = min(angle_shoulder_hip_knee, cur_angle_shoulder_hip_knee)
        if cur_angle_hip_knee_ankle > 45:
            angle_hip_knee_ankle = min(angle_hip_knee_ankle, cur_angle_hip_knee_ankle)

    return angle_shoulder_hip_knee, angle_hip_knee_ankle