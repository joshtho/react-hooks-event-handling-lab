// Code Keypad Component Here
import React from "react";

function Keypad() {
    function enteringPassword() {
         console.log("Entering password...")
    }
    return (
        <input type="password" onChange={enteringPassword}/>
    )
}

export default Keypad