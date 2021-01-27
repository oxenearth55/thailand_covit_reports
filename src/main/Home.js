import React, {useEffect, Fragment} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { grabCovidInfo } from '../Reducer/covidSlice'
import Card from '../Components/Card'
import LongCard from '../Components/LongCard'
import Intro from '../Components/Intro'
import Date from '../Components/Date'

const Home = () => {
    const covid_Info = useSelector(state => state.covid_info.info) 
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(grabCovidInfo())
    },[])
   
    return (
        <Fragment>
             <Intro/>
             <div className="container">
                 <Date date={covid_Info.UpdateDate}/>
                <div className="row my-4">
                    <LongCard topic={'Total Case'} total={covid_Info.Confirmed} newCase={covid_Info.NewConfirmed} color=' #ff4d88'/>
                    <LongCard topic={'Total Recovered'} total={covid_Info.Recovered} color='#006622' newCase={covid_Info.NewRecovered}/>   
                    <Card topic={'New Case:'} total={covid_Info.NewConfirmed} color='#ff751a'/> 
                    <Card topic={'New Recovered'} total={covid_Info.NewRecovered} color='#00b300'/> 
                    <Card topic={'New Deaths:'} total={covid_Info.NewDeaths} color='#ff704d'/>   
                    <Card topic={'Deaths:'} total={covid_Info.Deaths} color='#e62e00'/>   
                    <Card topic={'Hospitalized'} total={covid_Info.Hospitalized} color='#994d00'/>
                    <Card topic={'New Hospitalized'} total={covid_Info.NewHospitalized} color='#b36b00'/>
                </div>
            </div>
           
        </Fragment>
    )
}

export default Home
