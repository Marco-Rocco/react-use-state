export default function Card(details) {
    const element = details.details
    return (


        <div className="card">
            <h3>{element ? element.title : ''}</h3>
            <p>{element ? element.description : ''}</p>
        </div>
    )
}

