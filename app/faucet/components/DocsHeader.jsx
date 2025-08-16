import React from 'react';
import './DocsHeader.css';

// Simple header that mimics the MkDocs Material top bar
// Faucet tab is shown as selected (active) when rendered inside the app
export default function DocsHeader() {
  return (
    <header className="docs-header">
      <div className="docs-header__inner">
        <a className="docs-header__brand" href="/">
          <img src="/animecoin.png" alt="AnimeChain" className="docs-header__logo" />
          <span className="docs-header__title">AnimeChain Docs</span>
        </a>
        <nav className="docs-header__nav" aria-label="Main Navigation">
          <a className="docs-header__link" href="/">Home</a>
          <a className="docs-header__link" href="/use-animechain/">Use AnimeChain</a>
          <a className="docs-header__link" href="/developers/">Developers</a>
          <a className="docs-header__link" href="/architecture/">Architecture</a>
          <a className="docs-header__link" href="/app.md">Interactive Tools</a>
          <a className="docs-header__link docs-header__link--active" href="/app/">Faucet</a>
        </nav>
      </div>
    </header>
  );
}

