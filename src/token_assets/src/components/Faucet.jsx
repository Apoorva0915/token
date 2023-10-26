import React, { useState } from "react";
import {token} from "../../../declarations/token"

function Faucet() {
   
  const [disabled,setDisabled]=useState(false);
  const [buttonText,setButtonText]=useState("Gimme gimme")

  async function handleClick(event) {
    setDisabled(true);
   const result=await token.payOut();
   setButtonText(result);
  }

  return (
    <div className="blue window">
      <h2>
        <span role="img" aria-label="tap emoji">
          🚰
        </span>
        Faucet
      </h2>
      <label>Get your free DANK tokens here! Claim 10,000 DANG Tokens to your account.</label>
      <p className="trade-buttons">
        <button id="btn-payout" onClick={handleClick} disabled={disabled} >
          {buttonText}
        </button>
      </p>
    </div>
  );
}

export default Faucet;
