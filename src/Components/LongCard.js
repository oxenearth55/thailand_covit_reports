import React from 'react'

const LongCard = ({topic, total, newCase, color}) => {
    return (
        
        <div className ='col-12 card border long-card' style={{backgroundColor:color}}>
            <div className="text-center my-auto">   
                <h5>{topic}</h5>
                <p className="number"> 
                    {total}
                </p>   
                <p>
                    <span>[ + {newCase}]</span>
                </p>

            </div>    
        </div>
    )
}

export default LongCard
