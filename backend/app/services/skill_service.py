import re
from data.skills import SKILLS


def extract_skills(resume_text):
    detected_skills = []

    for skill in SKILLS:
        pattern = r"\b" + re.escape(skill) + r"\b"

        if re.search(pattern, resume_text, re.IGNORECASE):
            detected_skills.append(skill)

    return detected_skills