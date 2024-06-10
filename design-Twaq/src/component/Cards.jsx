import React from 'react'
import Title from './Title'

 function Cards() {
  return (

   
    <div>
    <Title></Title>
    <section className='container'>
        <div className='card'>
            <div className='type'>لقاء</div>
            <h4 className="discription">فعالية WWDC24 Watch Party</h4>
            <div className="location">
                <div>
                <img src="https://tuwaiq.edu.sa/icons/location_icon.svg" alt="" />
                    <span>الرياض</span>
                </div>
                    <div>
                    <img src="https://tuwaiq.edu.sa/icons/caleander_icon.svg" alt="" />
                    <span>يوم واحد</span>
                    </div>
                 
            </div>
            <div className="time">
                <div className='left'>
                <img src="https://tuwaiq.edu.sa/icons/caleander2_icon.svg" alt="" />
                <span>يبدأ في 10/06/2024</span>
                </div>
                <div>
                    <input type="submit" value='التفاصيل' className='details' />
                </div>

            </div>
        </div>
        {/* frist card */}
        <div className='card'>
            <div className='type'>معسكر</div>
            <h4 className="discription">هندسة الحوسبة السحابية المتقدمة AWS</h4>
            <div className="location">
                <div>
                <img src="https://tuwaiq.edu.sa/icons/location_icon.svg" alt="" />
                    <span>الرياض</span>
                </div>
                    <div>
                    <img src="https://tuwaiq.edu.sa/icons/caleander_icon.svg" alt="" />
                    <span>4أسابيع </span>
                    </div>
                 
            </div>
            <div className="time">
                <div className='left'>
                <img src="https://tuwaiq.edu.sa/icons/caleander2_icon.svg" alt="" />
                <span>يبدأ في 10/06/2024</span>
                </div>
                <div>
                    <input type="submit" value='التفاصيل' className='details' />
                </div>

            </div>
        </div>
        {/* second card */}
        <div className='card'>
            <div className='type'>برنامج</div>
            <h4 className="discription">إدارة خدمات تقنية المعلومات (ITIL)</h4>
            <div className="location">
                <div>
                <img src="https://tuwaiq.edu.sa/icons/location_icon.svg" alt="" />
                    <span>الرياض</span>
                </div>
                    <div>
                    <img src="https://tuwaiq.edu.sa/icons/caleander_icon.svg" alt="" />
                    <span>يوم واحد</span>
                    </div>
                 
            </div>
            <div className="time">
                <div className='left'>
                <img src="https://tuwaiq.edu.sa/icons/caleander2_icon.svg" alt="" />
                <span>يبدأ في 10/06/2024</span>
                </div>
                <div>
                    <input type="submit" value='التفاصيل' className='details' />
                </div>

            </div>
        </div>
        {/* third card */}
        <div className='card'>
            <div className='type'>معسكر</div>
            <h4 className="discription">اساسيات علوم الشبكاتNETWORK+</h4>
            <div className="location">
                <div>
                <img src="https://tuwaiq.edu.sa/icons/location_icon.svg" alt="" />
                    <span>الرياض</span>
                </div>
                    <div>
                    <img src="https://tuwaiq.edu.sa/icons/caleander_icon.svg" alt="" />
                    <span>يوم واحد</span>
                    </div>
                 
            </div>
            <div className="time">
                <div className='left'>
                <img src="https://tuwaiq.edu.sa/icons/caleander2_icon.svg" alt="" />
                <span>يبدأ في 10/06/2024</span>
                </div>
                <div>
                    <input type="submit" value='مغلق' className='details' />
                </div>

            </div>
        </div>
        {/* fourth card */}
        <div className='card'>
            <div className='type'>برنامج</div>
            <h4 className="discription">البنية المؤسسية بمنهجية وإطارTOGAF</h4>
            <div className="location">
                <div>
                <img src="https://tuwaiq.edu.sa/icons/location_icon.svg" alt="" />
                    <span>الرياض</span>
                </div>
                    <div>
                    <img src="https://tuwaiq.edu.sa/icons/caleander_icon.svg" alt="" />
                    <span>يوم واحد</span>
                    </div>
                 
            </div>
            <div className="time">
                <div className='left'>
                <img src="https://tuwaiq.edu.sa/icons/caleander2_icon.svg" alt="" />
                <span>يبدأ في 10/06/2024</span>
                </div>
                <div>
                    <input type="submit" value='مغلق' className='details' />
                </div>

            </div>
        </div>
        {/* five card */}
        <div className='card'>
            <div className='type'>برنامج</div>
            <h4 className="discription">أمن و حماية المعلومات في osi model</h4>
            <div className="location">
                <div>
                <img src="https://tuwaiq.edu.sa/icons/location_icon.svg" alt="" />
                    <span>الرياض</span>
                </div>
                    <div>
                    <img src="https://tuwaiq.edu.sa/icons/caleander_icon.svg" alt="" />
                    <span>يوم واحد</span>
                    </div>
                 
            </div>
            <div className="time">
                <div className='left'>
                <img src="https://tuwaiq.edu.sa/icons/caleander2_icon.svg" alt="" />
                <span>يبدأ في 10/06/2024</span>
                </div>
                <div>
                    <input type="submit" value='مغلق' className='details' />
                </div>

            </div>
        </div>
        {/* end */}
    
     
    </section>
    </div>
  )
}

export default Cards