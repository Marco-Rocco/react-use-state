export default function buttons(props) {
    const languages = props.languages;
    return (
        <>
            {
                languages.map(element =>
                    <button key={element.id} onClick={() => setDetails(element)} >{element.title}</button>
                )
            }
        </>
    )
}