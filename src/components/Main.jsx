import languages from "../assets/languages"
import Buttons from "./Buttons"

export default function Main() {
    return (
        <>
            <main>
                <Buttons languages={languages} />
            </main>
        </>
    )
}