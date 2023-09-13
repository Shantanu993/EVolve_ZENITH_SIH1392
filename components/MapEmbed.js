import React from "react";

const MapEmbed = () => {
  return (
    <div className="w-full">
      <iframe
        className="md:w-[600px] md:h-[450px] w-[100%] h-[300px]"
        src="https://www.google.com/maps/d/u/0/embed?mid=15zsdut_0Gjk78w_vnRW2mINIQbCqpfk&ehbc=2E312F&noprof=1"
        title="Embedded Map"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapEmbed;
