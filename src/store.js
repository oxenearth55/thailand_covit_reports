import { configureStore } from '@reduxjs/toolkit'
import covidSlice from './Reducer/covidSlice'


export default configureStore({
    reducer:{
        covid_info: covidSlice
    },
})