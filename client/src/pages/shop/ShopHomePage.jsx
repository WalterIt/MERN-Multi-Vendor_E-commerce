import styles from "../../styles/styles";
import ShopInfo from "../../components/Shop/ShopInfo";
import ShopProfileData from "../../components/Shop/ShopProfileData";

const ShopHomePage = () => {
  return (
    <div className={`${styles.section} bg-[#f5f5f5] `}>
      <div className="w-full flex justify-between py-10">
        <div className="w-[25%] bg-white rounded shadow-sm  h-auto sticky top-10 left-0 z-10 ">
          <ShopInfo isOwner={true} />
        </div>
        <div className="w-[72%] rounded ">
          <ShopProfileData isOwner={true} />
        </div>
      </div>
    </div>
  );
};

export default ShopHomePage;