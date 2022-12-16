import React, { useState } from "react";

function MovieCard() {
  const [showDiscription, setShowDiscription] = useState(false);
  return (
    <>
      <div
        className="movie-card h-80 w-96 rounded-2xl cursor-pointer mb-6 hover:scale-110  transform-gpu "
        onMouseOver={() => setShowDiscription(true)}
        onMouseLeave={() => setShowDiscription(false)}
      >
        {showDiscription && (
          <div className=" relative top-44 pb-8 overflow-hidden  bg-opacity-90 bg-black rounded-b-2xl text-amber-300   ">
            <h1 className="font-bold text-4xl">Seven</h1>
            <p>Genre: Thriller</p>
            <div className="flex flex-row">
              <button className=" mr-2 font-bold text-white cursor-pointer border-2 p-4  bg-darkPurple-100 bg-opacity-30 hover:bg-opacity-100 rounded-full ">
                <span className="mdi mdi-thumbs-down-outline "></span>
              </button>
              <button className=" font-bold text-white cursor-pointer border-2 p-4  bg-darkPurple-100 bg-opacity-30 hover:bg-opacity-100 rounded-full ">
                <span className="mdi mdi-dislike-outline"></span>
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default MovieCard;
