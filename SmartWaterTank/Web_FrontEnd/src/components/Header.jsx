import React from 'react';

export default function Header() {
  return (
    <header className="d-flex flex-wrap justify-content-center py-3  border-bottom">
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
        <svg className="bi " width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
        <span className="fs-4">Simple header</span>
      </a>

      <ul className="nav nav-pills">
        <li className="nav-item"><a href="#" className="nav-link active" aria-current="page">Home</a></li>
        <li className="nav-item"><a href="#" className="nav-link">Features</a></li>
        <li className="nav-item"><a href="#" className="nav-link">Pricing</a></li>
        <li className="nav-item"><a href="#" className="nav-link">FAQs</a></li>
        <li className="nav-item"><a href="#" className="nav-link">About</a></li>
      </ul>
    </header>
  );
}

