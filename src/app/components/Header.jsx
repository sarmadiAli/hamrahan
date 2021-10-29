import React from 'react'
import BtnHeader from './HeaderBtn'

export default function Header() {
    return (
        <div className="header  d-flex flex-column  ">
            <div className="d-flex">
                <div className="headrTitle d-flex flex-column ">
                    <div className="d-flex  align-items-center  " style={{ marginTop: '10px', width: '90%' }} >
                        <p style={{width:'20%'}}>«فرم شماره ۴«</p>
                        <span className="d-flex align-items-center justify-content-center" style={{ color: 'red' }}>کارنامه آموزش نظری و عملی متقاضی گواهینامه رانندگی پایه سوم </span> 
                    </div>
                    <div style={{ marginTop: "5px" }}>
                        <BtnHeader text={"   شماره درخواست سامانه:"} style={{ p:{fontSize:"12px"}}} />
                        <BtnHeader text={"   آموزشگاه رانندگی پایه سوم:"} style={{ p:{fontSize:"12px"}}} />
                    </div>

                </div>
                <div className="stdImage ">

                </div>
            </div>


            <div className="d-flex justify-content-between" style={{margin:"auto", width: '70%' }}>
                <div className="d-flex" >
                    <BtnHeader text={"  شماره ردیف:"} style={{p:{fontSize:"12px"} , input:{ width:'50px'}}} />
                    <BtnHeader text={"صفحه"} style={{p:{fontSize:"12px"} , input:{ width:'50px'}}} />
                </div>
                <div>
                    <BtnHeader text={" تاریخ صدور کارنامه:"}  style={{p:{fontSize:"12px"} ,  input:{ width:'70px'}}} />
                </div>
            </div>


        </div>
    )
}