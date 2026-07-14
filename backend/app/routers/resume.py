from app.services.gemini_service import generate_ai_review
from fastapi import APIRouter, UploadFile, File, Form
import os
print(">>> NEW resume.py LOADED <<<")

from app.services.pdf_service import extract_text_from_pdf
from app.services.skill_service import extract_skills
from app.services.ats import calculate_ats_score
from app.services.suggestion_service import generate_suggestions

router = APIRouter()

UPLOAD_FOLDER = "uploads"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)


@router.post("/upload-resume")
async def upload_resume(
    file: UploadFile = File(...),
    job_description: str = Form(...)
):
    # Save uploaded resume
    file_path = os.path.join(UPLOAD_FOLDER, file.filename)

    with open(file_path, "wb") as buffer:
        buffer.write(await file.read())

    # Extract text from PDF
    extracted_text = extract_text_from_pdf(file_path)

    # Extract skills from resume
    detected_skills = extract_skills(extracted_text)

    # Calculate ATS keyword score
    ats_result = calculate_ats_score(
        extracted_text,
        job_description
    )

    keyword_score = ats_result["ats_score"]

    # Calculate semantic similarity score
    semantic_score = 0

    # Final AI Score
    final_ai_score = round(
        (keyword_score * 0.4) + (semantic_score * 0.6),
        2
    )

    # Generate suggestions
    suggestions = generate_suggestions(
        ats_result["matched_skills"],
        ats_result["missing_skills"],
        final_ai_score
    )
    ai_review = generate_ai_review(
    extracted_text,
    job_description
)
    print(ai_review)

    return {
    "message": "Resume uploaded successfully!",
    "filename": file.filename,

    "resume_skills": detected_skills,

    "keyword_score": keyword_score,
    "semantic_score": semantic_score,
    "final_ai_score": final_ai_score,

    "matched_skills": ats_result["matched_skills"],
    "missing_skills": ats_result["missing_skills"],

    "suggestions": suggestions,

    "ai_review": ai_review
}