from sentence_transformers import SentenceTransformer, util

# Load model only once
model = SentenceTransformer("all-MiniLM-L6-v2")


def semantic_similarity(resume_text, job_description):

    resume_embedding = model.encode(
        resume_text,
        convert_to_tensor=True
    )

    jd_embedding = model.encode(
        job_description,
        convert_to_tensor=True
    )

    similarity = util.cos_sim(
        resume_embedding,
        jd_embedding
    )

    return round(float(similarity[0][0]) * 100, 2)