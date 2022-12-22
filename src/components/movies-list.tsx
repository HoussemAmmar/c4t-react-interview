import { mdiMagnify } from '@mdi/js';
import Icon from '@mdi/react';
import Multiselect from 'multiselect-react-dropdown';
import React, { useEffect, useRef, useState } from 'react';
import ReactPaginate from 'react-paginate';

import MovieCard from '@/components/movie-card';
import type { Movie } from '@/types/movies.types';

const MoviesList: React.FC<{ title: string; movies: Movie[] }> = ({
  title,
  movies,
}) => {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState<string[]>([]);
  const [categoryList, setCategoryList] = useState<any[]>([]);

  const [currentPage, setCurrentPage] = useState(0);
  const [dataPaginated, setDataPaginated] = useState([]);
  const [perPage] = useState(6);
  const [pageCount, setPageCount] = useState(0);
  const [moviesList, setMoviesList] = useState(movies);
  const [test, setTest] = useState('');
  const multiselectRef = useRef();

  function filterByCategory(categories: any) {
    setCategory(categories);
    const filteredArray = movies.filter((el) => {
      if (categories.length === 0) {
        return el;
      }
      let expression = '';
      categories.forEach((e, index) => {
        expression += `el.category === '${e}'${
          index === categories.length - 1 ? '' : ' || '
        }`;
      });
      return eval(expression);
    });
    // @ts-ignore

    setMoviesList(filteredArray);
  }

  function filterByTitle(searchValue: string) {
    const filteredArray = movies.filter((movie) =>
      movie.title.toUpperCase().startsWith(searchValue.toUpperCase())
    );
    setMoviesList(filteredArray);
    setSearch(searchValue);
  }

  useEffect(() => {
    // get only the categories that exits
    const existingCategories = movies.map((movie: any) => movie.category);
    // remove the duplications
    const categories: any = existingCategories.filter(
      (element: any, index: number) => {
        return existingCategories.indexOf(element) === index;
      }
    );
    const categoriesIndexed = categories.map((el, i) => {
      return { name: el, id: i };
    });

    setCategoryList(categoriesIndexed);

    // @ts-ignore
    setPageCount(Math.ceil(moviesList.length / perPage));
    const slice: any = moviesList.slice(
      perPage * currentPage,
      perPage * (currentPage + 1)
    );

    setDataPaginated(slice);
  }, [currentPage, moviesList]);

  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setCurrentPage(selectedPage);
  };
  const resetValues = () => {
    setTest('ok');
    console.log('test', test);
    // By calling the belowe method will reset the selected values programatically
    console.log('ref', multiselectRef.current);
  };
  // @ts-ignore
  return (
    <div className=" relative  bg-darkPurple-800 shadow xl:px-36">
      <div className="4xl: ml-8 flex flex-row flex-wrap items-center md:ml-10 xl:ml-40 3xl:ml-32 4xl:ml-44">
        <h1 className="mr-10 text-3xl font-bold text-amber-100 sm:text-5xl">
          {title}
        </h1>
        <div className="flex flex-col flex-wrap sm:flex-row">
          <div className="">
            <Multiselect
              id="filter"
              options={categoryList} // Options to display in the dropdown
              // selectedValues={category} // Preselected value to persist in dropdown
              onSelect={(selectedList, selectedItem) => {
                const categories = [...category, selectedItem.name];
                filterByCategory(categories);
              }} // Function will trigger on select event
              onRemove={(selectedList, removedItem) => {
                const categories = category.filter(
                  (el) => el !== removedItem.name
                );
                filterByCategory(categories);
              }} // Function will trigger on remove event
              displayValue="name" // Property name to display in the dropdown options
              // showArrow={true}
              // placeholder="Genre"
              className="  text-xl font-semibold text-amber-100"
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
              onChange={(e) => filterByTitle(e.target.value)}
            />
            <span className="search-btn   rounded-full p-2 text-nearWhite-200 hover:bg-nearWhite-200 hover:text-grayBlack-900 ">
              <Icon path={mdiMagnify} title="User Profile" size={1} />
            </span>
          </div>
        </div>
      </div>

      {dataPaginated.length > 0 ? (
        <>
          <div className="flex flex-wrap justify-center pt-6 sm:pt-8 md:pt-12 lg:pt-6">
            {dataPaginated.map((movie: Movie) => (
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
          >
            {(previousLabel, nextLabel) => {
              <span data-testid="previous-button">{previousLabel}</span>;
              <span data-testid="next-button">{nextLabel}</span>;
            }}
          </ReactPaginate>
        </>
      ) : (
        <h1 className="flex h-screen w-full items-center justify-center pb-40 text-2xl font-normal text-white">
          Did not match any movie
        </h1>
      )}
    </div>
  );
};

export default MoviesList;
