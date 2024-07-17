
// import { ChevronFirst, ChevronLast, MoreVertical } from 'lucide-react';
// import logo from '../assets/logo.png';
// import profile from '../assets/profile.png';
// import { createContext, useContext, useEffect, useState } from 'react';

// const SidebarContext = createContext();

// export default function Sidebar({ children }) {
//   const [expanded, setExpanded] = useState(true);
//   const [darkMode, setDarkMode] = useState(() => {
//     // Initialize dark mode state from localStorage if available
//     const savedDarkMode = localStorage.getItem('darkMode');
//     return savedDarkMode ? JSON.parse(savedDarkMode) : false;
//   });

//   useEffect(() => {
//     // Update document body class based on darkMode state
//     if (darkMode) {
//       document.documentElement.classList.add('dark');
//     } else {
//       document.documentElement.classList.remove('dark');
//     }

//     // Save darkMode state to localStorage
//     localStorage.setItem('darkMode', JSON.stringify(darkMode));
//   }, [darkMode]);

//   const toggleDarkMode = () => {
//     setDarkMode((prevDarkMode) => !prevDarkMode);
//   };

//   // Function to handle window resize
//   const handleResize = () => {
//     if (window.innerWidth <= 768) {
//       // Adjust this value according to your design
//       setExpanded(false);
//     } else {
//       setExpanded(true);
//     }
//   };

//   // Use useEffect to handle initial state and window resize event
//   useEffect(() => {
//     handleResize(); // Set initial state on component mount

//     window.addEventListener('resize', handleResize); // Add listener for window resize
//     return () => {
//       window.removeEventListener('resize', handleResize); // Clean up on component unmount
//     };
//   }, []);

//   return (
//     <>
//       <aside className="h-screen">
//         <nav
//           className={`h-full flex flex-col ${
//             darkMode ? 'bg-black text-white' : 'bg-white text-black'
//           } border-r shadow-sm transition-colors`}
//         >
//           <div className="p-4 pb-2 flex justify-between items-center">
//             <img
//               src={logo}
//               className={`overflow-hidden transition-all ${
//                 expanded ? 'w-32' : 'w-0'
//               }`}
//             />
//             <button
//               onClick={() => setExpanded((curr) => !curr)}
//               className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
//             >
//               {expanded ? <ChevronFirst /> : <ChevronLast />}
//             </button>
//           </div>

//           <SidebarContext.Provider value={{ expanded, darkMode, toggleDarkMode }}>
//             <ul className="flex-1 px-3">{children}</ul>
//           </SidebarContext.Provider>

//           <div className="border-t flex p-3">
//             <img src={profile} className="w-10 h-10 rounded-md" />
//             <div
//               className={`flex justify-between items-center overflow-hidden transition-all ${
//                 expanded ? 'w-52 ml-3' : 'w-0'
//               } `}
//             >
//               <div className="leading-4">
//                 <h4 className="font-semibold">constGenius</h4>
//                 <span className="text-xs text-gray-600">
//                   constgenius@gmail.com
//                 </span>
//               </div>
//               <MoreVertical size={20} />
//             </div>
//           </div>

//           <button
//             className="mt-4 bg-primary text-[17px] font-semibold p-2 rounded-full shadow-xs hover:bg-dblue transition-all"
//             onClick={toggleDarkMode}
//           >
//             {darkMode ? 'Light Mode' : 'Dark Mode'}
//           </button>
//         </nav>
//       </aside>
//     </>
//   );
// }

// export function SidebarItem({ icon, text, active, alert }) {
//   const { expanded } = useContext(SidebarContext);
//   return (
//     <li
//       className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${
//         active
//           ? 'bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800'
//           : 'hover:bg-indigo-50 text-gray-600'
//       }`}
//     >
//       {icon}
//       <span
//         className={`overflow-hidden transition-all ${
//           expanded ? 'w-52 ml-3' : 'w-0'
//         }`}
//       >
//         {text}
//       </span>
//       {alert && (
//         <div className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${expanded ? '' : 'top-2'}`}></div>
//       )}

//       {!expanded && (
//         <div
//           className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-100 text-indigo-800 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}
//         >
//           {text}
//         </div>
//       )}
//     </li>
//   );
// }

import { ChevronFirst, ChevronLast, MoreVertical } from 'lucide-react';
import logo from '../assets/logo.png';
import profile from '../assets/profile.png';
import { createContext, useContext, useEffect, useState } from 'react';
import { MoonIcon, SunIcon } from 'lucide-react'; // Import icons
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/AuthActions";

const SidebarContext = createContext();

export default function Sidebar({ children }) {
    const dispatch = useDispatch();


    const handleLogOut = () => {
        dispatch(logout())
    }

    const [expanded, setExpanded] = useState(true);
    const [darkMode, setDarkMode] = useState(() => {
        // Initialize dark mode state from localStorage if available
        const savedDarkMode = localStorage.getItem('darkMode');
        return savedDarkMode ? JSON.parse(savedDarkMode) : false;
    });

    useEffect(() => {
        // Update document body class based on darkMode state
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }

        // Save darkMode state to localStorage
        localStorage.setItem('darkMode', JSON.stringify(darkMode));
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode((prevDarkMode) => !prevDarkMode);
    };

    // Function to handle window resize
    const handleResize = () => {
        if (window.innerWidth <= 768) {
            // Adjust this value according to your design
            setExpanded(false);
        } else {
            setExpanded(true);
        }
    };

    // Use useEffect to handle initial state and window resize event
    useEffect(() => {
        handleResize(); // Set initial state on component mount

        window.addEventListener('resize', handleResize); // Add listener for window resize
        return () => {
            window.removeEventListener('resize', handleResize); // Clean up on component unmount
        };
    }, []);

    return (
        <>
            <aside className="h-screen">
                <nav
                    className={`h-full flex flex-col bg-white dark:bg-gray-800 border-r shadow-sm transition-colors`}
                >
                    <div className={`p-4 pb-2 flex justify-between items-center ${expanded ? 'flex' : 'flex-col'}`}>
                        <img
                            src={expanded ? profile : profile}
                            className={`overflow-hidden transition-all ${expanded ? 'w-32' : 'w-10'
                                }`}
                        />
                        <button
                            onClick={() => setExpanded((curr) => !curr)}
                            className="p-1.5 rounded-lg  bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-50"
                        >
                            {expanded ? <ChevronFirst className='dark:bg-gray-800 to-blue-400' /> : <ChevronLast />}
                        </button>
                    </div>

                    <SidebarContext.Provider value={{ expanded, darkMode, toggleDarkMode }}>
                        <ul className="flex-1 px-3">{children}</ul>
                    </SidebarContext.Provider>


                    <div className='m-2 flex align-middle justify-center'>

                        {expanded && <div className='mt-2'>
                            {darkMode ? <SunIcon color='white' className="mr-2" /> : <MoonIcon className="mr-2" />}
                        </div>
                        }
                        <label htmlFor="check" className='relative bg-gray-200 w-20 h-10 rounded-full'>

                            <input
                                onClick={toggleDarkMode}

                                type="checkbox" id='check' className='sr-only peer' />
                            <span className='w-2/5 h-4/5 bg-rose-300 absolute rounded-full left-1 top-1 peer-checked:bg-rose-600  peer-checked:left-11 transition-all duration-500'></span>
                        </label>
                    </div>
                    <div onClick={handleLogOut} className="border-t flex p-3 cursor-pointer  text-white">
                        <li class={`flex items-center justify-between px-4 py-3 bg-white rounded-lg shadow-md w-full bg-gradient-to-r from-[#002660] to-[#1B72C3] ${expanded ? 'w-52 ml-3' : 'w-0'}`}>
                            <div class="flex items-center ">
                                <svg class="w-6 h-6 mr-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
                                </svg>
                                {expanded && <span>Logout</span>}
                            </div>
                        </li>
                        {/* <img src={profile} className="w-10 h-10 rounded-md" />
                        <div
                            className={`flex justify-between items-center overflow-hidden transition-all ${expanded ? 'w-52 ml-3' : 'w-0'
                                } `}
                        >
                            <div className="leading-4">
                                <svg class="w-6 h-6 mr-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
                                </svg>
                                <h4 className="font-semibold dark:text-gray-100">anonymous</h4>
                                <span className="text-xs text-gray-600 dark:text-gray-100">
                                    test@gmail.com
                                </span>
                            </div>
                            <MoreVertical size={20} />
                        </div> */}
                    </div>
                    {/* <button
                        className="button w-full w-10 mt-4 bg-primary text-[17px] font-semibold p-2 rounded-full shadow-xs hover:bg-dblue transition-all dark:text-gray-100"
                        onClick={toggleDarkMode}
                    >
                        {darkMode ? 'Light Mode' : 'Dark Mode'}
                    </button> */}
                </nav>
            </aside>
        </>
    );
}

// export function SidebarItem({ icon, text, active, alert }) {
//     const { expanded } = useContext(SidebarContext);
//     return (
//         <li
//             className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${active
//                 ? 'bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800'
//                 : 'hover:bg-indigo-50 text-gray-600'
//                 }`}
//         >
//             {icon}
//             <span
//                 className={`overflow-hidden transition-all ${expanded ? 'w-52 ml-3' : 'w-0'
//                     }`}
//             >
//                 {text}
//             </span>
//             {alert && (
//                 <div className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${expanded ? '' : 'top-2'}`}></div>
//             )}

//             {/* {!expanded && (
//                 <div
//                     className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-100 text-indigo-800 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}
//                 >
//                     {text}
//                 </div>
//             )} */}
//         </li>
//     );
// }


import { NavLink, useLocation } from 'react-router-dom';

export function SidebarItem({ icon, text, path, alert }) {
    const { expanded } = useContext(SidebarContext);
    const location = useLocation();

    // Check if the current path starts with the specified path
    const isActive = location.pathname.startsWith(path);

    return (
        <li
            className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${isActive
                ? 'bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800'
                : 'hover:bg-indigo-50 text-gray-600 dark:hover:text-gray-600 dark:text-gray-100'
                }`}
        >
            <NavLink
                to={path}
                className={`flex items-center space-x-2 w-full ${expanded ? 'justify-start' : 'justify-center'
                    }`}
                activeClassName="bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
                exact={true}
            >
                {icon}
                <span className={`overflow-hidden transition-all ${expanded ? 'ml-3' : 'w-0'}`}>
                    {text}
                </span>
            </NavLink>

            {alert && (
                <div
                    className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${expanded ? '' : 'top-2'
                        }`}
                ></div>
            )}
        </li>
    );
}

