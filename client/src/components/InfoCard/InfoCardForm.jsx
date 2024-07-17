// import React, { useEffect, useState } from "react";
// import "./InfoCard.css";
// import { UilPen } from "@iconscout/react-unicons";
// import ProfileModal from "../ProfileModal/ProfileModal.jsx";
// import { useDispatch, useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
// import * as UserApi from "../../api/UserRequests.js";
// import { logout } from "../../actions/AuthActions.js";

// const InfoCardForm = () => {
//     const dispatch = useDispatch()
//     const params = useParams();
//     const [modalOpened, setModalOpened] = useState(false);
//     const profileUserId = params.id;
//     const [profileUser, setProfileUser] = useState({});
//     const { user } = useSelector((state) => state.authReducer.authData);


//     const handleLogOut = () => {
//         dispatch(logout())
//     }


//     useEffect(() => {
//         if (profileUserId == null && user.id == null) {
//             return;
//         }

//         const fetchProfileUser = async () => {
//             if (profileUserId === user.id) {
//                 setProfileUser(user);
//             } else {
//                 console.log("fetching")
//                 const profileUser = await UserApi.getUser(user.id);
//                 setProfileUser(profileUser.data);
//                 console.log(profileUser.data)
//             }
//         };
//         fetchProfileUser();
//     }, [profileUserId, user]);

//     return (
//         <div className="InfoCard">
//             <div className="infoHead">
//                 <h4>Profile Info</h4>
//                 {user.id === profileUserId ? (
//                     <div>
//                         <UilPen
//                             width="2rem"
//                             height="1.2rem"
//                             onClick={() => setModalOpened(true)}
//                         />
//                         <ProfileModal
//                             modalOpened={modalOpened}
//                             setModalOpened={setModalOpened}
//                             data={user}
//                         />
//                     </div>
//                 ) : (
//                     ""
//                 )}
//             </div>

//             <div className="info">
//                 {/* */}
//                 <span>
//                     <b>Status </b>
//                 </span>
//                 <span>{profileUser.relationship}</span>
//             </div>
//             <div className="info">
//                 <span>
//                     <b>Lives in </b>
//                 </span>
//                 <span>{profileUser.livesIn}</span>
//             </div>
//             <div className="info">
//                 <span>
//                     <b>Works at </b>
//                 </span>
//                 <span>{profileUser.worksAt}</span>
//             </div>

//             <button className="button logout-button" onClick={handleLogOut}>Log Out</button>
//         </div>
//     );
// };

// export default InfoCardForm;


import React, { useEffect, useState } from "react";
import "./InfoCard.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import * as UserApi from "../../api/UserRequests.js";
import { logout } from "../../actions/AuthActions.js";

const InfoCardForm = () => {
    const dispatch = useDispatch();
    const params = useParams();
    const profileUserId = params.id;
    const [profileUser, setProfileUser] = useState({
        about: "",
        country: "",
        coverPicture: "",
        firstname: "",
        id: "",
        isAdmin: false,
        lastname: "",
        profilePicture: "",
        username: "",
    });
    const { user } = useSelector((state) => state.authReducer.authData);

    const handleLogOut = () => {
        dispatch(logout());
    };

    useEffect(() => {
        if (profileUserId == null && user.id == null) {
            return;
        }

        const fetchProfileUser = async () => {
            if (profileUserId === user.id) {
                setProfileUser(user);
            } else {
                const profileUser = await UserApi.getUser(user.id);
                setProfileUser(profileUser.data);
            }
        };
        fetchProfileUser();
    }, [profileUserId, user]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfileUser((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await UserApi.updateUser(profileUser);
            alert("Profile updated successfully");
        } catch (error) {
            console.error("Error updating profile:", error);
            alert("Error updating profile");
        }
    };

    return (
        <div className="InfoCard bg-white w-full h-full">
            <div className="infoHead flex flex-col justify-center align-middle">
                <h4>Profile Info</h4>
            </div>
            <form onSubmit={handleSubmit} className="infoForm">

                <div className="info">
                    <label>
                        <b>Country</b>
                    </label>
                    <input
                        className="infoInput"

                        type="text"
                        name="country"
                        value={profileUser.country}
                        onChange={handleChange}
                    />
                </div>

                <div className="info">
                    <label>
                        <b>First Name</b>
                    </label>
                    <input
                        className="infoInput"

                        type="text"
                        name="firstname"
                        value={profileUser.firstname}
                        onChange={handleChange}
                    />
                </div>
                <div className="info">
                    <label>
                        <b>Last Name</b>
                    </label>
                    <input
                        className="infoInput"

                        type="text"
                        name="lastname"
                        value={profileUser.lastname}
                        onChange={handleChange}
                    />
                </div>
                <div className="info">
                    <label>
                        <b>Username</b>
                    </label>
                    <input
                        className="infoInput rounded-full"

                        type="text"
                        name="username"
                        value={profileUser.username}
                        onChange={handleChange}
                    />
                </div>
                <div className="info">
                    <label>
                        <b>Bio</b>
                    </label>
                    <textarea
                        className="rounded bg-gray-200 h-fit"
                        type="text"
                        name="about"
                        value={profileUser.about}
                        onChange={handleChange}
                    />
                </div>
                <button className="rounded p-3 bg-yellow-400 w-full" type="submit">Save Changes</button>
            </form>
            <button className="w-fit p-3 rounded bg-red-400" onClick={handleLogOut}>
                Log Out
            </button>
        </div>
    );
};

export default InfoCardForm;
