import React from "react"

export default function Form() {
    const [firstName, setFirstName] = React.useState("")
    
    console.log(firstName)
    
    function handleChange(event) {
        // console.log(event.target.value) this is a
        setFirstName(event.target.value)
    }
    
    return (
        <form>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
            />
        </form>
    )
}
