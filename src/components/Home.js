import React from 'react'
import Cover from './Cover'
import Vision from './Vision'
import UpComingEvns from './UpComingEvns'
import HomeMems from './HomeMems'
import ContactUs from './ContactUs'
function Home() {
  return (
    <div >
        <div>
          <Cover/>
        </div>
         <Vision/>
         <UpComingEvns/>
         <HomeMems/>
        <div id="ctus"> 

        <ContactUs/>
        </div>
    </div>
  )
}

export default Home