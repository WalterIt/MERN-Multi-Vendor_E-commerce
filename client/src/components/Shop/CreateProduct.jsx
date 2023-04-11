import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { categoriesData } from "../../static/data";
import { AiOutlinePlusCircle } from "react-icons/ai";

const CreateProduct = () => {
  const { seller } = useSelector((state) => state.seller);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [images, setImages] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [tags, setTags] = useState("");
  const [originalPrice, setOriginalPrice] = useState();
  const [discountPrice, setDiscountPrice] = useState();
  const [stock, setStock] = useState();

  //create a function handleImagesUpload
  const handleImagesUpload = (e) => {
    e.preventDefault();
    let files = Array.from(e.target.files);
    setImages((prevImages) => [...prevImages, ...files]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "CREATE_PRODUCT",
      payload: {
        name,
        description,
        category,
        tags,
        images,
        originalPrice,
        discountPrice,
        stock,
      },
    });
    // navigate("/seller/products");
  };

  return (
    <div className="w-[90%] 800px:w-[60%] bg-white shadow h-[90vh] overflow-y-scroll rounded-[4px] p-3  ">
      <h5 className="text-[30px] font-Popins text-center ">Create Product</h5>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="" className="py-2">
            Name <span className="text-red-500 font-extrabold">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-2 appearance-none block w-full mb-3 px-3 h-9 border border-gray-300 rounded placeholder-gray-400 focus:outline-none focus:ring-blue-500 sm:text-sm  "
            placeholder="Enter your Product Name"
          />
        </div>

        <div>
          <label htmlFor="" className="py-2">
            Description <span className="text-red-500 font-extrabold">*</span>
          </label>
          <input
            type="text"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-2 appearance-none block w-full mb-3 px-3 h-9 border border-gray-300 rounded placeholder-gray-400 focus:outline-none focus:ring-blue-500 sm:text-sm  "
            placeholder="Enter your Product Description"
          />
        </div>
        <div>
          <label htmlFor="" className="py-2">
            Category<span className="text-red-500 font-extrabold">*</span>
          </label>
          <select
            name=""
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full mt-2 mb-3 border h-9 rounded  "
          >
            <option value="Choose a Category">Choose a Category</option>
            {categoriesData &&
              categoriesData.map((item, i) => (
                <option key={i} value={item.title}>
                  {item.title}
                </option>
              ))}
          </select>
        </div>
        <div>
          <label htmlFor="" className="py-2">
            Tags
          </label>
          <input
            type="text"
            name="tags"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            className="mt-2 appearance-none block w-full mb-3 px-3 h-9 border border-gray-300 rounded placeholder-gray-400 focus:outline-none focus:ring-blue-500 sm:text-sm  "
            placeholder="Enter your Product Tags..."
          />
        </div>
        <div>
          <label htmlFor="" className="py-2">
            Original Price
          </label>
          <input
            type="number"
            name="originalPrice"
            value={originalPrice}
            onChange={(e) => setOriginalPrice(e.target.value)}
            className="mt-2 appearance-none block w-full mb-3 px-3 h-9 border border-gray-300 rounded placeholder-gray-400 focus:outline-none focus:ring-blue-500 sm:text-sm  "
            placeholder="Enter your Product Price..."
          />
        </div>

        <div>
          <label htmlFor="" className="py-2">
            Price (With Discount)
            <span className="text-red-500 font-extrabold">*</span>
          </label>
          <input
            type="number"
            name="discountPrice"
            value={discountPrice}
            onChange={(e) => setDiscountPrice(e.target.value)}
            className="mt-2 appearance-none block w-full mb-3 px-3 h-9 border border-gray-300 rounded placeholder-gray-400 focus:outline-none focus:ring-blue-500 sm:text-sm  "
            placeholder="Enter your Product Price with Discount..."
          />
        </div>

        <div>
          <label htmlFor="" className="py-2">
            Product Stock<span className="text-red-500 font-extrabold">*</span>
          </label>
          <input
            type="number"
            name="stock"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            className="mt-2 appearance-none block w-full mb-3 px-3 h-9 border border-gray-300 rounded placeholder-gray-400 focus:outline-none focus:ring-blue-500 sm:text-sm  "
            placeholder="Enter your Product Stock..."
          />
        </div>

        <div>
          <label htmlFor="" className="py-2">
            Upload Images<span className="text-red-500 font-extrabold">*</span>
          </label>
          <input
            type="file"
            name=""
            id="upload"
            multiple
            onChange={handleImagesUpload}
            className="hidden "
          />
          <div className="w-full flex items-center mb-3 flex-wrap">
            <label htmlFor="upload">
              <AiOutlinePlusCircle
                size={30}
                className="mt-3 cursor-pointer"
                color="#555"
              />
            </label>
            {images &&
              images.map((img, i) => (
                <img
                  key={i}
                  src={URL.createObjectURL(img)}
                  className="w-[120px] h-[120px] object-cover m-2"
                  alt=""
                />
              ))}
          </div>
          <div>
            <input
              type="submit"
              value="Add Product"
              className="mt-2 appearance-none bg-black text-white font-bold tracking-widest block w-full mb-3 px-3 h-9 border border-gray-300 rounded placeholder-gray-400 focus:outline-none focus:ring-blue-500 sm:text-sm cursor-pointer "
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateProduct;
