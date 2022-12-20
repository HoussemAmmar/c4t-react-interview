import { mdiMagnify } from '@mdi/js';
import Icon from '@mdi/react';
import Multiselect from 'multiselect-react-dropdown';
import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

import MovieCard from '@/components/movie-card';
import type { Movie } from '@/types/movies.types';

const MoviesList: React.FC<{ title: string; movies: Movie[] }> = ({
  title,
  movies,
}) => {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState([]);
  const [categoryList, setCategoryList] = useState([]);

  const [currentPage, setCurrentPage] = useState(0);
  const [dataPaginated, setDataPaginated] = useState([]);
  const [perPage] = useState(6);
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    const existingCategories = movies.map((movie: any) => movie.category);
    const categories: any = existingCategories.filter(
      (element: any, index: number) => {
        return existingCategories.indexOf(element) === index;
      }
    );

    setCategoryList(categories);

    // @ts-ignore
    setPageCount(Math.ceil(movies.length / perPage));
    const slice: any = movies.slice(
      perPage * currentPage,
      perPage * (currentPage + 1)
    );

    setDataPaginated(slice);
  }, [currentPage, categoryList]);

  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setCurrentPage(selectedPage);
  };

  // @ts-ignore
  return (
    <div className=" relative  bg-darkPurple-800 shadow xl:px-52">
      <div className="4xl: ml-8 flex flex-row flex-wrap items-center md:ml-10 xl:ml-40 3xl:ml-32 4xl:ml-44">
        <h1 className="mr-10 text-3xl font-bold text-amber-100 sm:text-5xl">
          {title}
        </h1>
        <div className="flex flex-col flex-wrap sm:flex-row">
          <div className="">
            <Multiselect
              options={categoryList} // Options to display in the dropdown
              // selectedValues={category} // Preselected value to persist in dropdown
              // onSelect={(e) => console.log('e', e)} // Function will trigger on select event
              // onRemove={() => setCategory(category)} // Function will trigger on remove event
              displayValue="name" // Property name to display in the dropdown options
              showArrow={true}
              placeholder="Genre"
              // className="  text-xl font-semibold text-amber-100"
            />
          </div>
          {/* <select */}
          {/*  className=" w-16 " */}
          {/*  onChange={(e) => { */}
          {/*    setCategory(e.target.value); */}
          {/*  }} */}
          {/* > */}
          {/*  <option className="text-black" value={''}> */}
          {/*    select category */}
          {/*  </option> */}
          {/*  {categoryList.map((el: string, index: number) => ( */}
          {/*    <option key={index} className="text-black" value={el}> */}
          {/*      {el} */}
          {/*    </option> */}
          {/*  ))} */}
          {/* </select> */}
          <div
            className={`  search-box  pl-2 text-white ${search && 'hover-box'}`}
          >
            <input
              className="search-text"
              type="text"
              placeholder="Search Anything"
              onChange={(e) => setSearch(e.target.value)}
            />
            <span className="search-btn   rounded-full p-2 text-nearWhite-200 hover:bg-nearWhite-200 hover:text-grayBlack-900 ">
              <Icon path={mdiMagnify} title="User Profile" size={1} />
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center pt-6 sm:pt-8 md:pt-12 lg:pt-6">
        {dataPaginated
          .filter((el) => {
            if (category.length === 0) {
              return el;
            }
            let expression = '';
            category.forEach((e, index) => {
              expression += `el.category === '${e}'${
                index === category.length - 1 ? '' : ' || '
              }`;
            });
            return eval(expression);
          })
          .filter((movie) =>
            movie.title.toUpperCase().startsWith(search.toUpperCase())
          )
          .map((movie: Movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
      </div>
      <ReactPaginate
        previousLabel={'<<'}
        nextLabel={'>>'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        activeClassName={'active'}
      />
    </div>
  );
};

export default MoviesList;
