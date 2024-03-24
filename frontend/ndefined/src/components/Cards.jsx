import '../cssForComponents/cards.css'
export function Cards(){
    return(
    <>
        <div className="Cards-container">
           
            <div className="cards-Wrapper">
                <Card heading="card-1" description='loremA graphic representation of data abstracted from the banks of every computer in the tunnel’s ceiling. The alarm still oscillated,
'/>
                <Card heading='card-2' description='loremThe knives seemed to have been sparsely decorated, years before, with a luminous digital display wired to a subcutaneous chip. 
'/>
                <Card heading='card-3' description='He woke and found her stretched beside him in the center of his closed left eyelid. Strata of cigarette smoke rose from the tiers, 
'/>
                
            </div>
         
        </div>
    </>
    )
}

function Card({heading,description}){

    return(
        <>
            <div className="card-wrapper" id='ABOUT US'>
                <div className="heading-card">
                   <p> {heading}</p>
                    </div>
                <div className="description-card">
                    <p className='description-p-tag'>{description}</p>
                    </div>
                    <div className='button-learnmore-container'>
                        <button className='button-learnmore'>Learn More</button>
                    </div>
            </div>
        </>
    )
}