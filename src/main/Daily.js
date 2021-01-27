import React, {useMemo, Fragment, useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { grabAllNewCase } from '../Reducer/covidSlice'

//NOTE Components
import Intro from '../Components/Intro'
import Card from '../Components/Card'
import Date from '../Components/Date'


const Daily = () => {
    const [pagination, setPagination] = useState(0)
    const [array, setArray] = useState([])
    const dailyCase = useSelector(state => state.covid_info.dailyCase)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(grabAllNewCase())
    },[])


    return (
        <Fragment>
            <Intro/>
            <div className="container">
                <Date date={dailyCase[pagination].Date}/>   
                <div className="row my-4">
                    <Card topic={'New Case:'} total={dailyCase[pagination].NewConfirmed} color='#ff751a'/>  
                    <Card topic={'New Recovered'} total={dailyCase[pagination].NewRecovered} color='#00b300'/> 
                    <Card topic={'New Deaths:'} total={dailyCase[pagination].NewDeaths} color='#ff704d'/>   
                    <Card topic={'New Hospitalized'} total={dailyCase[pagination].NewHospitalized} color='#b36b00'/>
                </div>      
            </div>
             

            
        </Fragment>
    )
}

export default Daily
