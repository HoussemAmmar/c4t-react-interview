import Link from 'next/link';
import React from 'react';

const CoverMovie: React.FC<{ title: string; description: string }> = ({
  title,
  description,
}) => {
  return (
    <>
      <section className="landing-movie  ">
        <div className="">
          <div className="   absolute left-5 bottom-10 w-5/6 text-white 4xs:bottom-32 3xs:bottom-36 3xs:w-4/6 xs:bottom-44   sm:left-10 lg:bottom-36  lg:w-2/6 ">
            <div className="">
              <h1 className=" mb-2 text-3xl  font-extrabold 4xs:text-5xl sm:mb-0  lg:text-7xl xl:text-9xl ">
                {title}
              </h1>
              <p className=" text-xs 4xs:text-sm md:text-2xl">{description}</p>
            </div>
            <div className="mt-5 flex flex-row text-lg font-semibold 2xs:text-xl">
              <Link href="/">
                <button className="  bg-darkPurple-100- 2x:px-6 cursor-pointer border-2   bg-darkPurple-100 bg-opacity-40 p-2 hover:bg-opacity-100 sm:p-3 sm:px-5 xl:px-10 ">
                  Discover
                </button>
              </Link>
              <Link href="/">
                <button className="ml-2 cursor-pointer border-2 bg-darkPurple-100 bg-opacity-40 p-2 hover:bg-opacity-100  sm:p-3 sm:px-5 xl:px-10 ">
                  More Details{' '}
                  <span className="mdi mdi-chevron-double-right "></span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CoverMovie;
