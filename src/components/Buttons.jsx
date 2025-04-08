// import languages from "../assets/languages"

export default function buttons(props) {
    const languages = props.languages;
    return (
        <>
            {
                languages.map(element =>
                    <button key={element.id}>{element.title}</button>
                )
            }
        </>
    )
}