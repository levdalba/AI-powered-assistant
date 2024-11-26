from flask import Blueprint, request, jsonify
from uploads.upload_service import save_uploaded_file


upload_bp = Blueprint("upload", __name__, url_prefix="/api/upload")


@upload_bp.route("/", methods=["POST"])
def upload_file():
    """Handle file upload."""
    if "image" not in request.files:
        return jsonify({"error": "No file part in the request"}), 400

    file = request.files["image"]

    if file.filename == "":
        return jsonify({"error": "No selected file"}), 400

    try:
        # Save the file
        file_path = save_uploaded_file(file)
        # Simulate analysis (Replace this with your AI analysis logic)
        analysis_result = {"file_path": file_path, "result": "Success"}
        return jsonify(analysis_result), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500
