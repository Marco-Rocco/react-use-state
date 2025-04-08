import { useState } from "react";
import languages from "../assets/languages"
import Buttons from "./Buttons"


export default function Main() {
    return (
        <>
            <main>
                <h1>Learn Web development</h1>
                <Buttons languages={languages} />
            </main>
        </>
    )
}