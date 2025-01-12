from flask import Blueprint, request, jsonify
from uploads.upload_service import save_uploaded_file
from models.ai_model import ImageAnalyzer
from models import Analysis, db, Upload

upload_bp = Blueprint("upload", __name__)

# Instantiate the model
analyzer = ImageAnalyzer("path/to/your/model.h5")


@upload_bp.route("/api/upload", methods=["POST"])
def upload_file():
    file = request.files.get("image")

    if not file:
        return jsonify({"error": "No file provided"}), 400

    # Save the file
    file_path = save_uploaded_file(file)

    # Create and save the upload record
    upload = Upload(file_path=file_path)
    db.session.add(upload)
    db.session.commit()

    # Analyze the image
    analysis_result = analyzer.analyze(file_path)

    # Create and save the analysis record
    analysis = Analysis(upload_id=upload.id, result=analysis_result)
    db.session.add(analysis)
    db.session.commit()

    return jsonify({"result": analysis_result})
