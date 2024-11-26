from flask import Blueprint, request, jsonify
from ..models import db, User, Upload, Analysis

api = Blueprint("api", __name__)


@api.route("/users", methods=["GET"])
def get_users():
    users = User.query.all()
    return jsonify(
        [
            {"id": user.id, "username": user.username, "email": user.email}
            for user in users
        ]
    )


@api.route("/upload", methods=["POST"])
def upload_file():
    file = request.files["file"]
    user_id = request.form.get("user_id")
    file_path = f"uploads/{file.filename}"
    file.save(file_path)

    upload = Upload(user_id=user_id, file_path=file_path)
    db.session.add(upload)
    db.session.commit()

    return jsonify({"message": "File uploaded successfully", "upload_id": upload.id})


@api.route("/analyze/<int:upload_id>", methods=["GET"])
def analyze(upload_id):
    upload = Upload.query.get_or_404(upload_id)
    # Placeholder for actual analysis
    result = {"example_key": "example_value"}

    analysis = Analysis(upload_id=upload.id, result=result)
    db.session.add(analysis)
    db.session.commit()

    return jsonify({"analysis_id": analysis.id, "result": result})
