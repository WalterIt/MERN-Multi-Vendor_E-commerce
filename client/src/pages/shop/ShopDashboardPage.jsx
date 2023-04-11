import { useSelector } from "react-redux";
import DashboardHeader from "../../components/shop/layout/DashboardHeader";
import DashboardSidebar from "../../components/shop/layout/DashboardSidebar";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const ShopDashboardPage = () => {
  //   const { seller } = useSelector((state) => state.seller);
  //   console.log(seller);
  // const currentPath = window.location.pathname;
  const { pathname } = useLocation();
  // console.log(pathname);
  const [active, setActive] = useState();

  useEffect(() => {
    switch (pathname) {
      case "/dashboard":
        setActive(1);
        break;
      case "/dashboard/create-product":
        setActive(4);
        break;
      // case '/contact':
      //   // code to handle contact page
      //   break;
      default:
        // code to handle other routes
        break;
    }
  }, [pathname]);

  return (
    <div>
      <DashboardHeader />
      <div className="flex justify-between items-center w-full">
        <div className="w-[80px]  800px:w-[270px] ">
          <DashboardSidebar active={active} />
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default ShopDashboardPage;
