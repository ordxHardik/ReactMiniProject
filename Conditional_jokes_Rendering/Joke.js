import { func } from "prop-types"
import React from "react"

export default function Joke(props) {
    const[isShown,setIsShown]=React.useState(false)
    function toggleShow(){
        setIsShown(prevShown !=prevShown)
    }

    return (
        <div>
            {/* this is customizing of prop  */}
            {/* <h3 style={{display: props.setup ? "block" : "none"}}>Setup: {props.setup}</h3>
             */}

             {props.setup && <h3>{props.setup}</h3>}
            {isShown && <p>{props.punchline}</p>}
            {/* Above is conditional rendering  */}

            {/* this is conditional rendering to make hide and show button but the more simpler way to do this is by using ternary operator  */}
            {isShown && <button onClick={toggleShow}>Hide Punchline</button>}
            {!isShown&&<button onClick={toggleShow}>Show Punchline</button>}

            <button onClick={toggleShow}>{isShown ? "Hide" : "Show"} Punchline</button>


            {/* when we click the button the isShown value is flipped  */}
            <hr />
       
            <hr />
        </div>
    )
}


// const cond1 = false
// const cond2 = false
// if(cond1 && console.log("Hello there")) {
//     // this code will NOT run because condition  is false
// }