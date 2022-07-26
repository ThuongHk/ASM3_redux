import React from 'react';
import {useState} from 'react';
import {useDispatch} from'react-redux';
import staffSlice from './staffSlice';
import {v4 as uuidv4} from 'uuid';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookfrom/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  username: yup
    .string()
    .required("Vui lòng nhập username")
    .max(50, "username tối đa 50 ký tự"),
  password: yup
    .string()
    .required("Vui lòng nhập mật khẩu")
    .max(20, "mật khẩu tối đa 20 ký tự")
});

function AddStaff(props) {
  const [name, setName] = useState();
  const [date, setDate] = useState();
  const [salaryScale, setSalaryScale] = useState();
  const [startDate, setStartDate] = useState();
  const [department, setDepartment] = useState();
  const [annualLeave, setAnnualLeave] = useState();
  const [overTime, setOverTime] = useState();
  const [image, setImage] = useState();
  const dispatch = useDispatch();
  const {register, handleSubmit, watch, formState: {errors}} = useForm({ resolver: yupResolver(schema) })

  

  const handleOnchangeName = (e) =>{
    setName(e.target.value)
   
  }

  const handleOnchangeDate = (e) =>{
    setDate(e.target.value)
  }

  const handleOnchangeSalaryScale = (e) =>{
    setSalaryScale(e.target.value)
  }

  const handleOnchangeStartDate = (e) =>{
    setStartDate(e.target.value)
  }

  const handleOnchangeDepartment = (e) =>{
    setDepartment(e.target.value)
  }
  const handleOnchangeAnnualLeave = (e) =>{
    setAnnualLeave(e.target.value)
  }

  const handleOnchangeOverTime = (e) =>{
    setOverTime(e.target.value)
  }

   const handleOnchangeImage = (e) =>{
    setImage(e.target.value)
   }
  const handleSubmitForm = (e)=>{
    e.preventDefault()  
    
    dispatch(staffSlice.actions.addStaff({
      id: uuidv4(),
      name: name,
      date: date,
      salaryScale: salaryScale,
      startDate: startDate,
      department: department,
      annualLeave: annualLeave,
      overTime: overTime,
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
      <form onSubmit={handleSubmitForm(submitForm)}>
        <div className="form-group">
          <label for="">Họ và tên: </label>
          <input type="text"
            className="form-control" id="name" value={name} onChange={handleOnchangeName}/>          
        </div>
        <div className="form-group">
          <label for="">Ngày sinh: </label>
          <input type="date"
            className="form-control"  id="date" value={date} onChange={handleOnchangeDate} />          
        </div>
        <div className="form-group">
          <label for="">Hệ số Lương: </label>
          <input type="number"
            className="form-control"  id="salaryScale" min='0' value={salaryScale} onChange={handleOnchangeSalaryScale}/>          
        </div>
        <div className="form-group">
          <label for="">Ngày vào công ty: </label>
          <input type="date"
            className="form-control"  id="startDate" value={startDate} onChange={handleOnchangeStartDate}  />          
        </div>
       
          <div className="form-group">
            <label for="department"></label>
            <select className="form-control"  id="department" value={department} onChange={handleOnchangeDepartment}>
              <option value='Sale'>Sale</option>
              <option value='HR'>HR</option>
              <option value='Marketing'>Marketing</option>
              <option value='IT'>IT</option>
              <option value='Finance'>Finance</option>              
            </select>
          </div>
          <div className="form-group">
          <label for="">Số ngày nghỉ còn lại: </label>
          <input type="number"
            className="form-control"  id="annualLeave" min='0' value={annualLeave} onChange={handleOnchangeAnnualLeave} />          
        </div>
        <div className="form-group">
          <label for="">Số ngày làm thêm: </label>
          <input type="number"
            className="form-control"  id="overTime" min='0' value={overTime} onChange={handleOnchangeOverTime} />          
        </div>
        <div class="form-group">
          <label for="">Hình đại diện</label>
          <input type="file"  placeholder="/assets/images/alberto.png"
           className="form-control-file" accept=".gif,.jpg,.jpeg,.png,.doc,.docx" name="file" id="file" value={image} onChange={handleOnchangeImage} />          
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