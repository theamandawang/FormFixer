<img src="res/banner.jpg" width=36 height=36>

# FormFixer: Revolutionizing Fitness with Cutting-Edge AI!

## Inspiration

Tired of guesswork in the gym? New to lifting and don't know where to start? Say goodbye to uncertainty and hello to precision with FormFixer.

Imagine stepping into the gym and having a personal trainer at your fingertips, guiding you through every rep, every set, and every exercise with unmatched accuracy. With FormFixer, that vision becomes a reality.

FormFixer uses state-of-the-art object detection and pose estimation algorithms that seamlessly analyze your every move in near real-time, meticulously evaluating your form and providing actionable insights to optimize your workouts and reduce your risk of injury.

Join the fitness revolution today with FormFixer, empowering people in their fitness journeys and redefining the way the world trains, one rep at a time.

## What it does

FormFixer revolutionizes your fitness journey by offering a seamless platform for analyzing exercise form with precision. By uploading videos of your workouts, such as barbell squats, FormFixer employs advanced pose estimation algorithms and heuristic analysis to meticulously assess crucial metrics like shoulder alignment and squat depth.

Through data-driven insights, FormFixer delivers personalized feedback tailored to your unique needs, empowering you to make targeted improvements and enhance your performance effectively. With FormFixer, achieving your fitness goals becomes a streamlined and efficient process, guided by actionable feedback derived from cutting-edge technology.

## How we built it

1 **Frontend with React Native and Expo:** Utilized React Native and Expo for their user-friendly cross-platform development capabilities, enabling rapid prototyping and seamless compatibility across devices.

2. **Backend with Python and Flask:** Leveraged Flask's lightweight framework in Python for backend development, ensuring efficient RESTful API endpoints, straightforward business logic implementations, and ease of compatibility with machine learning models.

3. **Containerization with Docker:** Employed Docker for server backend containerization, enhancing scalability and maintainability by simplifying deployment and ensuring consistent development environments.

4. **Advanced Computer Vision with YOLO:** Integrated YOLO for object detection and pose estimation, enabling real-time tracking of objects and enhancing user experience with cutting-edge computer vision capabilities.

5. **Optimized File Transfer with Base64 Encoding and Multipart Form Data:** Utilized base64 encoding and multipart form data for efficient file transfer between client and server, minimizing latency and bandwidth consumption while ensuring smooth streaming of files.

6. **Exercise-specific Metrics & Algorithms:** Employed mathematics and statistical methods to precisely analyze angles, assess alignment, and accurately and reliably determine exercise-specific metrics.

## Challenges we ran into

As we delved into our project, we encountered several hurdles that truly put our collaborative skills to the test. Initially, configuring the Docker container proved to be a formidable challenge, with prolonged installation times and intricate dependency management. Nonetheless, we successfully navigated through the complexities [HOW].
Next, the React Native/Expo tech stack presented its own set of challenges. Since most of us were new to mobile development, we had to learn how to use Expo Go as well as translate our React experience into React Native. Through the learning curve was steep, as mobile dev is quite different from web dev, we were eventually able to adjust to the new environment.  
However, the most persistent challenge by far arose when attempting to transmit large video files as multipart data to the backend. Despite our best efforts, achieving seamless file transmission proved to be difficult due to sparse and misleading documentation. Yet, through perseverance and collaborative problem-solving, we were able to use compression and base to overcome this obstacle.

## Accomplishments that we're proud of
We were able to build an application that successfully highlights key metrics in one's squatting form. The body alignment is critical for maintaining one's stability and reducing pressure on the spine, and we were able to confirm that… The squat depth metric is important for activating a full range of motion through the exercise. Through our testing, we were able to see that the application showed robustness and responded appropriately to "good form" squats and "bad form" squats and showed adequate tips for reducing injury and improving performance. Our application has a lot of potential to scale to support more exercises across weightlifting. 

## What we learned

Going into this project, none of us had extensive mobile development experience. As such, we all learned about the React Native/Expo stack and sharpened our mobile development skills. Additionally, we learned a decent amount about YOLO internals as well as other pose estimation techniques. Finally, we learned a whole lot about configuring Docker for development and managing the streaming of large files.

## What's next for FormFixer

There are so many features we'd love to add to FormFixer, given the chance. We'd start with adding more support for more exercises, such as deadlift, bench press, yoga, etc. We'd also like to add profiles, allowing you to track your fitness progress and connect with gym friends. We're incredibly proud of what we were able to accomplish at LAHacks 2024, and we hope to be able to continue FormFixer.
