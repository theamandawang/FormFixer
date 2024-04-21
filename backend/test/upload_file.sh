#!/bin/sh

curl -X POST \
    -F "file=@./../../res/demo.mp4" \
    http://localhost:8080/upload 
    # -d @./test.txt \
    # -d @./../../res/demo.mp4 \
    # -H "enctype=multipart/form-data" \
