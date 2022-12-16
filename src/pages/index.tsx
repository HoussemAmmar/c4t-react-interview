import { useRouter } from "next/router";

import { Meta } from "@/layouts/Meta";
import { Main } from "@/templates/Main";
import CoverMovie from "@/components/cover-movie";
import MovieCard from "@/components/movie-card";

const Index = () => {
  return (
    <Main
      meta={<Meta title="c4t react interview" description="Next js test" />}
    >
      <CoverMovie />
      <div className="shadow bg-darkPurple-800 px-28">
        <MovieCard />
      </div>
    </Main>
  );
};

export default Index;
