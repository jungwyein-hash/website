import sys
from pypdf import PdfReader

path = sys.argv[1]
r = PdfReader(path)
for i, p in enumerate(r.pages, 1):
    print(f"\n=========== PAGE {i} ===========")
    try:
        print(p.extract_text() or "(no text)")
    except Exception as e:
        print(f"(extract error: {e})")
