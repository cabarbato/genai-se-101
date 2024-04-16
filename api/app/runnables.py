from langchain_openai import AzureOpenAIEmbeddings
from langchain.vectorstores import FAISS


class AzureOpenAiRunnable:
    """
    Class for running Azure OpenAI related queries
    
    """
    def __init__(self, config, content):
        self.vector_store = FAISS.from_texts(
            [content],
            embedding=AzureOpenAIEmbeddings(**config),
        )

    def vector_search(self):
        return self.vector_store.as_retriever()
