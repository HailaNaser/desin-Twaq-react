import React from 'react'

function SignSteps() {
  return (
    <div>
        <h4>خطوات التسجيل</h4>
        <div className="content">
            <div>
                <img src="https://tuwaiq.edu.sa/img/course-step-1.svg" alt="" />
                <p>الانضمام إلى المنصة</p>
            </div>
            <ul className='dots'>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <div>
                <img src="https://tuwaiq.edu.sa/img/course-step-2.svg" alt="" />
                <p>التسجيل في المعسكر أو البرنامج</p>
            </div>
            <ul className='dots'>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <div>
                <img src="https://tuwaiq.edu.sa/img/course-step-3.svg" alt="" />
                <p>انتظار رسالة القــــبــــــــــــول</p>
            </div>
        </div>
    </div>
  )
}

export default SignSteps