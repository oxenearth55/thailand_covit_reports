import React from 'react'

const Pagination = ({number, pagination, setPagination}) => {
    return (
            <div className={`number border  ${pagination === number && 'current'}`}
            onClick={() => setPagination(number-1)} >
                {number}   
            </div>
    )
}

export default Pagination
