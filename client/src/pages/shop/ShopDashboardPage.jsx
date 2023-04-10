import { useSelector } from "react-redux";
import DashboardHeader from "../../components/shop/layout/DashboardHeader";
import DashboardSidebar from "../../components/shop/layout/DashboardSidebar";

const ShopDashboardPage = () => {
  //   const { seller } = useSelector((state) => state.seller);
  //   console.log(seller);

  return (
    <div>
      <DashboardHeader />
      <div className="flex justify-between items-center w-full">
        <div className="w-[80px]  800px:w-[270px] ">
          <DashboardSidebar active={1} />
        </div>
      </div>
    </div>
  );
};

export default ShopDashboardPage;
