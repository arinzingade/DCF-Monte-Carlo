import '../cssForComponents/wealth.css'
export default function Wealth({wealthNumber}){
    return(
        <>
            <div className="Wealth-container">
                <div className='wealth-image-container'>
                    <img src='finance-planner.gif' className='wealth-img'/>
                </div>
                <div className='wealth-heading-container'>
                <p className='wealth-heading'>Total Wealth<br></br> Generated</p>
                <br></br>
                <p className='wealth-heading'>{wealthNumber}</p>
                </div>
                
            </div>
        </>
    )
}