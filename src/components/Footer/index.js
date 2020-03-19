import React from 'react';
import './index.css';

export default function Footer() {
  return (
    <footer className="container">
      <p>
        Developed by:{' '}
        <a target="_blank" rel="author" href="https://github.com/jnetto23">
          jnetto23
        </a>
      </p>
      <p>
        Inspired by:{' '}
        <a
          target="_blank"
          rel="external"
          href="https://github.com/florinpop17/app-ideas/blob/master/Projects/1-Beginner/Border-Radius-Previewer.md"
        >
          app-ideas
        </a>
      </p>
    </footer>
  );
}
