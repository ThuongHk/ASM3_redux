import { createSelector} from '@reduxjs/toolkit';
export const listStaffSelector = state => state.staffList.addStaff;
export const listStaffSearch = state => state.staffList.searchStaff;
export const listDepartmentSelector  = state => state.staffList.department;



export const showDataListStaff = createSelector(listStaffSelector, listStaffSearch, (listStaffs1, searchStaff1)=>{
    return listStaffs1.filter(staff => {
        return staff.name.toUpperCase().includes(searchStaff1.toUpperCase())
    })
})