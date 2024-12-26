import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
            
          </p>
          <p>We are all in 2024!</p>
          
          <p>
          At JeetCare Hospital, we are dedicated to providing exceptional healthcare services to our community. With a team of experienced professionals and state-of-the-art facilities, we aim to deliver compassionate and personalized care to every patient.Our mission is to ensure the well-being of those we serve by combining medical expertise with a patient-first approach. From routine check-ups to specialized treatments, JeetCare Hospital stands as a trusted partner in health and healing.
          </p>
          <p>We are committed to innovation, integrity, and excellence in healthcare, fostering a supportive environment for both patients and their families.</p>
         
        </div>
      </div>
    </>
  );
};

export default Biography;
