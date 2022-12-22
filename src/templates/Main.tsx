import type { ReactNode } from 'react';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="">
    {props.meta}
    <h1>khaled tahan</h1>
    <div className="">{props.children}</div>
  </div>
);

export { Main };
