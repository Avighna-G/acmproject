import React from 'react'
import { TeamsMatter } from '../jsonfiles/TeamDescription'
import '../styles/teamsdesc.css'
import { useState } from 'react';
function TeamsDisplay() {
    const [activeTab, setActiveTab] = useState('Technical');

  const handleTabClick = (country) => {
    setActiveTab(country);
  };

  return (
    <section id="wrapper">
      <div className="content">
        {/* Tab links */}
        <div className="tabs">
          {Object.keys(TeamsMatter).map((item,ind) => (
            <button
              key={item}
              className={`tablinks ${activeTab === item ? 'active' : ''}`}
              data-country={item}
              onClick={() => handleTabClick(item)}
            >
              <p data-title={TeamsMatter[item].Team}>{TeamsMatter[item].Team}</p>
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div className="wrapper_tabcontent">
          {Object.keys(TeamsMatter).map((item,ind) => (
            <div
              key={item}
              id={item}
              className={`tabcontent ${activeTab === item ? 'active' : ''}`} 
              
            >
              <div>
              <div className='display'>
                <div style={{width:'90%', display:'flex', justifyContent:'flex-end', padding:'20px'}}>
                  <p>{TeamsMatter[item].Description}</p>
                </div>
                <div style={{display:'flex', justifyContent:'flex-end'}} >
                  <img style={{height:'120px',width:'120px'}} src={require('../imagProps/teamIcons/creative.png')}/>
                </div>
              </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamsDisplay