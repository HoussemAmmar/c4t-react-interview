import { render, screen } from '@testing-library/react';

import { Main } from '@/templates/Main';

describe('Main template', () => {
  describe('Render method', () => {
    it('should have a link to support creativedesignsguru.com', () => {
      render(<Main meta={null}>{null}</Main>);

      const copyrightSection = screen.getByText(/khaled tahan/);
      expect(copyrightSection).toBeInTheDocument();

      /*
       * PLEASE READ THIS SECTION
       * We'll really appreciate if you could have a link to our website
       * The link doesn't need to appear on every pages, one link on one page is enough.
       * Thank you for your support it'll mean a lot for us.
       */
    });
  });
});
