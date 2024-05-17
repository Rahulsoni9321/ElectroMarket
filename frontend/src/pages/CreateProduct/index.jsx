// components/AddProductForm.js

import { useState } from "react";
import Helmet from "react-helmet";
import Footer from "../../components/Footer";
import HomepageHeader from "../../components/HomepageHeader";

const CreateProduct = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [youtubeLink, setYoutubeLink] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("image", image);
      formData.append("price", price);
      formData.append("youtubeLink", youtubeLink);

      const response = await fetch(
        "http://localhost:3001/api/v1/admin/createproduct",
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await response.json();
      console.log(data);
      // Handle success or error
    } catch (error) {
      console.error("Error:", error);
      // Handle error
    }
  };

  return (
    <>
      <Helmet>
        <title>ElectroMarket</title>
        <meta name="description" content="" />
      </Helmet>
      <div className="flex flex-col items-center gap-10 bg-white-A700 dark:bg-gray-300 min-h-screen">
        <HomepageHeader shopOne="Sign in" className="w-full" />
        <section className="py-8 bg-white md:py-16 dark:bg-gray-800 antialiased w-full">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 w-full max-w-screen-md">
            <form
              onSubmit={handleSubmit}
              className="space-y-6 w-full"
              encType="multipart/form-data"
            >
              <div className="grid gap-6 mb-6 md:grid-cols-2 lg:grid-cols-1 w-full">
                <div className="w-full">
                  <label
                    htmlFor="image"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Image
                  </label>
                  <input
                    type="file"
                    id="image"
                    name="image"
                    accept="image/*"
                    onChange={(e) => setImage(e.target.files[0])}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>

                <div className="w-full lg:col-span-1">
                  <label
                    htmlFor="title"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>

                <div className="w-full">
                  <label
                    htmlFor="price"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Price
                  </label>
                  <input
                    type="number"
                    id="price"
                    name="price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <div className="w-full md:col-span-2 lg:col-span-1">
                  <label
                    htmlFor="description"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  ></textarea>
                </div>
              </div>
              <div className="mb-6 w-full">
                <label
                  htmlFor="youtubeLink"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  YouTube Link
                </label>
                <input
                  type="url"
                  id="youtubeLink"
                  name="youtubeLink"
                  value={youtubeLink}
                  onChange={(e) => setYoutubeLink(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Add Product
              </button>
            </form>
          </div>
        </section>
      </div>
      <Footer className="w-full" />
    </>
  );
};

export default CreateProduct;
