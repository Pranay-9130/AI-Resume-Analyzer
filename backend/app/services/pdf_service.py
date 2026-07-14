import pdfplumber


def extract_text_from_pdf(file_path):
    """
    Extracts text from all pages of a PDF file.

    Args:
        file_path (str): Path to the uploaded PDF.

    Returns:
        str: Combined text from all pages.
    """

    extracted_text = ""

    with pdfplumber.open(file_path) as pdf:
        for page in pdf.pages:
            text = page.extract_text()

            if text:
                extracted_text += text + "\n"

    return extracted_text