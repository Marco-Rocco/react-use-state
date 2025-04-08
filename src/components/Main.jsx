import languages from "../assets/languages"
import Buttons from "./Buttons"
import Card from "./Card"

export default function Main() {
    return (
        <>
            <main>
                <Buttons languages={languages} />
                <Card />
            </main>
        </>
    )
}