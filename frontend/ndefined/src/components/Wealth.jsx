import '../cssForComponents/wealth.css'
export default function Wealth({wealthNumber}){
    return(
        <>
            <div className="Wealth-container">
                <div className='wealth-image-container'>
                    <img src='finance-planner2.gif' className='wealth-img'/>
                </div>
                <div className='wealth-heading-container'>
                    <div className='wealth-heading-text-container'>
                    <p className='wealth-heading'>Total Wealth<br></br>Generated</p>
                    </div>
                
                <br></br>
                <p className='wealth-heading' id='number'>{wealthNumber}</p>
                </div>
                
            </div>
        </>
    )
}