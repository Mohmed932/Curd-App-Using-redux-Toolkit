import {configureStore} from '@reduxjs/toolkit'
import Alldata from './reducers'

const store  = configureStore({reducer:{Alldata}})
export default store