def generate_suggestions(matched_skills, missing_skills, ats_score):
    suggestions = []

    # ATS score based suggestions
    if ats_score < 50:
        suggestions.append(
            "Your resume has a low ATS score. Consider tailoring it specifically to the job description."
        )
    elif ats_score < 75:
        suggestions.append(
            "Your resume matches the job reasonably well, but adding more relevant skills can improve it."
        )
    else:
        suggestions.append(
            "Your resume is a strong match for this job."
        )

    # Missing skills suggestions
    if missing_skills:
        suggestions.append(
            "Consider adding these skills if you have experience: "
            + ", ".join(missing_skills)
        )

    # General suggestions
    suggestions.append(
        "Use action verbs such as Developed, Built, Designed, and Implemented."
    )

    suggestions.append(
        "Quantify your achievements using numbers wherever possible."
    )

    suggestions.append(
        "Keep your resume to one page if you have less than 5 years of experience."
    )

    return suggestions