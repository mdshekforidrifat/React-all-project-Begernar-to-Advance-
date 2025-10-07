import React from "react";

const ProfileCard = (props) => {
  return (
    <div className="shadow-lg shadow-red-500/50 card-1 rounded-md border-1 border-gray-500 w-80 h-95 p-3">
      <img
        className="w-[400px] h-[300px] rounded-2xl object-cover object-center bg-center"
        src={props.image}
        alt="profile"
      />
      <h2 className="text-center text-xl uppercase font-mono text-white mt-2">
        {props.name}
      </h2>
      <p className="text-center text-sm uppercase font-mono text-blue-400 ">
        {props.description}
      </p>
    </div>
  );
};

export default ProfileCard;
