import Footer from "../components/Footer/Footer";
import Header from "../components/Headers/Header";

type Props = {
  children: React.ReactNode;
};

const Layout = (props: Props) => {
  return (
    <div className="layout">
      <Header />
      <div className="layout-content">{props.children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
