import React from 'react';
import './DocsHeader.css';

// Simple header that mimics the MkDocs Material top bar
// Faucet tab is shown as selected (active) when rendered inside the app
export default function DocsHeader() {
  return (
    <header className="docs-header">
      <div className="md-header__inner docs-header__inner" aria-label="Header">
        <a href="/" title="AnimeChain Documentation" className="md-header__button md-logo docs-header__brand" aria-label="AnimeChain Documentation">
          <img src="/animechain.webp" alt="AnimeChain" className="docs-header__logo" />
          <span className="docs-header__title">AnimeChain Documentation</span>
        </a>
        <div className="md-header__spacer" />
        <button className="md-header__button md-icon" aria-label="Search" disabled>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9.5 3A6.5 6.5 0 0 1 16 9.5c0 1.61-.59 3.09-1.56 4.23l.27.27h.79l5 5-1.5 1.5-5-5v-.79l-.27-.27A6.52 6.52 0 0 1 9.5 16 6.5 6.5 0 0 1 3 9.5 6.5 6.5 0 0 1 9.5 3"/></svg>
        </button>
      </div>
      <div className="docs-header__inner">
        <nav className="docs-header__nav" aria-label="Main Navigation">
          <a className="docs-header__link" href="/">Home</a>
          <a className="docs-header__link" href="/use-animechain/">Use AnimeChain</a>
          <a className="docs-header__link" href="/animecoin/">Animecoin</a>
          <a className="docs-header__link" href="/developers/">Developers</a>
          <a className="docs-header__link" href="/architecture/">Architecture</a>
          <a className="docs-header__link" href="/interactive-tools/">Interactive Tools</a>
          <a className="docs-header__link docs-header__link--active" href="/app/">Faucet</a>
        </nav>
      </div>
    </header>
  );
}

