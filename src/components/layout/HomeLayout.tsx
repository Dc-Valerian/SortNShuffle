import { Outlet } from "react-router-dom";
import Header from "../blocks/Header";

const HomeLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default HomeLayout;
