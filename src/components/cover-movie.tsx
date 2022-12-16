import Link from 'next/link';
import React from 'react';

function CoverMovie() {
  return (
    <>
      <section className="landing-movie  ">
        <div className="">
          <div className="  absolute bottom-24 left-10  w-4/6 text-white md:bottom-44 md:w-2/6 ">
            <div className="">
              <h1 className=" mb-2 text-4xl font-extrabold sm:mb-0 lg:text-9xl ">
                INCEPTION
              </h1>
              <p className="text-sm md:text-2xl">
                Inception centres on brooding “extractor” Dom Cobb a thief who
                invades targets dreams through a chemical-induced shared dream.
              </p>
            </div>
            <div className=" mt-5 flex flex-row text-xl font-semibold  ">
              <Link href="/">
                <button className="  cursor-pointer border-2 bg-darkPurple-100 bg-opacity-70   p-3 px-10 hover:bg-opacity-100 ">
                  Discover
                </button>
              </Link>
              <Link href="/">
                <button className="ml-2 cursor-pointer border-2 bg-darkPurple-100 bg-opacity-40 p-3 px-10 hover:bg-opacity-100 ">
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
}

export default CoverMovie;
