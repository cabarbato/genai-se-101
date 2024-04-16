import type { Component } from "solid-js";
import "purecss"
import styles from "./App.module.css";

const App: Component = () => {
  return (
    <div class={styles.App}>
      <header class={styles.header}>Demo Chatbot</header>
      <main>
        <form class="pure-form"><input placeholder="Type your question here"></input></form>
      </main>
    </div>
  );
};

export default App;
