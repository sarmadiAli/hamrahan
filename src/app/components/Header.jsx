import React from 'react'
import BtnHeader from './HeaderBtn'

export default function Header() {
    return (
        <div className="header  d-flex flex-column  ">
            <div className="d-flex">
                <div className="headrTitle d-flex flex-column ">
                    <div className="d-flex  align-items-center justify-content-between " style={{ marginTop: '10px', width: '90%' }} >
                        <p>«فرم شماره ۴«</p>
                        <h3 style={{ color: 'red' }}>کارنامه آموزش نظری و عملی متقاضی گواهینامه رانندگی پایه سوم </h3>
                    </div>
                    <div style={{ marginTop: "5px" }}>
                        <BtnHeader text={"   شماره درخواست سامانه:"} />
                        <BtnHeader text={"   آموزشگاه رانندگی پایه سوم:"} style={{ span: { marginTop: "2px" } }} />
                    </div>

                </div>
                <div className="stdImage ">

                </div>
            </div>


            <div className="d-flex justify-content-between" style={{margin:"auto", width: '80%' }}>
                <div className="d-flex" >
                    <BtnHeader text={"  شماره ردیف:"} style={{p:{fontSize:"13px"}}} />
                    <BtnHeader text={"صفحه"} style={{p:{fontSize:"13px"}}} />
                </div>
                <div>
                    <BtnHeader text={" تاریخ صدور کارنامه:"}  style={{p:{fontSize:"13px"}}} />
                </div>
            </div>


        </div>
    )
}