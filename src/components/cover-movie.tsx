import Link from "next/link";
import React from "react";
import Icon from "@mdi/react";
import { mdiChevronDoubleRight } from "@mdi/js";

function CoverMovie() {
  return (
    <>
      <section className="landing-movie  ">
        <div className="">
          <div className="  absolute text-white bottom-24  md:bottom-44 left-10 w-4/6 md:w-2/6 ">
            <div className="">
              <h1 className=" mb-2 text-4xl lg:text-9xl font-extrabold sm:mb-0 ">
                INCEPTION
              </h1>
              <p className="text-sm md:text-2xl">
                Inception centres on brooding “extractor” Dom Cobb a thief who
                invades targets dreams through a chemical-induced shared dream.
              </p>
            </div>
            <div className=" mt-5 flex flex-row font-semibold text-xl  ">
              <Link href="/">
                <button className="  cursor-pointer border-2 p-3 px-10   bg-darkPurple-100 bg-opacity-70 hover:bg-opacity-100 ">
                  Discover
                </button>
              </Link>
              <Link href="/">
                <button className="cursor-pointer ml-2 border-2 p-3 px-10 bg-darkPurple-100 bg-opacity-40 hover:bg-opacity-100 ">
                  More Details{" "}
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
