import React from 'react';
import FacCard from './FacCard'; // Assuming Card component is in the same directory

function FacultyT() {
  // Dummy data for the cards
  const data = [
    {
      name: 'Dr. C. D Naidu',
      title: 'Principal',
      social: {
        github: 'https://github.com/example',
      },
      testContent:'It is really important to know about modern technologies and activities moduling each and everyday. It was really good to see that the students and staff of ACM student chapter taking the responsibility by creating a place where we can learn , teach each other and share the knowledge both at the Academic level and in competitive fields.',
      imgPath:'princi.jpg'
    },
    {
        name: 'Dr. D. Srinivasa Rao',
        title: 'HOD, IT',
        social: {
          github: 'https://github.com/example',
        },
        testContent:'Team ACM is targeted to bring out the hidden talents and introducing how the real world of a Engineer works.It always works on improving the soft skills and making students experienced in the engineering sector.Events which was conducted by ACM are making students to develop their teamwork and individual skills It was pleasure to watch Team ACM how they Moulding the careers of upcoming students.',
        imgPath:'ithod.jpeg'
      },
      {
        name: 'Mr. S. Murali Mohan',
        title: 'Faculty Coordinator, ACM VNRVJIET',
        social: {
          github: 'https://github.com/example',
        },
        testContent:'Team ACM is targeted to bring out the hidden talents and introducing how the real world of a Engineer works.It always works on improving the soft skills and making students experienced in the engineering sector.Events which was conducted by ACM are making students to develop their teamwork and individual skills It was pleasure to watch Team ACM how they Moulding the careers of upcoming students.',
        imgPath:'facultycor1.jpg'
      },
      
      
  ];

  return (
    <div className="flex justify-center items-center">
      {data.map((person, index) => (
        <div key={index} className="w-full flex items-stretch">
          <FacCard {...person} />
        </div>
      ))}
    </div>
  );
}

export default  FacultyT;
