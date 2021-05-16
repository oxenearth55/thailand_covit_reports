import React, { useEffect } from 'react'
import CanvasJSReact from '../Canva/canvasjs.react';
import { useSelector, useDispatch } from 'react-redux'
import { grabAllNewCase } from '../Reducer/covidSlice'
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


const Compare = () => {

    const dailyCase = useSelector(state => state.covid_info.dailyCase)
    const dispatch = useDispatch()

  

    useEffect(() =>{
        dispatch(grabAllNewCase())
    },[])
    
   //NOTE Set object as an array
    var array = []
    dailyCase.map( (daily,index) => {
       if(index < 7) {
           array.push({label: daily.Date, y: daily.NewConfirmed})
       }
   })
    

    const options = {
        title: {
          text: "Weekly New Case"
        },
        data: [{				
                type: "column",
                dataPoints: array
               
         }]
     }

    return (
        <div className="contianer my- graph">
             <CanvasJSChart options = {options}/>
            
        </div>
    )
}

export default Compare
