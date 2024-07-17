// import React from "react";
import PostSide from "../components/PostSide/PostSide";
import ProfileSide from "../components/profileSide/ProfileSide";
import RightSide from "../components/RightSide/RightSide";
import "./Home.css";
import { Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { SearchIcon } from 'lucide-react'


import dp from '../../../server/public/images/1655342713379paul-walker-21044993-1-402.jpg'
const sample = [
  {
    "id": "clynftmut0002n2hpupg9m9fa",
    "username": "user3",
    "password": "$2b$10$U6Hg40ezHI/8p/jCtak.P.V16l8xbNyEd6/a/0La5IBKgzrq6iOfq",
    "firstname": "Alice",
    "lastname": "Johnson",
    "rating": 3.2,
    "isAdmin": false,
    "profilePicture": "path_to_image",
    "coverPicture": "path_to_image",
    "about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "country": "UK",
    "followers": [],
    "following": [],
    "createdAt": "2024-07-15T20:29:04.373Z",
    "updatedAt": "2024-07-15T20:29:04.373Z"
  },
  {
    "id": "clynftndv0003n2hp3nicxz22",
    "username": "user4",
    "password": "$2b$10$IrSSXRwZYeHF9EVyxY3aFOmO5C4nflO/UC.9q.xcnPrtxCllj93t2",
    "firstname": "Bob",
    "lastname": "Brown",
    "isAdmin": false,
    "rating": 3.2,
    "profilePicture": "path_to_image",
    "coverPicture": "path_to_image",
    "about": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "country": "Australia",
    "followers": [],
    "following": [],
    "createdAt": "2024-07-15T20:29:05.059Z",
    "updatedAt": "2024-07-15T20:29:05.059Z"
  }
];

const Entry = () => {
  console.log(import.meta.env);
  // this is the vent page
  return (
    <div className="Home w-full">
      <div className="flex flex-col gap-3 justify-center items-center">
        <div className="h-[400px] bg-white rounded flex flex-col justify-center items-center w-[80%] m-4">
          <h1 className=" text-xl font-bold mb-2">Daily tips </h1>
         
          <div className="flex justify-evenly w-full p-6">

          <img src={dp} alt="" className="rounded" />
          <div className="w-full flex justify-center items-center">
            <ul>
              <li>

                1. Track gratitude and achievement with a journal.
              </li>
              <li>

                2. Start your day with a cup of co­ffee.
              </li>
              <li>

                3. Set up a getaway.
              </li>
              <li>

                4, Work your strengths
              </li>
              <li>

                5. Keep it cool for a good night's sleep
              </li>
            </ul>
          </div>
          </div>

        </div>
        <h1 className="text-gray-300 text-xl font-bold"> Top Rated Consultants</h1>
        <div className=" flex flex-wrap gap-4 h-full">

          {sample.map((s) => (
            <div key={s.id} className="bg-white shadow-md rounded-lg p-4 mb-4 flex justify-center flex-col h-[200px]">
              <div className='flex items-center'>

                <img
                  src={dp}
                  alt={`${s.firstname} ${s.lastname}`}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div className="flex-1">
                  <h3 className="text-xl font-bold">{s.firstname} {s.lastname}</h3>
                  <div className="flex items-center mb-2">
                    {[...Array(Math.round(s.rating))].map((_, i) => (
                      <Star key={i} className="text-yellow-500 w-5 h-5" />
                    ))}
                  </div>
                  <p className="text-gray-600">{s.about}</p>
                </div>
              </div>
              <div className="flex justify-end">

                <button
                  onClick={() => handleAppointment(s.id)}
                  className="ml-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
                >
                  Book Appointment
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Entry;
