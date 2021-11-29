import { ReactNode } from "react";

import Footer from "../components/Footer/Footer";
import Header from "../components/Headers/Header";
import Sidebar from "../components/SideBar/Sidebar";

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="grad flex min-h-screen">
    {props.meta}

    <Sidebar />
    <div className="w-full">
      <Header />
      {props.children}

      <Footer />
    </div>
  </div>
);

export { Main };
