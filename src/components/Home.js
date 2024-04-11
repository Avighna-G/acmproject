import React from 'react'
import Cover from './Cover'
import Vision from './Vision'
import UpComingEvns from './UpComingEvns'
import HomeMems from './HomeMems'
import ContactUs from './ContactUs'
import Counter from './Counter'
import CardContainer from './CardContainer'
import FacultyTest from './FacultyTest'
function Home() {
  return (
    <div >
        <div>
          <Cover/>
        </div>
         <Vision/>
         <UpComingEvns/>
         
         <HomeMems/>
         <h2 class="text-white font-bold md:text-xl lg:text-2xl mt-[30px]" >Let them speak for us!</h2>
        <FacultyTest />
         
         <Counter/>
         <h2 class="text-white font-bold md:text-xl lg:text-2xl">Projects at ACM VNRVJIET</h2>

         <CardContainer/>
        <div id="ctus"> 

        <ContactUs/>
        </div>

    </div>
  )
}

export default Home