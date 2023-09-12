import React from "react";

const MapEmbed = () => {
  const chennaiFacilities =
    "https://www.google.com/maps/d/u/0/embed?mid=15zsdut_0Gjk78w_vnRW2mINIQbCqpfk&ehbc=2E312F&noprof=1";
  const delhiFacilities =
    "https://www.google.com/maps/d/u/0/embed?mid=15zsdut_0Gjk78w_vnRW2mINIQbCqpfk&ehbc=2E312F&noprof=1";
  const chdFacilities =
    "https://www.google.com/maps/d/u/0/embed?mid=15zsdut_0Gjk78w_vnRW2mINIQbCqpfk&ehbc=2E312F&noprof=1";
  const jaipurFacilities =
    "https://www.google.com/maps/d/u/0/embed?mid=15zsdut_0Gjk78w_vnRW2mINIQbCqpfk&ehbc=2E312F&noprof=1";

  return (
    <div className="w-full h-screen">
      <iframe
        className="md:w-[600px] md:h-[450px] w-[100%] h-[300px]"
        src={chennaiFacilities}
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapEmbed;
