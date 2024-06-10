import React from "react";
// import React from 'react'

let btnstyle = {
  PointerEvent : 'none'
}
 function Title() {
  return (
    <div>
        <div className="title">
            <h3>المعسكرات والبرامج</h3>
            <div className="btns">
                <input style={btnstyle } className='right' type="submit" value='الكبار'/>
                <input style={btnstyle } className='left' type="submit" value='الناشئون'/>
            </div>
            <img src="https://tuwaiq.edu.sa/img/filter.svg" alt="" />
        </div>
    </div>
  )
}
export default Title