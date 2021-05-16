import React, {useMemo, useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { grabAllNewCase } from '../Reducer/covidSlice'

//NOTE Components
import Card from '../Components/Card'
import Date from '../Components/Date'
import Pagination from '../Components/Pagination'


const Daily = () => {
    const [pagination, setPagination] = useState(0)
    const [display, setDisplay] = useState([])
    const [interval, setInterval] = useState(1)
    const dailyCase = useSelector(state => state.covid_info.dailyCase)
    const dispatch = useDispatch()

    useMemo( () => {
        dispatch(grabAllNewCase())
    },[])

    useEffect(() => {
        manageInterval()
    },[interval])

    const manageInterval = () => {
        const start = (5 * interval)-4
        const end = 5 * interval 
        const array = []
        for(let i = start; i<=end; i++){
            // NOTE Prevent the last page to show unnescesscery page
            if(i <= dailyCase.length-1 && interval !== 1){
                array.push(i)
            }
            //NOTE We must have this condition because first rendering, dailyCase.length willbe set to 1
            //So, above condition will be ignored at the begining 
            if(interval === 1){
                array.push(i)     
            }     
        }
        setDisplay(array)
        //NOTE When page was changed, the current will be set to the first index
        setPagination(start-1)
    }


    return (
            <div className="container">
                <Date date={dailyCase[pagination].Date}/>   
                <div className="row my-4">
                    <Card topic={'New Case:'} total={dailyCase[pagination].NewConfirmed} color='#ff751a'/>  
                    <Card topic={'New Recovered'} total={dailyCase[pagination].NewRecovered} color='#00b300'/> 
                    <Card topic={'New Deaths:'} total={dailyCase[pagination].NewDeaths} color='#ff704d'/>   
                    <Card topic={'New Hospitalized'} total={dailyCase[pagination].NewHospitalized} color='#b36b00'/>
                </div>      

                <div className="pagination my-5">
                    
                    {interval !== 1 && <div onClick={() => setInterval(interval-1)} className='change'>Previous</div>}
                    {display.map(number =>                    
                        <Pagination number={number} setPagination={setPagination} pagination={pagination+1}/>
                    )}
                    {interval !== null && interval !== Math.ceil((dailyCase.length-1)/5) &&
                        <div onClick={() => {setInterval(interval+1)} } className='change'>Next</div>
                    }
                </div>
            </div>          
    )
}

export default Daily
