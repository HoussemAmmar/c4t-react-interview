import { useRouter } from "next/router";

import { Meta } from "@/layouts/Meta";
import { Main } from "@/templates/Main";
import CoverMovie from "@/components/cover-movie";

const Index = () => {
  return (
    <Main
      meta={<Meta title="c4t react interview" description="Next js test" />}
    >
      <CoverMovie />
      design-landing-suggested-movie
      <div className="shadow bg-darkPurple-800"></div>
    </Main>
  );
};

export default Index;
