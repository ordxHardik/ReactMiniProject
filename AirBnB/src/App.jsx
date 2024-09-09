import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data"

export default function App() {
            // <Hero />
    const cards = data.map(item => {
        return (
            <Card
                key={item.id}//important because otherwise it will give warning in the console about the uniqness of element because we have used mapping so it is imp to make this argument
                // img={item.coverImg}
                // rating={item.stats.rating}
                // reviewCount={item.stats.reviewCount}
                // location={item.location}
                // title={item.title}
                // price={item.price}
                // openSpots={item.openSpots}
                // instead of above approach we can pass our data in a object
                item={item}
                // or we can use below method that is using spread operator 
                // By that we wont need to use prop.item.img we can directly use prop.img
                // {...item}               
            />
        )
    })        
    
    return (
        <div>
            <Navbar />
            <Hero />
            <section className="cards-list">
                {cards}
                {/* above is how a component is rendered from using a array */}
                {/* put the card in the section tag to style the card\ */}
            </section>
        </div>
    )
}