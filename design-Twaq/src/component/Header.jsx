import React from "react";

function Header(){
    let testStyle = {
        color: "red"
    }
    return (

        <>
      
        <div className="header" >
            <div className="logo">
                <img src="https://tuwaiq.edu.sa/img/logos/Logos_White-04.png" alt="" />
                </div>
                <ul className="list">
                    <li>الرئيسية</li>
                    <li>المعسكرات والبرامج</li>
                    <li>حول الاكاديمية</li>
                    <li>الاكاديميات التابعة </li>
                    <li>مركز الاختبارات</li>
                </ul>
                <div className="sign">
                    <p>تسجيل الدخول</p>
                    <p>English</p>
                </div>
                {/* <img src="./menu-bg.png" alt="" /> */}
                <ul className='menu'>
                    <li></li>
                    <li></li>
                    <li></li>
                  
                </ul>
            </div>  
            <p className="twaq">أكاديمية طويق</p>
        </>

    )

}
export default Header