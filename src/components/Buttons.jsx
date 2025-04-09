import { useState } from "react";
import Card from "./Card"


export default function buttons(props) {
    const languages = props.languages;

    const [details, setDetails] = useState(undefined);
    return (

        <>
            {
                languages.map(element =>
                    <button key={element.id} onClick={() => setDetails(element)} >{element.title}</button>
                )
            }
            < Card details={details} />
        </>
    )
}