import ffmpeg
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
    ret = check_form(tmp_path)
    os.remove(tmp_path)
    
    out_avi = os.path.join("/usr/src/ultralytics/runs/pose/predict", tmp_name + ".avi")
    out_mp4 = os.path.join("/usr/src/ultralytics/runs/pose/predict", tmp_name + ".mp4")
    avi_to_mp4(out_avi, out_mp4)

    return out_mp4, ret


def check_form(video_path):
    return model.predict(video_path, save=True)[0].tojson()

    up_down_thresh = 0.7
    squat_x_coord = 0

    left_shoulder = [result.keypoints.xy[0][6] for result in results]
    print(left_shoulder)

    mean_x_left_shoulder = np.mean(left_shoulder[:10])

    poses = results.xyxy[0]  # Assuming the first index contains the pose data

    # Initialize variables to track the lowest hip position and corresponding frame
    lowest_hip_position = float('inf')
    deepest_frame_index = None

    # Iterate through each pose detected in each frame
    for frame_index, pose in enumerate(poses):
        # Extract keypoint coordinates for the pose
        key_points = pose['keypoints']

        # Extract the y-coordinate of the hips
        hip_y_coordinate = key_points[0][1]  # Assuming the first keypoint represents the hips

        # Update the lowest hip position and corresponding frame index if a lower position is found
        if hip_y_coordinate < lowest_hip_position:
            lowest_hip_position = hip_y_coordinate
            deepest_frame_index = frame_index

    # Print the frame index with the deepest squat
    print("Deepest squat frame index:", deepest_frame_index)

    return []