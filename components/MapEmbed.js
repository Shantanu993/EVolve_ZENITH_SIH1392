import React from "react";

const MapEmbed = () => {
  return (
    <div className="w-full h-screen">
      <iframe
        className="md:w-[600px] md:h-[450px] w-[100%] h-[300px]"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15561.212070270165!2d80.0425244!3d12.82368535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f70d56fd0453%3A0x6f20060264100f08!2sPotheri%2C%20Kattankulathur%2C%20Tamil%20Nadu%20603203!5e0!3m2!1sen!2sin!4v1694536928747!5m2!1sen!2sin"
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
