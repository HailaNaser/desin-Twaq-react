import React from 'react'

 function Footer() {
  return (
    <>
     <div className='footer'>
        <div className='theImage'>
        <img src="https://tuwaiq.edu.sa/img/logos/Logos_White-04.png" alt="" />
        </div>
        <div>
            <p>شارك كمدرب</p>
            <p>حول الاكاديمية</p>
        </div>
        <div>
            <p>الشروط والأحكام</p>
            <p>سياسة الخصوصية</p>
        </div>
        <div>
            <div className="imgs">
                <img src="https://tuwaiq.edu.sa/icons/linkedin-icon.svg" alt="" />
                <img src="https://tuwaiq.edu.sa/icons/linkedin-icon.svg" alt="" />
                <img src="https://tuwaiq.edu.sa/icons/youtube-icon.svg" alt="" />
                <img src="https://tuwaiq.edu.sa/icons/twitter-icon.svg" alt="" />
                {/* <img src="https://tuwaiq.edu.sa/icons/discord-icon.svg" alt="" /> */}
            </div>
            <p>@TuwaiqAcademy</p>
        </div>
        <div className='theImage'>
            <img src="https://tuwaiq.edu.sa/img/logos/logos2.svg" alt="" />
        </div>
    </div>
    <div className='end'>جميع الحقوق محفوظة لأكاديمية طويق 2024</div>
    </>
   
  )
}

export default Footer