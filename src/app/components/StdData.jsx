import BtnHeader from "./HeaderBtn";
import React, { useState } from 'react'
import { Table } from "react-bootstrap";

const Tables = () => {
    return (
        <div className="w-100 mt-5">
            <div className="w-100 d-flex position-relative overflow-hidden flex-column  ">
                <p className="w-100 text-center d-flex justify-content-center align-items-center" style={{height:'30px' ,background:'#ccc'}} >راهنمایی و آئین نامه آموزش و رانندگی</p>
                <span style={{ marginRight: 'auto', width: "100%" }}>
                    <Table  >
                        <thead>
                            <tr style={{ border: '1px solid ' ,background:'#ccc' }}>
                                <th>جلسه اول </th>
                                <th >تاریخ آموزش</th>
                                <th>ساعت آموزش </th>
                                <th>مهر اسمی و امضاء
                                    مدرس</th>
                                <th>جلسه</th>
                                <th>تاریخ آموزش</th>
                                <th>ساعت آموزش  </th>
                                <th>مهر اسمی و امضاء مدرس </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{ border: '1px solid ' }} >
                                <td>اول</td>
                                <td>.../.../...</td>
                                <td>.... الی...</td>
                                <td></td>
                                <td>چهارم </td>
                                <td>.../.../...</td>
                                <td>...الی...</td>
                                <td></td>

                            </tr>
                            <tr>
                                <td>دوم</td>
                                <td>.../.../...</td>
                                <td>... الی...</td>
                                <td></td>
                                <td>پنجم </td>
                                <td>.../.../...</td>
                                <td>... الی...</td>
                                <td></td>

                            </tr>
                            <tr>
                                <td>سوم</td>
                                <td>.../.../...</td>
                                <td>... الی...</td>
                                
                                <td></td>
                                <td>ششم </td>
                                <td>.../.../...</td>
                                <td>... الی...</td>
                                
                                <td></td>
                            </tr>
                            <tr>
                                <td>اول</td>
                                <td>.../.../...</td>
                                <td>... الی...</td>
                                
                                <td></td>
                                <td>دوم </td>
                                <td>.../.../...</td>
                                <td>... الی...</td>
                                
                                <td></td>
                            </tr>
                       
                        </tbody>
                    </Table>
                </span>

            </div>
            <div className="w-100 d-flex position-relative overflow-hidden flex-column  ">
                <p className="w-100 text-center d-flex justify-content-center align-items-center" style={{height:'30px' ,background:'#ccc'}}>مهارت عملی رانندگی وسیله نقلیه آموزش </p>
                <span style={{ marginRight: 'auto', width: "100%" }}>
                    <Table  >
                        <thead>
                            <tr style={{ border: '1px solid ' ,background:'#ccc' }}>
                                <th>جلسه اول </th>
                                <th >تاریخ آموزش</th>
                                <th>ساعت آموزش </th>
                                <th>مهر اسمی و امضاء
                                    مدرس</th>
                                <th>جلسه</th>
                                <th>تاریخ آموزش</th>
                                <th>ساعت آموزش  </th>
                                <th>مهر اسمی و امضاء مدرس </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{ border: '1px solid ' }} >
                                <td>اول</td>
                                <td>.../.../...</td>
                                <td>... الی...</td>
                                
                                <td></td>
                                <td>چهارم </td>
                                <td>.../.../...</td>
                                <td>... الی...</td>
                                
                                <td></td>

                            </tr>
                            <tr>
                                <td>دوم</td>
                                <td>.../.../...</td>
                                <td>... الی...</td>
                                
                                <td></td>
                                <td>پنجم </td>
                                <td>.../.../...</td>
                                <td>... الی...</td>
                                
                                <td></td>

                            </tr>
                            <tr>
                                <td>سوم</td>
                                <td>.../.../...</td>
                                <td>... الی...</td>
                                
                                <td></td>
                                <td>ششم </td>
                                <td>.../.../...</td>
                                <td>... الی...</td>
                                
                                <td></td>
                            </tr>
                            <tr>
                                <td>اول</td>
                                <td>.../.../...</td>
                                <td>... الی...</td>
                                
                                <td></td>
                                <td>دوم </td>
                                <td>.../.../...</td>
                                <td>... الی...</td>
                                
                                <td></td>
                            </tr>
                       
                        </tbody>
                    </Table>
                </span>

            </div>
         
        </div>
    )
}

export default function StdData() {
    const [dotStyle, setDotStyle] = useState({})
    const clickDot = (arg) => {
        setDotStyle({ [arg]: true })
    }
    return (
        <div className="stuData d-flex flex-wrap">
            <div className="d-flex w-100   flex-wrap" >
                <BtnHeader classNameInput=" btn1" text={"اقا/خانوم"} btnBorderStyle="none" style={{ p:{fontSize:'12px'},input: { width: '230px' } }} />
                <BtnHeader classNameInput=" btn2" text={"فرزند"} btnBorderStyle="none" style={{ p:{fontSize:'12px'},input: { width: '120px' } }} />
                <BtnHeader classNameInput=" btn3" text={"شماره ملی"} btnBorderStyle="none" style={{ p:{fontSize:'12px'},input: { width: '200px' } }} />
                <BtnHeader classNameInput=" btn4" text={"محل تولد"} btnBorderStyle="none" style={{ p:{fontSize:'12px'},input: { width: '120px' } }} />
                <BtnHeader classNameInput=" btn5" text={"تاریخ تولد‌روز"} btnBorderStyle="none" style={{ p:{fontSize:'12px'},input: { width: '60px' } }} />
                <BtnHeader classNameInput=" btn6" text={" ماه"} btnBorderStyle="none" style={{ p:{fontSize:'12px'},input: { width: '60px' } }} />
                <BtnHeader classNameInput=" btn7" text={" سال"} btnBorderStyle="none" style={{ p:{fontSize:'12px'},input: { width: '60px' } }} />
            </div>
            <div className="d-flex w-100 flex-wrap" >
                <BtnHeader classNameInput=" btn8" text={" میزان تحصیلات"} btnBorderStyle="none" style={{ p:{fontSize:'12px'},input: { width: '110px' } }} />
                <BtnHeader classNameInput=" btn9" text={"ساکن استان"} btnBorderStyle="none" style={{ p:{fontSize:'12px'},input: { width: '70px' } }} />
                <BtnHeader classNameInput=" btn10" text={" شهرستان"} btnBorderStyle="none" style={{ p:{fontSize:'12px'},input: { width: '70px' } }} />
                <BtnHeader classNameInput=" btn11" text={" به ادرس"} btnBorderStyle="none" style={{ p:{fontSize:'12px'},input: { width: '500px' } }} />
                <BtnHeader classNameInput=" btn12" text={" کد پستی"} btnBorderStyle="none" style={{ p:{fontSize:'12px'},input: { width: '120px' } }} />

            </div>
            <div className="mt-2 d-flex justify-content-between  w-100" >
                <span className="d-flex" style={{width:"90%"}} >
                    <p style={{fontSize:"12px"}}>اینجانب هنرجوي فوق الذکر با آگاهی کامل، تمایل خود را جهت شرکت در کلاسهاي آموزشی نظری </p>
                    <p style={{ margin: '0 2px' }}>حضوری</p><i className={`dot ${dotStyle?.['first'] ? 'dotActive' : ''}`} onClick={() => clickDot('first')}></i>
                    <p style={{ margin: '0 2px' }}>غیر حضوری</p> <i className={`dot ${dotStyle?.['secound'] ? 'dotActive' : ''}`} onClick={() => clickDot('secound')}></i>
                    <p>اعلام می داریم.</p>
                </span>
                <span className="d-flex flex-column align-items-center justify-content-center "  style={{width:"10%"}}>
                    <p style={{fontSize:'11px'}}>نام و نام خانودگی</p>
                    <p className="mt-2" style={{ fontSize: '10px' }}>امضا</p>
                </span>
            </div>

            <Tables />
        </div>
    )
}

