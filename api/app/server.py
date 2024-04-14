from fastapi import FastAPI
from fastapi.responses import RedirectResponse
from langserve import add_routes
from app.runnables import openAiVectorRunnable

app = FastAPI(
    title="Demo OpenAI/LangChain Server",
    version="0.1.0"
    )


@app.get("/")
async def redirect_root_to_docs():
    return RedirectResponse("/docs")


# Edit this to add the chain you want to add
add_routes(app, openAiVectorRunnable)

if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="0.0.0.0", port=8000)
