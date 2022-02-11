import React from "react";
import Carousel from 'react-elastic-carousel'
import CarrouselCard from './CarrouselCard.js'
const CarouselContainer =({allshows})=>{
    
    const breakPoints=[
            { width: 1, itemsToShow: 1 },
            { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },

    ]
    const ultimos = allshows.slice(allshows.length-5)
    
    return (
        <div>
            <Carousel breakPoints={breakPoints} itemsToScroll={2}>
                {ultimos?.map((e, i)=>(
                    <CarrouselCard 
                    key={e.id}
                    id={e.id}
                    name={e.name}
                    image={e.image}
                    summary={e.summary}
                    />
                )
                )}
            </Carousel>
        </div>
    )
}
export default CarouselContainer