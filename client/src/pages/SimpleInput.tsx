import { Component, createSignal, createResource } from "solid-js";

const SimpleInput: Component = () => {
  const fetchResponse = async () => {
    const body = JSON.stringify({
      content: userMessage(),
    });
    try {
      const response = await fetch("http://localhost:8088/simple", {
        method: "POST",
        body,
      });
      return response.json();
    } catch (error) {
      return "Something went wrong, please ask again later.";
    }
  };

  const [userMessage, setUserMessage] = createSignal("");
  const [assistantMessage, setAssistantMessage] = createSignal("");
  const [assistant] = createResource(assistantMessage, fetchResponse);

  return (
    <main class="container is-max-desktop">
      <form class="box">
        <label class="label" for="question">
          Password
        </label>
        <div class="is-flex">
          <input
            class="input mr-3"
            id="question"
            placeholder="Type your question here"
            value={userMessage()}
            onChange={(e) => setUserMessage(e.currentTarget.value)}
          ></input>
          <button type="button" class="button is-primary" onClick={setAssistantMessage}>
            Go
          </button>
        </div>
      </form>
      <article>{userMessage() && assistant()}</article>
    </main>
  );
};

export default SimpleInput;
