import { Component, createSignal, createResource } from "solid-js";

const SimpleInput: Component = () => {
  const fetchResponse = async (e) => {
    e.preventDefault();
    const body = JSON.stringify({
      content: userMessage(),
    });

    return await fetch("http://localhost:8088/simple", {
      method: "POST",
      body,
    }).json();
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
          <button class="button is-primary" onClick={setAssistantMessage}>
            Go
          </button>
        </div>
      </form>
      {assistant()}
    </main>
  );
};

export default SimpleInput;
