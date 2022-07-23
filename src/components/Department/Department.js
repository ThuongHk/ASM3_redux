import React from 'react';
// import {DEPARTMENTS} from '../Staff/staffs';
import {useSelector} from 'react-redux';
import {listDepartment} from '../../redux/selector';

function Department() {

   const departments = useSelector(listDepartment)

    const departmentList  = departments.map(function(department){
        return (
                <div className='col-md-4 col-sm-4 col-xs-12 mb-2 mt-3'>
                   <div className="card" style={{width: '18rem'}}> 
                     <div className="card-body">
                        <h5 className="card-title">{department.name}</h5>
                        <h6 className="card-subtitle mb-2 text-muted ">Số lượng nhân viên : {department.numberOfStaff}</h6>
                     </div>
                   </div>
                </div>
        )
    })
    return (
       <div className="container">
         <div className='row'>
            {departmentList}           
        </div>
       </div>
    );
}

export default Department;