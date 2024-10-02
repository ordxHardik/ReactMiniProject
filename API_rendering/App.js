import React from "react"

export default function App() {
    const [starWarsData, setStarWarsData] = React.useState({})
    
    console.log("Component rendered")
    
    fetch("https://swapi.dev/api/people/1")
        .then(res => res.json())
        .then(data => setStarWarsData(data))//due to this line 

        // using the above way the component is rerendered every time when state is called so there is a way to handle 
        // any time our component is going to render it is going to call fetch so it is going to call setStarWarsData(data) therefore causing react to re render the comopnent so in that case side effect are use which help us
        
    // side effects
    
    return (
        <div>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
        </div>
    )
}
