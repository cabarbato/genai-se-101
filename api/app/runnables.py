from langchain.embeddings import OpenAIEmbeddings
from langchain.vectorstores import FAISS

def openAiVectorRunnable(content):
    vectorstore = FAISS.from_texts(
        [content], embedding=OpenAIEmbeddings()
    )
    return vectorstore.as_retriever()