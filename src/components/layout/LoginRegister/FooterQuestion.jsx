import React from "react";
export function FooterQuestion({ question, action, link }) {
  return (
    <p className="footer__question">
      {question}
      <a href={link} className="footer__register">
        {action}
      </a>
    </p>
  );
}
