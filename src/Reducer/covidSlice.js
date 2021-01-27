import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


export const covidSlice = createSlice({
    name:'covid_info',
    initialState: {
        info: {},
        dailyCase: [{}]
    },
    reducers: {
        setInfo: (state, action) => {
            state.info = action.payload
        },
        setDailyCase: (state, action) => {
            state.dailyCase = action.payload
        }
    }
})

// NOTE export action type
export const {setInfo, setDailyCase} = covidSlice.actions

// NOTE export State
// export const getInfo = (state) => covid_info.info

// NOTE Action 
export const grabCovidInfo = () => async dispatch => {
    try{
        const res = await axios.get('https://covid19.th-stat.com/api/open/today')
        dispatch(setInfo(res.data))

    }catch(err){
        console.error(err)
    }
}


export const grabAllNewCase = () => async dispatch => {
    try {
        const res = await axios.get('https://covid19.th-stat.com/api/open/timeline')
        dispatch(setDailyCase(res.data.Data))
        
    } catch (err) {
        console.error(err)
    }
}

export default covidSlice.reducer