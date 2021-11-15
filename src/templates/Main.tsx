import { ReactNode } from 'react';

import Sidebar from '../pages/sidebar';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="flex ">
    {props.meta}
    <Sidebar />
    {/* <Header /> */}
    <div className="w-full ">
      {' '}
      <div className=" h-full text-xl content p-16 ">{props.children}</div>
    </div>
  </div>
);

export { Main };
