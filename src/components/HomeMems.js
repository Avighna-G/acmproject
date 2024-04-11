import React from 'react'
import '../styles/homemems.css'
import {Link} from 'react-router-dom'
import {BsBoxArrowUpRight} from 'react-icons/bs'
function HomeMems() {
  return (
    <div className='mx-auto flex justify-center items-center'>
      <div className="w-[90%] bg-white bg-opacity-85 p-2 mt-[50px] hello1">
        <div>
          <div className="two">
            <h1>Memberships
              <span>Know the tiers</span>
            </h1>
          </div>
          <div>
            <p className='text-left mt-[40px]'>
              ACM is not about an individual, it is a family of 820+ members. Our members are as important to us as the people who lead us. Anyone who is driven by the zeal to learn something, to make their place in this tech world can come and join us. All the ACM members are entitled to all the events ACM conducts like coding contests, trainings on trending technologies, hackathons, quiz contests and many more. All the members also get the latest tech news to their mails so that they are up to date on the recent technological advancements.
              <br />
              <a href="/memberships" target="_blank" rel="noopener noreferrer" className='flex items-center underline hover:no-underline text-blue-600 hover:text-blue-800 visited:text-purple-600'>
                Join as a member <BsBoxArrowUpRight className='icon-style' />
              </a>
            </p>
          </div>
        </div>
        <div>
          <div className="one">
            <h1>Volunteers
              <span>We Rise by Lifting Others</span>
            </h1>
          </div>
          <div>
            <p className='text-left mt-[40px]'>
              Volunteers are the supporting pillars of any student chapter. It is the same with ACM. In our student chapter, we have volunteers working under 5 teams: Technical team, Events and PR team, Social Media team, Design team, and Coding team. Be it any event, our volunteers are our strength that make the event successful. Together, we celebrate our success; these teams work as pillars for ACM. By helping each other and appreciating others work, Team ACM moves forward.
              <br />
              <a href="/team" target="_blank" rel="noopener noreferrer" className='flex items-center underline hover:no-underline text-blue-600 hover:text-blue-800 visited:text-purple-600'>
                See our Team <BsBoxArrowUpRight className='icon-style' />
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeMems;
