from fastapi import FastAPI
from fastapi.responses import RedirectResponse
from langserve import add_routes
from app.runnables import AzureOpenAiRunnable
from dotenv import load_dotenv
import os

load_dotenv()

app = FastAPI(
    title="Demo OpenAI/LangChain Server",
    version="0.1.0"
    )


@app.get("/")
async def redirect_root_to_docs():
    """
    Redirects root requests to the documentation
    """
    return RedirectResponse("/docs")

# Azure OpenAI Runnable routes
runnable = AzureOpenAiRunnable(
    config = {
        "azure_deployment": os.environ["AZURE_OPENAI_DEPLOYMENT_NAME"],
        "openai_api_version": os.environ["AZURE_OPENAI_API_VERSION"],
    },
    content="test message"
)
add_routes(app, runnable.vector_search())

if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="0.0.0.0", port=8000)
