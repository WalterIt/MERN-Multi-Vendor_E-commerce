import React, { useState } from "react";
import styles from "../../styles/styles";
import { Link } from "react-router-dom";
import { productData } from "../../static/data";
import { AiOutlineSearch } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState(null);

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    const filteredProducts =
      productData &&
      productData.filter((product) =>
        product.name.toLowerCase().includes(term.toLowerCase())
      );

    setSearchData(filteredProducts);
  };

  return (
    <div className={`${styles.section}`}>
      <div className="hidden 800px:h-[50px] 800px:my-[20px] 800px:flex  items-center justify-between">
        <div>
          <Link to="/">
            <img
              src="https://shopo.quomodothemes.website/assets/images/logo.svg"
              alt="logo"
            />
          </Link>
        </div>
        <div className="w-[50%] relative">
          <input
            type="text"
            placeholder="Search Product..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="h-[40px] w-full px-2 border-[#3957db] border-[2px] rounded-sm"
          />
          <AiOutlineSearch
            size={30}
            className="absolute right-2 top-1.5 cursor-pointer"
          />
          {searchData && searchData !== 0 ? (
            <div className="absolute min-h-[30vh] bg-slate-50 shadow-sm-2 z-[9] p-4">
              {searchData &&
                searchData.map((item, i) => {
                  const data = item.name;

                  const productName = data.replace(/\s+/g, "-");

                  return (
                    <Link to={`/product/${productName}`}>
                      <div className="w-full flex items-start-py-3">
                        <img
                          src={item.image_Url[0].url}
                          alt={data}
                          className="w-[40px] h-[40px] mr-[10px]"
                        />
                        <h1>{data}</h1>
                      </div>
                    </Link>
                  );
                })}
            </div>
          ) : null}
        </div>
        <div className={`${styles.button}`}>
          <Link to="/seller">
            <h1 className="text-[#fff] flex items-center">
              Become a Seller <IoIosArrowForward className="ml-1" />
            </h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
