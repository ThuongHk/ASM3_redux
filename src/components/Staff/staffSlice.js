import {createSlice} from '@reduxjs/toolkit';
import {STAFFS, DEPARTMENTS} from './staffs';


const staffSlice = createSlice({
    // const {DEPARTMENTS, STAFFS} = staffs
    name: 'Staff',
    initialState: {
        searchStaff: '',
        addStaff: STAFFS,
        department: DEPARTMENTS
    },
    reducers: {
        searchStaff: (state, action) => {
            state.searchStaff = action.payload
        },
        addStaff: (state, action) =>{
            state.staffs.STAFFS.push(action.payload)
        }
    }
})

export default staffSlice;