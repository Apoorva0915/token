import React, { useState } from "react";
import {token} from "../../../declarations/token"
import { Principal } from "@dfinity/principal";


function Transfer() {
  const[recipientId, setRecipientId]=useState("");
  const [amount , setAmount]=useState("")
  const [buttonText,setButtonText]=useState("Tansfer")
  const [disabled,setDisabled]=useState(false);
  async function handleClick() {
    setDisabled(true);
    const recipient=Principal.fromText(recipientId);
    const amountTransfer=Number(amount);
   const result= await token.transfer(recipient,amountTransfer);
    setButtonText(result);
    setDisabled(false);
  }

  return (
    <div className="window white">
      <div className="transfer">
        <fieldset>
          <legend>To Account:</legend>
          <ul>
            <li>
              <input
                type="text"
                id="transfer-to-id"
                value={recipientId}
                onChange={(e)=>setRecipientId(e.target.value)}
              />
            </li>
          </ul>
        </fieldset>
        <fieldset>
          <legend>Amount:</legend>
          <ul>
            <li>
              <input
                type="number"
                id="amount"
                value={amount}
                onChange={(e)=>setAmount(e.target.value)}
              />
            </li>
          </ul>
        </fieldset>
        <p className="trade-buttons">
          <button id="btn-transfer" onClick={handleClick}  disabled={disabled} >
          {buttonText}
          </button>
        </p>
      </div>
    </div>
  );
}

export default Transfer;
