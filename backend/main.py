from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class AnalyzeRequest(BaseModel):
    spec: str

@app.get("/")
def read_root():
    return {"message": "AI Code Reviewer API"}

@app.post("/analyze")
async def analyze(request: AnalyzeRequest):
    # Dummy implementation that returns a sample diff patch
    diff = "--- a/file.py\n+++ b/file.py\n@@\n-print('hello world')\n+print('hello, fixed world')\n"
    return {"patch": diff, "explanation": "Fixed greeting message"}
