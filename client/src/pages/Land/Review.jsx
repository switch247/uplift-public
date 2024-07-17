import React from 'react';
import memberImg from '../../assets/member.jpg';

const Review = () => {
  return (
    <section className="review">
      <div className="section__container review__container">
        <span><i className="ri-double-quotes-r"></i></span>
        <div className="review__content">
          <h4>STUDENT FEEDBACK</h4>
          <p>
            What truly sets this platform apart is the dedication of its counselors and therapists. They are knowledgeable, empathetic, and genuinely committed to helping students navigate their mental health challenges. They provide personalized guidance and support, ensuring that each student receives the assistance they need.
          </p>
          <div className="review__rating">
            <span><i className="ri-star-fill"></i></span>
            <span><i className="ri-star-fill"></i></span>
            <span><i className="ri-star-fill"></i></span>
            <span><i className="ri-star-fill"></i></span>
            <span><i className="ri-star-half-fill"></i></span>
          </div>
          <div className="review__footer">
            <div className="review__member">
              <img src={memberImg} alt="member" />
              <div className="review__member__details">
                <h4>Jane Cooper</h4>
                <p>Student</p>
              </div>
            </div>
            <div className="review__nav">
              <span><i className="ri-arrow-left-line"></i></span>
              <span><i className="ri-arrow-right-line"></i></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
