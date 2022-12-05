import type { Component } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';
import Avatar from './lib/Avatar';

const App: Component = () => {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          class={styles.link}
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Solid
        </a>
      </header>
      <Avatar
        size={60}
        name="Maria Mitchell"
        variant="pixel"
        colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
      />

      <Avatar
        size={60}
        name="Maria Mitchell"
        variant="marble"
        colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
      />

      <Avatar
        size={60}
        name="Maria Mitchell"
        variant="bauhaus"
        colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
      />


      <Avatar
        size={60}
        name="Maria Mitchell"
        variant="beam"
        colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
      />

      <Avatar
        size={60}
        name="Maria Mitchell"
        variant="sunset"
        colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
      />

      <Avatar
        size={60}
        name="Maria Mitchell"
        variant="ring"
        colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
      />
    </div>
  );
};

export default App;
