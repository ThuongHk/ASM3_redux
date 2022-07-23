import React, {useState } from "react";
import { useParams, Link } from "react-router-dom";
import {Card, CardBody, CardTitle, Navbar, NavbarBrand, CardImg, CardText } from 'reactstrap';
import dateFormat from "dateformat";
import { STAFFS } from "./staffs";


function DetailStaff(props) {
  const params = useParams();
  // console.log(params.name);
 
  const staffInfo = STAFFS.find(staff => staff.id.toString() === params.id)

  // console.log("staff", staffInfo); 

  return (
  <div className="container mt-5">
    <Link to='/staff' >NHÂN VIÊN</Link> / <span>{staffInfo.name}</span><br/><br/>
    { 
  <div className="col-sm-6 col-md-6 mb-4">   
  <Card>
  <div class='row'>
      <div className="col-6">
    <CardImg width="auto" height="100%" src={staffInfo.image} alt={staffInfo.name} />
    </div>
    <div className="col-6">
    <CardBody>
      <CardTitle><b>Họ và tên:</b> {staffInfo.name}</CardTitle>
      <CardText>
       <b>Ngày sinh:</b>  {dateFormat(staffInfo.doB, "dd/mm/yyyy")}
      </CardText>
      <CardText>
       <b>Ngày vào công ty:</b>  {dateFormat(staffInfo.startDate, "dd/mm/yyyy")}
      </CardText>
      <CardText><b>Phòng ban:</b> {staffInfo.name}</CardText>
      <CardText><b>Số ngày nghỉ còn lại:</b> {staffInfo.annualLeave}</CardText>
      <CardText><b>Số ngày đã làm thêm:</b> {staffInfo.overTime}</CardText>
    </CardBody>
    </div>
    </div>
  </Card>
  </div>
}
</div>)
}

export default DetailStaff;
