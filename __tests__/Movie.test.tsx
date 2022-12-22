import { render } from '@testing-library/react';

import MovieCard from '@/components/movie-card';

// The easiest solution to mock `next/router`: https://github.com/vercel/next.js/issues/7479
// The mock has been moved to `__mocks__` folder to avoid duplication
const movie = {
  id: '8',
  title: 'Seven',
  category: 'Thriller',
  thumbnail: '8.jpg',
  likes: 2,
  dislikes: 1,
};

describe('Index page', () => {
  describe('Multi slect filter', () => {
    it('Allow the user to select multiple options from the filter', () => {
      const { getByText, getByAltText, getByTestId } = render(
        <MovieCard movie={movie} />
      );
      expect(getByText(movie.title)).toBeInTheDocument();
      expect(getByText(movie.category)).toBeInTheDocument();
      expect(getByText(movie.likes)).toBeInTheDocument();
      expect(getByText(movie.dislikes)).toBeInTheDocument();

      // Open the dropdown list of options
      // console.log('tttttttt', screen.getByTestId('filter'));
      // fireEvent.click(getByTestId('filter'));
      // fireEvent.click(getByTestId('filter'));
    });
  });
});
