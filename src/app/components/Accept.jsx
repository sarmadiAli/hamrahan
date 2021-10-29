import BtnHeader from "./HeaderBtn";

export default function Accept() {
    return (
        <>
            <div className="access">
                <span className='w-100 mb-1 d-flex justify-content-center align-items-center text-center' style={{ color: 'red' }}>گواهی طی دوره آموزش هنرآموز متقاضی گواهینامه رانندگی پایه سوم </span>
                <p>به استناد آئین نامه اجرایی آموزشگاههاي رانندگی مصوبه شماره 29797/ت52792 هـ مورخ 09/03/1397 هیأت محترم وزیران گواهی میشود: </p>
                <div className="d-flex ">
                    <BtnHeader classNameInput=" btn1" text={"اقا/خانوم"} btnBorderStyle="none" style={{ p: { fontSize: '12px' }, input: { width: '230px' } }} />
                    <BtnHeader classNameInput=" btn2" text={"فرزند"} btnBorderStyle="none" style={{ p: { fontSize: '12px' }, input: { width: '120px' } }} />
                    <BtnHeader classNameInput=" btn3" text={"شماره ملی"} btnBorderStyle="none" style={{ p: { fontSize: '12px' }, input: { width: '200px' } }} />
                </div>
                <div className="d-flex  align-items-center ">
                    <BtnHeader classNameInput=" btn1" text={"تاریخ"} btnBorderStyle="none" style={{ p: { fontSize: '12px' }, input: { width: '230px' } }} />
                    <BtnHeader classNameInput=" btn2" text={"دوره آموزش نظري را به مدت"} btnBorderStyle="none" style={{ p: { fontSize: '12px' }, input: { width: '120px' } }} />
                    <BtnHeader classNameInput=" btn3" text={"ساعت و دوره آموزش مهارت عملی رانندگی را به مدت"} btnBorderStyle="none" style={{ p: { fontSize: '12px' }, input: { width: '200px' } }} />
                    <p> ساعت طی نموده است</p>
                </div>
                <div className="d-flex ">
                    <BtnHeader classNameInput=" btn1" text={"شماره ثبت:"} btnBorderStyle="none" style={{ p: { fontSize: '12px' }, input: { width: '230px' } }} />
                    <BtnHeader classNameInput=" btn5" text={" تاریخ صدور: روز"} btnBorderStyle="none" style={{ p: { fontSize: '12px' }, input: { width: '60px' } }} />
                    <BtnHeader classNameInput=" btn6" text={" ماه"} btnBorderStyle="none" style={{ p: { fontSize: '12px' }, input: { width: '60px' } }} />
                    <BtnHeader classNameInput=" btn7" text={" سال"} btnBorderStyle="none" style={{ p: { fontSize: '12px' }, input: { width: '60px' } }} />

                </div>
                <div className="mt-2">
                    <p>تبصره1 :اعتبار گواهی آموزش از تاریخ صدور کارنامه یک سال میباشد. </p>
                    <p>تبصره 2 :ثبت اطلاعات هنرجو در سامانه، تنظیم کارنامه، قرارداد، ثبت مشخصات هنرجو در دفتر آموزش و معرفی به پزشک معاین بایستی در یک تاریخ انجام پذیرد. </p>
                </div>
                <div className="d-flex flex-column align-items-end justify-content-center w-100">
                </div>

            </div>

        </>
    )
}