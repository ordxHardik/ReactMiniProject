import React from "react"

export default function App() {
    const [starWarsData, setStarWarsData] = React.useState({})
    const [count, setCount] = React.useState(0)
    
    
    console.log("Component rendered")

    
    fetch("https://swapi.dev/api/people/1")
        .then(res => res.json())
        .then(data => setStarWarsData(data))//due to this line 

        // using the above way the component is rerendered every time when state is called so there is a way to handle 
        // any time our component is going to render it is going to call fetch so it is going to call setStarWarsData(data) therefore causing react to re render the comopnent so in that case side effect are use which help us
        
    // side effects

    React.useEffect(function() {
        console.log("Effect ran")
        fetch("https://swapi.dev/api/people/1")
            .then(res => res.json())
            .then(data => console.log(data))
    }, [0])  // [0] compared to [0] this [] is a dependency array that tell useEffect when to run 

    // 
    /**
     * Challenge: re-write the useEffect
     * It should run any time `count` changes
     * For now, just console.log("Effect function ran")
     */
    React.useEffect(() => {
        console.log("Effect function ran")
    }, [count])


    
    return (
        <div>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
            <h2>The count is {count}</h2>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Add</button>
        </div>
    )
}
