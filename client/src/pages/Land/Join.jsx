import React from 'react';
import joinImg from '../../assets/join.jpeg';

const Join = () => {
  return (
    <section className="section__container join__container">
      <h2 className="section__header">WHY JOIN US?</h2>
      <p className="section__subheader">
        Our diverse community fosters a welcoming and supportive environment, where students can find solace and motivation.
      </p>
      <div className="join__image">
        <img src={joinImg} alt="Join" className='img_new' />
        <div className="join__grid">
          <div className="join__card">
            <span><i className="ri-user-heart-fill"></i></span>
            <div className="join__card__content">
              <h4>Professional Therapists</h4>
              <p>Receive guidance and support from certified therapists dedicated to your mental well-being.</p>
            </div>
          </div>
          <div className="join__card">
            <span><i className="ri-chat-3-line"></i></span>
            <div className="join__card__content">
              <h4>Interactive Sessions</h4>
              <p>Participate in interactive sessions that cater to your emotional and psychological needs.</p>
            </div>
          </div>
          <div className="join__card">
            <span><i className="ri-community-line"></i></span>
            <div className="join__card__content">
              <h4>Supportive Community</h4>
              <p>Be part of a community that understands and supports your journey towards mental wellness.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Join;
