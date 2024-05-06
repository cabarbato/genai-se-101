import type { Component } from "solid-js";
import styles from "./App.module.css";

const App: Component = (props) => (
  <>
    <header class="container is-max-desktop">
      <h1 class={styles.header}>Gen AI Demo</h1>
    </header>
    {props.children}
  </>
);

export default App;
