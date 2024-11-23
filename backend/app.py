from flask import Flask, request, jsonify  # Flask imports for API handling
import pytesseract  # Tesseract OCR library for text extraction
from PIL import Image  # Python Imaging Library for image processing

# Initialize Flask app
app = Flask(__name__)


# Root route for testing the backend
@app.route("/")
def home():
    return "Flask backend is running!"


# Updated route: OCR endpoint with language support
@app.route("/api/ocr", methods=["POST"])
def ocr():
    # Check if the request contains an image file
    if "image" not in request.files:
        return (
            jsonify({"error": "No image uploaded"}),
            400,
        )  # Return error if no image found

    # Get the uploaded image from the request
    image = request.files["image"]

    # Get the language parameter from the request, defaulting to English ("eng")
    lang = request.form.get("lang", "eng")

    try:
        # Extract text from the image using Tesseract OCR
        text = pytesseract.image_to_string(Image.open(image), lang=lang)
        return jsonify({"text": text})
    except Exception as e:
        # Handle errors (e.g., unsupported language, invalid image)
        return jsonify({"error": f"Failed to process image: {str(e)}"}), 500


# Run the app
if __name__ == "__main__":
    # Make the app accessible externally and enable debugging for development
    app.run(host="0.0.0.0", port=5000, debug=True)
