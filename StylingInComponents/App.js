import React from "react"
import boxes from "./boxes"

export default function App(props) {
    const [squares, setSquares] = React.useState(boxes)
    
    const styles = {
        backgroundColor: props.darkMode ? "#222222" : "#cccccc",
        borderColor: props.borderColor?"white":"blue"
    }
    
    const squareElements = squares.map(square => (
        <div style={styles} className="box" key={square.id}></div>
    ))
    return (
        <main>
            {squareElements}
        </main>
    )
}
