import React, { useState } from "react";
import "../styles/counter.css";
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

export default function Counter() {
    const monthDiff= () => {
        let d2 = new Date();
        let d1 = new Date(2018, 10, 24);
        var months;
        months = (d2.getFullYear() - d1.getFullYear()) * 12;
        months -= d1.getMonth();
        months += d2.getMonth();
        return months;
    }
    const [first, setfirst] = useState(monthDiff)
    
  return (
    <div className="counterflex p-[100px]">
      <div className="months">
        <div className="heading">Number of months</div>
        <div className="Counternumbs">
          <h1 className="display-4 cont" >
          <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
        {({ isVisible }) => (
          <div style={{ height: 100 }}>
            {isVisible ? <CountUp end={first} /> : null}
          </div>
        )}
      </VisibilitySensor>
          </h1>
        </div>
      </div>
      <div className="membsp">
        <div className="heading">Number of memberships</div>
        <div className="Counternumbs">
          <h1 className="display-4 cont">
          <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
        {({ isVisible }) => (
          <div style={{ height: 100 }}>
            {isVisible ? <CountUp end={1900} /> : null}
          </div>
        )}
      </VisibilitySensor>
          </h1>
        </div>
      </div>

      <div className="events">
        <div className="heading">Number of events</div>
        <div className="Counternumbs">
          <h1 className="display-4 cont" >
          <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
        {({ isVisible }) => (
          <div style={{ height: 100 }}>
            {isVisible ? <CountUp end={50} /> : null}
          </div>
        )}
      </VisibilitySensor>
          </h1>
        </div>
      </div>
    </div>
  );
}
