import React from "react";
import "./Form.css"

export default function Form() {
    return (
        <>
            <h1>Form</h1>

            <form>
                <label htmlFor="username"></label>
                <input type="text" id="username" placeholder="Username" />

                <label htmlFor="email"></label>
                <input type="email" id="email" placeholder="Email" />

                <label htmlFor="password"></label>
                <input type="password" id="password" placeholder="Password" />

                <label htmlFor="repearPassword"></label>
                <input type="password" id="repearPassword" placeholder="Repeat password" />
            </form>
        </>
    )
}