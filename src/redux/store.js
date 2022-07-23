import {configureStore} from '@reduxjs/toolkit';
import staffSlice from '../components/Staff/staffSlice';


const store = configureStore({
    reducer: {
        staffList: staffSlice.reducer
    }
})
export default store;