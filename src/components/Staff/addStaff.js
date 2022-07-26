import React from 'react';
import {useDispatch} from'react-redux';
import staffSlice from './staffSlice';
import {v4 as uuidv4} from 'uuid';
import {useForm} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'; // Không tìm thấy 
import * as yup from 'yup';
import './Staff.css';

const schema = yup.object().shape({
  name: yup
    .string()
    .required("Vui lòng nhập username")
    .max(50, "Username tối đa 50 ký tự")
    .min(5, "Username tối thiếu 5 ký tự"),
    date: yup
    .string()
    .required('Vui lòng nhập ngày sinh')
   
});

function AddStaff(props) {
 
  const dispatch = useDispatch();
  const {register, handleSubmit, formState: {errors}} = useForm({resolver: yupResolver(schema)}) 


  const onLoginSubmit = (data)=>{   
    dispatch(staffSlice.actions.addStaff({
      id: uuidv4(),
      name: data.name,
      birthday: data.birthday,
      salaryScale: data.salaryScale,
      startDate: data.startDate,
      department: data.department,
      annualLeave: data.annualLeave,
      overTime: data.overTime,
      image: '/assets/images/daidien.png'
    }))
  }
  
    return (
      <div className='container'>
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
 +
</button>

<div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="staticBackdropLabel">Thông Tin Nhân Viên</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <form onSubmit={handleSubmit(onLoginSubmit)}>
        <div className="form-group">
          <label for="">Họ và tên: </label>
          <input type="text" {...register('name')}
            className="form-control"  id="name" /> 
             {errors.name && 
                      <p className="error">{errors.name?.message}</p>}                 
        </div>
        <div className="form-group">
          <label for="">Ngày sinh: </label>
          <input type="date"  {...register('birthday')}
            className="form-control"  id="birthday" /> 
            {errors.date && 
                      <p className="error">{errors.date?.message}</p>}          
        </div>
        <div className="form-group">
          <label for="">Hệ số Lương: </label>
          <input type="number"   {...register('salaryScale')}
            className="form-control"  id="salaryScale" min='0'/>          
        </div>
        <div className="form-group">
          <label for="">Ngày vào công ty: </label>
          <input type="date" {...register('startDate')}
            className="form-control"  id="startDate"  />          
        </div>
       
          <div className="form-group">
            <label for="department"></label>
            <select className="form-control" {...register('department')} id="department" >
              <option value='Sale'>Sale</option>
              <option value='HR'>HR</option>
              <option value='Marketing'>Marketing</option>
              <option value='IT'>IT</option>
              <option value='Finance'>Finance</option>              
            </select>
          </div>
          <div className="form-group">
          <label for="">Số ngày nghỉ còn lại: </label>
          <input type="number" {...register('annualLeave')}
            className="form-control"  id="annualLeave" min='0'  />          
        </div>
        <div className="form-group">
          <label for="">Số ngày làm thêm: </label>
          <input type="number" {...register('overTime')}
            className="form-control"  id="overTime" min='0' />          
        </div>
        <div class="form-group">
          <label for="">Hình đại diện</label>
          <input type="file"  placeholder="/assets/images/alberto.png"
           className="form-control-file" accept=".gif,.jpg,.jpeg,.png,.doc,.docx" name="file" id="file" />          
        </div>

        
        <button type="submit" className="btn btn-info text-center mt-2">Submit</button>
      </form>
      </div>
     
    </div>
  </div>
</div>
</div>
    );  
}

export default AddStaff;