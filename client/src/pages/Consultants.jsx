import React from 'react';
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

function Consultants() {
  const navigate = useNavigate();

  const handleAppointment = (id) => {
    navigate(`/appointment/${id}`);
  };

  return (
    <div className="w-full h-full p-4">
      <h1 className='text-gray-300 text-xl font-bold '>All Consultants</h1>
      <div class="relative rounded-md w-full">
        <button type="button" class="absolute inset-y-0 left-0 px-3 py-2 rounded-r-md  text-gray-600 hover:bg-blue-700">
          <SearchIcon className="h-6 w-6 mr-2" style={{ color: 'inherit' }} />
        </button>
        <input type="text" class="w-full px-8 py-3 rounded-l-md bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 pl-16" placeholder="Search..." />
      </div>
      <div className='bg-gray-300 m-2 p-2 flex flex-wrap gap-4 h-full'>

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
  );
}

export default Consultants;
