from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/create-context/{context_id}")
async def create_context(context_id: str):
    # TO DO: Call LLM service methods here
    pass

if __name__ == "__main__":
    uvicorn.run(app, host="0:0:0:0", port=8000)