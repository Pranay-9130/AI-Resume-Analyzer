import os
from dotenv import load_dotenv
from google import genai

load_dotenv()

client = genai.Client(
    api_key=os.getenv("GEMINI_API_KEY")
)


def generate_ai_review(resume_text, job_description):
    prompt = f"""
You are an expert ATS Resume Reviewer.

Analyze the following resume against the job description.

Resume:
{resume_text}

Job Description:
{job_description}

Return the response ONLY in Markdown format.

Use this exact structure:

# Overall Assessment

Write 2-3 sentences.

# Strengths

- Point 1
- Point 2
- Point 3

# Weaknesses

- Point 1
- Point 2
- Point 3

# Recommendations

- Point 1
- Point 2
- Point 3

# Interview Readiness

Give a score out of 5 stars and explain why.
"""

    try:
        response = client.models.generate_content(
            model="gemini-2.5-flash",
            contents=prompt,
        )

        return response.text

    except Exception as e:
        print("Gemini Error:", e)
        return f"Error: {e}"