import React from 'react'

const Card = ({topic,total, color}) => {
    return (
            <div className ='col-lg-4 col-6 card small-card border ' style={{backgroundColor:color}}>
                <div className="text-center my-auto">
                    <h5>{topic}</h5>
                    <p className="number"> 
                        {total}
                    </p>
                 </div>
            </div>
                 
    )
}

export default Card
