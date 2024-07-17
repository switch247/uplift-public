import React from 'react';

const Explore = () => {
  return (
    <section className="section__container explore__container">
      <div className="explore__header">
        <h2 className="section__header">EXPLORE OUR PROGRAM</h2>
        <div className="explore__nav">
          <span><i className="ri-arrow-left-line"></i></span>
          <span><i className="ri-arrow-right-line"></i></span>
        </div>
      </div>
      <div className="explore__grid">
        <div className="explore__card">
          <span><i className="ri-emotion-line"></i></span>
          <h4>Mental Wellness</h4>
          <p>
            Embrace the journey towards mental wellness as we explore the various dimensions of emotional, psychological, and social well-being.
          </p>
          <a href="#">Join Now <i className="ri-arrow-right-line"></i></a>
        </div>
        <div className="explore__card">
          <span><i className="ri-chat-3-line"></i></span>
          <h4>Therapist Chat</h4>
          <p>
            Connect directly with professional therapists through our secure chat feature for personalized support.
          </p>
          <a href="#">Join Now <i className="ri-arrow-right-line"></i></a>
        </div>
        <div className="explore__card">
          <span><i className="ri-calendar-line"></i></span>
          <h4>Appointments</h4>
          <p>
            Easily schedule appointments with qualified therapists at times that work best for you.
          </p>
          <a href="#">Join Now <i className="ri-arrow-right-line"></i></a>
        </div>
        <div className="explore__card">
          <span><i className="ri-vent-line"></i></span>
          <h4>Anonymous Venting</h4>
          <p>
            Utilize our anonymous vent page to express your thoughts and feelings freely without any judgment.
          </p>
          <a href="#">Join Now <i className="ri-arrow-right-line"></i></a>
        </div>
        <div className="explore__card">
          <span><i className="ri-robot-line"></i></span>
          <h4>AI Chat Bot</h4>
          <p>
            Get immediate assistance and mental health support from our advanced AI chat bot anytime, anywhere.
          </p>
          <a href="#">Join Now <i className="ri-arrow-right-line"></i></a>
        </div>
      </div>
    </section>
  );
};

export default Explore;
