from data.skills import SKILLS

def calculate_ats_score(resume_text, job_description):
    resume_lower = resume_text.lower()
    jd_lower = job_description.lower()

    resume_skills = []
    jd_skills = []

    for skill in SKILLS:
        if skill.lower() in resume_lower:
            resume_skills.append(skill)

    for skill in SKILLS:
        if skill.lower() in jd_lower:
            jd_skills.append(skill)

    matched_skills = []

    for skill in jd_skills:
        if skill in resume_skills:
            matched_skills.append(skill)

    missing_skills = []

    for skill in jd_skills:
        if skill not in resume_skills:
            missing_skills.append(skill)

    if len(jd_skills) == 0:
        score = 100
    else:
        score = round((len(matched_skills) / len(jd_skills)) * 100, 2)

    return {
        "ats_score": score,
        "matched_skills": matched_skills,
        "missing_skills": missing_skills
    }