import { ReactNode } from "react";

import Footer from "../components/Footer/Footer";
import Header from "../components/Headers/Header";
import Sidebar from "../components/SideBar/Sidebar";

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="flex">
    {props.meta}
    <Sidebar />
    <div className="w-full">
      <Header />
      <div className="h-full ">{props.children}</div>

      <Sidebar />
      <div className="w-full">
        <Header />
        <div className="h-full ">{props.children}</div>

        <Footer />
      </div>
    </div>
  </div>
);

export { Main };
