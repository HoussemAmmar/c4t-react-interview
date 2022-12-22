import { mdiMagnify } from '@mdi/js';
import Icon from '@mdi/react';
import Multiselect from 'multiselect-react-dropdown';
import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

import MovieCard from '@/components/movie-card';
import type { Movie, MovieListPropsType } from '@/types/movies.types';

const MoviesList: React.FC<MovieListPropsType> = ({ title, movies }) => {
  const [search, setSearch] = useState<string>('');
  const [category, setCategory] = useState<string[]>([]);
  const [categoryList, setCategoryList] = useState<string[]>([]);

  const [currentPage, setCurrentPage] = useState<number>(0);
  const [dataPaginated, setDataPaginated] = useState<Movie[]>([]);
  const [perPage] = useState<number>(6);
  const [pageCount, setPageCount] = useState<number>(0);
  const [moviesList, setMoviesList] = useState<Movie[]>(movies);

  function filterByCategory(categories: any) {
    setCategory(categories);
    const filteredArray = movies.filter((el) => {
      if (categories.length === 0) {
        return el;
      }
      let expression = '';
      categories.forEach((e: string, index: number) => {
        expression += `el.category === '${e}'${
          index === categories.length - 1 ? '' : ' || '
        }`;
      });
      // eslint-disable-next-line no-eval
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
    const categoriesIndexed = categories.map((el: string, i: number) => {
      return { name: el, id: i };
    });

    setCategoryList(categoriesIndexed);

    setPageCount(Math.ceil(moviesList.length / perPage));
    const slice = moviesList.slice(
      perPage * currentPage,
      perPage * (currentPage + 1)
    );

    setDataPaginated(slice);
  }, [currentPage, moviesList]);

  useEffect(() => {
    // This function will be called whenever props are updated
    setMoviesList(movies);
  }, [movies]);

  const handlePageClick = (e: { selected: number }) => {
    const selectedPage = e.selected;
    setCurrentPage(selectedPage);
  };

  return (
    <div className="   relative bg-darkPurple-800 shadow 3xl:px-36">
      <div className="  flex flex-col flex-wrap items-center justify-start md:ml-10 md:flex-row 2xl:ml-40 3xl:ml-32 4xl:ml-8 4xl:ml-44">
        <h1 className="mr-10 pb-2 text-4xl font-bold text-amber-100 sm:text-5xl">
          {title}
        </h1>
        <div className="flex flex-col flex-wrap sm:flex-row ">
          <div className="">
            <Multiselect
              id="filter"
              options={categoryList}
              onSelect={(_selectedList, selectedItem) => {
                const categories = [...category, selectedItem.name];
                filterByCategory(categories);
              }}
              onRemove={(_selectedList, removedItem) => {
                const categories = category.filter(
                  (el) => el !== removedItem.name
                );
                filterByCategory(categories);
              }}
              placeholder="Genre"
              displayValue="name"
              className="  text-xl font-semibold text-amber-100"
            />
          </div>

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
          <div className="flex  flex-wrap justify-center pt-6 sm:pt-8 md:pt-12 lg:pt-6">
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
          />
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
