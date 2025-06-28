import cv2
from ultralytics import RTDETR

# Load the RT-DETR model (change path if needed)
model = RTDETR('src/camera/camera/rtdetr.pt')

# Start webcam capture
cap = cv2.VideoCapture(2)  # Use appropriate camera index if not default

while cap.isOpened():
    ret, frame = cap.read()
    if not ret:
        break

    # Run inference
    results = model(frame)

    # Plot results on the frame
    annotated_frame = results[0].plot()

    boxes = results[0].boxes
    if boxes is not None:
        for i in range(len(boxes.conf)):
            conf = boxes.conf[i].item()
            cls = boxes.cls[i].item()
            class_name = model.names[cls]  # Get class name
            print(f"Detected: {class_name} ({conf:.2f})")

    # Display the annotated frame
    cv2.imshow('RT-DETR Webcam Inference', annotated_frame)

    # Exit if 'q' is pressed
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

# Clean up
cap.release()
cv2.destroyAllWindows()