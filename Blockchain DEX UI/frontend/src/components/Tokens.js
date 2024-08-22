import React from 'react'
import tokenList from "../tokenList.json";
import '../Tokens.css';

function Tokens() {
  return (
    <div className="tokens-container">
      <div className="tokens-list">
        {tokenList.map((token, index) => (
          <div className="token-card" key={index}>
            <img src={token.img} alt={token.name} className="token-image" />
            <div className="token-info">
              <h3>{token.name}</h3>
              <p>{token.ticker}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tokens;