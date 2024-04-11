import React from 'react';

const CardContent = ({ imgSrc, headerText, description, url }) => (
  <div className="w-full md:w-1/3 px-2 mb-4">
    <div className="bg-white rounded-lg shadow-md p-4 transition-colors duration-300 hover:bg-blue-100">
      <img
        className="w-full rounded-lg mb-4"
        src={require(`../imagProps/projects/${imgSrc}`)}
        alt="Card"
      />
      <div>
        <h3 className="text-lg font-semibold mb-2">{headerText}</h3>
        <p className="text-sm text-gray-700 mb-4">{description}</p>
        <a
          href={url}
          className="block w-full text-center border border-blue-700 py-2 rounded-md text-blue-700 hover:bg-blue-700 hover:text-white transition-colors duration-300"
        >
          View Source Code
        </a>
      </div>
    </div>
  </div>
);

const CardContainer = () => {
  const cardData = [
    {
      imgSrc: "mailing.png",
      headerText: "Automated Mailing Script",
      description:
        "An automated Python-based mail generator crafts and dispatches personalized, formatted emails seamlessly. This project streamlines email creation, customization, and delivery, enhancing communication efficiency and tailored correspondence for diverse applications.",
      url: "https://github.com/acmvnrvjiet/Automated-Mailing-Script",
    },
    {
      imgSrc: "attendanceapp.jpg",
      headerText: "Event Attendance App",
      description:
      "A Flutter app employing QR code scanning for attendance tracking. It seamlessly registers entries from ID cards, storing data in Excel, streamlining attendance management, providing efficient, digital tracking and share details with faculty attending the event and maintain statistics.",
      url: "https://github.com/acmvnrvjiet/Automated-Mailing-Script",
    },
    {
      imgSrc: "sample.jpg",
      headerText: "Automatic ID Card generation",
      description:
      "Python-based project automating ID card generation. It dynamically populates details onto templates, enabling seamless printing. This streamlines the creation process, enhancing efficiency in generating customized and professional-looking identification cards.",
      url: "https://github.com/acmvnrvjiet/Automated-Mailing-Script",
    },
    {
      imgSrc: "billsample.png",
      headerText: "Automatic Bill Generator",
      description:
      "A Python project automating bill generation by extracting payer data from an Excel sheet. It dynamically populates templates, streamlining the process to produce bills, enhancing efficiency in professional and tailored invoicing.",
      url: "https://github.com/acmvnrvjiet/Automated-Mailing-Script",
    },
    {
      imgSrc: "certificates.png",
      headerText: "Certificates Generator",
      description:
      "A Python project automating certificate creation. It dynamically embeds winner and participant details onto templates, simplifying certificate generation for events or competitions, fostering efficient and personalized document production.",
      url: "https://github.com/acmvnrvjiet/Automated-Mailing-Script",
    },
  ];

  return (
    <div className="container mx-auto px-4 w-[90%]">
      <div className="flex flex-wrap -mx-2 justify-center">
        {cardData.map((card, index) => (
          <CardContent
            key={index}
            imgSrc={card.imgSrc}
            headerText={card.headerText}
            description={card.description}
            url={card.url}
          />
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
