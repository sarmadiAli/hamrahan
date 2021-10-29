import BtnHeader from "./HeaderBtn";
import React , {useState} from 'react'
export default function StdData() {
    const [dotStyle , setDotStyle] =  useState({})
    const clickDot = (arg) =>{
        setDotStyle({[arg] : true})
    }
    return (
        <div className="stuData d-flex flex-wrap">
            <div className="d-flex w-100 mt-2  flex-wrap" >
                <BtnHeader classNameInput=" btn1" text={"اقا/خانوم"} btnBorderStyle="none" style={{ input: { width: '230px' } }} />
                <BtnHeader classNameInput=" btn2" text={"فرزند"} btnBorderStyle="none" style={{ input: { width: '120px' } }} />
                <BtnHeader classNameInput=" btn3" text={"شماره ملی"} btnBorderStyle="none" style={{ input: { width: '200px' } }} />
                <BtnHeader classNameInput=" btn4" text={"محل تولد"} btnBorderStyle="none" style={{ input: { width: '120px' } }} />
                <BtnHeader classNameInput=" btn5" text={"تاریخ تولد‌روز"} btnBorderStyle="none" style={{ input: { width: '60px' } }} />
                <BtnHeader classNameInput=" btn6" text={" ماه"} btnBorderStyle="none" style={{ input: { width: '60px' } }} />
                <BtnHeader classNameInput=" btn7" text={" سال"} btnBorderStyle="none" style={{ input: { width: '60px' } }} />
            </div>
            <div className="d-flex w-100  mt-5 flex-wrap" >
                <BtnHeader classNameInput=" btn8" text={" میزان تحصیلات"} btnBorderStyle="none" style={{ input: { width: '110px' } }} />
                <BtnHeader classNameInput=" btn9" text={"ساکن استان"} btnBorderStyle="none" style={{ input: { width: '70px' } }} />
                <BtnHeader classNameInput=" btn10" text={" شهرستان"} btnBorderStyle="none" style={{ input: { width: '70px' } }} />
                <BtnHeader classNameInput=" btn11" text={" به ادرس"} btnBorderStyle="none" style={{ input: { width: '500px' } }} />
                <BtnHeader classNameInput=" btn12" text={" کد پستی"} btnBorderStyle="none" style={{ input: { width: '120px' } }} />

            </div>
            <div className="mt-5 d-flex justify-content-between  w-100" >
                <span className="d-flex w-75" >
                    <p>اینجانب هنرجوي فوق الذکر با آگاهی کامل، تمایل خود را جهت شرکت در کلاسهاي آموزشی نظری </p>
                    <p style={{margin:'0 2px'}}>حضوری</p><i className={`dot ${dotStyle?.['first'] ? 'dotActive' : ''}`} onClick={() => clickDot('first')}></i> 
                    <p style={{margin:'0 2px'}}>غیر حضوری</p> <i  className={`dot ${dotStyle?.['secound'] ? 'dotActive' : ''}`} onClick={() => clickDot('secound')}></i>
                    <p>اعلام می داریم.</p>
                </span>
                <span className="d-flex flex-column align-items-center justify-content-center w-25">
                  <p>نام و نام خانودگی</p>
                  <p className="mt-5" style={{fontSize:'12px'}}>امضا</p>
                </span>
            </div>

        </div>
    )
}

