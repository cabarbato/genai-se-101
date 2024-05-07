import type { Component, ComponentProps, ValidComponent } from "solid-js";
import styles from "./App.module.css";

const App: Component = (props: ComponentProps<ValidComponent>) => (
  <>
    <header class="container is-max-desktop">
      <h1 class={styles.header}>Gen AI Demo</h1>
    </header>
    {props.children}
  </>
);

export default App;
