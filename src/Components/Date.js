import React from 'react'

const Date = ({date}) => {
    return (
        <div className="col-lg-5 col-12 my-3  date ">
            <p className="py-2 text-center">       
                <span>Reported Date: </span>
                {date}
            </p>     
        </div>
    )
}

export default Date
