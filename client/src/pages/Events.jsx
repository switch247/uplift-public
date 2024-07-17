
// import React from "react";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// const responsive = {
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 4,
//     slidesToSlide: 4 // optional, default to 1.
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 768 },
//     items: 3,
//     slidesToSlide: 3 // optional, default to 1.
//   },
//   mobile: {
//     breakpoint: { max: 767, min: 464 },
//     items: 2,
//     slidesToSlide: 1 // optional, default to 1.
//   }
// };
// const sliderImageUrl = [
//   //First image url
//   {
//     url:
//       "https://i2.wp.com/www.geeksaresexy.net/wp-content/uploads/2020/04/movie1.jpg?resize=600%2C892&ssl=1"
//   },
//   {
//     url:
//       "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-kids-movies-2020-call-of-the-wild-1579042974.jpg?crop=0.9760858955588091xw:1xh;center,top&resize=480:*"
//   },
//   //Second image url
//   {
//     url:
//       "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-movies-for-kids-2020-sonic-the-hedgehog-1571173983.jpg?crop=0.9871668311944719xw:1xh;center,top&resize=480:*"
//   },
//   //Third image url
//   {
//     url:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQS82ET2bq9oTNwPOL8gqyoLoLfeqJJJWJmKQ&usqp=CAU"
//   },

//   //Fourth image url

//   {
//     url:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTdvuww0JDC7nFRxiFL6yFiAxRJgM-1tvJTxA&usqp=CAU"
//   }
// ];
// const Events = () => {
//   return (
//     <div className="parent">
//       <Carousel
//         responsive={responsive}
//         autoPlay={true}
//         swipeable={true}
//         draggable={true}
//         showDots={true}
//         infinite={true}
//         partialVisible={false}
//         dotListClass="custom-dot-list-style"
//       >
//         {sliderImageUrl.map((imageUrl, index) => {
//           return (
//             <div className="slider" key={index}>
//               <img src={imageUrl.url} alt="movie" />
//             </div>
//           );
//         })}
//       </Carousel>
//     </div>
//   );
// };
// export default Events;



import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1 // Only one slide at a time
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 1,
    slidesToSlide: 1 // Only one slide at a time
  },
  mobile: {
    breakpoint: { max: 767, min: 0 },
    items: 1,
    slidesToSlide: 1 // Only one slide at a time
  }
};

const sampleEvents = {
  upcoming: [
    {
      id: 1,
      title: 'Mindfulness Workshop',
      date: '2024-08-10',
      location: 'Addis Ababa, Ethiopia',
      description: 'A workshop focused on mindfulness techniques to improve mental well-being.',
      image: 'https://example.com/image1.jpg'
    },
    {
      id: 2,
      title: 'Coping with Anxiety Support Group',
      date: '2024-09-05',
      location: 'Addis Ababa, Ethiopia',
      description: 'A support group meeting to discuss strategies for managing anxiety and improving mental health.',
      image: 'https://example.com/image2.jpg'
    },
  ],
  past: [
    {
      id: 1,
      title: 'Self-Care Retreat 2024',
      date: '2023-05-15',
      location: 'Addis Ababa, Ethiopia',
      description: 'An immersive retreat focused on self-care practices to promote mental well-being.',
      image: 'https://example.com/image3.jpg'
    },
    {
      id: 2,
      title: 'Emotional Intelligence Workshop',
      date: '2023-06-20',
      location: 'Addis Ababa, Ethiopia',
      description: 'A workshop exploring the connection between emotional intelligence and mental health.',
      image: 'https://example.com/image4.jpg'
    },
  ],
};
const Events = () => {
  return (
    <div className="w-full h-full p-4">
      <h2 className="text-2xl font-bold mb-4">Upcoming Events</h2>
      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {sampleEvents.upcoming.map((event) => (
          <div key={event.id} className="flex bg-white shadow-lg p-4 rounded-lg">
            <img src={event.image} alt={event.title} className="w-1/4 h-auto mr-4 rounded-md" />
            <div>
              <h3 className="text-xl font-semibold">{event.title}</h3>
              <p className="text-gray-600">{event.date}</p>
              <p className="text-gray-600">{event.location}</p>
              <p className="mt-2">{event.description}</p>
            </div>
          </div>
        ))}
      </Carousel>

      <h2 className="text-2xl font-bold my-4">Past Events</h2>
      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {sampleEvents.past.map((event) => (
          <div key={event.id} className="flex bg-white shadow-lg p-4 rounded-lg">
            <img src={event.image} alt={event.title} className="w-1/4 h-auto mr-4 rounded-md" />
            <div>
              <h3 className="text-xl font-semibold">{event.title}</h3>
              <p className="text-gray-600">{event.date}</p>
              <p className="text-gray-600">{event.location}</p>
              <p className="mt-2">{event.description}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Events;
