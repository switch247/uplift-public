import React from "react";
import "./ProfileCard.css";
import Cover from "../../img/cover.jpg";
import Profile from "../../img/profileImg.jpg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import dp from '../../../../server/public/images/1655342713379paul-walker-21044993-1-402.jpg'
const ProfileCard = ({location}) => {
  const { user } = useSelector((state) => state.authReducer.authData);
  const posts = useSelector((state)=>state.postReducer.posts)
  const serverPublic = import.meta.env.VITE_REACT_APP_PUBLIC_FOLDER;

  return (
    <div className="ProfileCard bg-white  w-full h-full flex flex-col ">
      <div className="ProfileImages">
        {/* <img src={
            user.coverPicture
              ? serverPublic + user.coverPicture
              : serverPublic + "defaultCover.jpg"
          } alt="CoverImage"
          onError={(e) => {e.src = serverPublic + "defaultCover.jpg"}}
          /> */}
        <img
        className="rounded"
          src={
              dp

            }
          alt="ProfileImage"
          onError={(e) => {e.src = dp}}
        />
      </div>

      {/* <div className="ProfileName">
        <span>{user.firstname} {user.lastname}</span>
        <span>{user.bio? user.bio : ''}</span>
      </div> */}

      {/* <div className="">
        <hr />

        <div>
          <div className="follow">
            <span>{user.followers.length}</span>
            <span>Followers</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span>{user.following.length}</span>
            <span>Following</span>
          </div>


          {location === "profilePage" && (
            <>
              <div className="vl"></div>
              <div className="follow">
                <span>{
                posts.filter((post)=>post.userId === user.id).length
                }</span>
                <span>Posts</span>
              </div>{" "}
            </>
          )}
        </div>

        <hr />
      </div> */}

      {location === "profilePage" ? (
        ""
      ) : (
        <span>
          <Link to={`/profile/${user.id}`} style={{ textDecoration: "none", color: "inherit" }}>
            My Profile
          </Link>
        </span>
      )}
      <div className="flex flex-col gap-3 justify-center w-full align-middle">
        <button className="rounded w-fit p-3" >Change Avatar</button>
        <span className="rounded border-spacing-0 w-fit p-3 text-red-600" >Delete Avatar</span>

      </div>

    </div>
  );
};

export default ProfileCard;
