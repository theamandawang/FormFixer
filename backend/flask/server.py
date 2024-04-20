#!/usr/bin/env python
import os

from flask import Flask, request, jsonify
from pymongo import MongoClient

from video import process_video

app = Flask(__name__)
app.config['MAX_CONTENT_LENGTH'] = 1024 * 1024 * 1024 # 1GB

client = MongoClient("mongo:27017")

@app.route('/')
def root():
    return "Alive"


@app.route('/upload', methods=['POST'])
def upload_video():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part in the request'}), 400

    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400

    # Check if the file is an MP4 video
    if file.filename.split('.')[-1].lower() not in ['mp4']:
        return jsonify({'error': 'Unsupported file format. Only MP4 videos are allowed'}), 400

    # Process file
    track: list[(int, bool)] = process_video(file)

    return jsonify({'message': 'Video uploaded successfully'}), 200


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=os.environ.get("FLASK_SERVER_PORT", 9090), debug=True)

