export default function Card(click) {
    const element = click.click
    return (


        <div className="card">
            <h1>{element ? element.title : ''}</h1>
            <p>{element ? element.description : ''}</p>
        </div>
    )
}

