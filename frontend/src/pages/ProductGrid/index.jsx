// import React from "react";
import Footer from "../../components/Footer";
import { Helmet } from "react-helmet";
import HomepageHeader from "../../components/HomepageHeader";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";


function FeaturedProducts() {

  const [allproductdetails,setallproductdetails] = useState([]);

  useEffect(()=>{
     async function getallProducts() {
           const response = await axios.get('http://localhost:3001/api/v1/product/bulk')
           setallproductdetails(response.data.allproducts);
     }
     getallProducts();
  },[])


  if (!allproductdetails) {
    return <div>Loading....</div>
  }

  
  return (
    <>
      <Helmet>
        <title>ElectroMarket</title>
        <meta name="description" content="" />
      </Helmet>
      <section className="py-12 bg-white sm:py-16 lg:py-20 dark:bg-gray-800">
        <HomepageHeader shopOne="Sign in" className="self-stretch" />
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold dark:text-white sm:text-3xl">
              Our Featured Items
            </h2>
            <p className="mt-4 text-base font-normal leading-7 text-gray-600 dark:text-gray-400">
              Explore our wide range of high-quality electrical products,
              carefully selected to meet all your needs.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 mt-10 lg:mt-16 lg:gap-4 lg:grid-cols-4">
          {allproductdetails.map((details)=>{
              return  <Link to={`/aboutproduct?id=${details.id}`}>
              <div className="relative group">
                <div className="overflow-hidden aspect-w-1 aspect-h-1">
                  <img
                    className="object-cover w-full h-full transition-all duration-300 group-hover:scale-125"
                    src={`http://localhost:3001/${details.ImageLink}`}
                    alt=""
                  />
                </div>
                <div className="flex items-start justify-between mt-4 space-x-4">
                  <div>
                    <h3 className="text-xs font-bold dark:text-white sm:text-sm md:text-base">
                      <a href="#" title="">
                       {details.Title}
                        <span
                          className="absolute inset-0"
                          aria-hidden="true"
                        ></span>
                      </a>
                    </h3>
                    <div className="flex items-center mt-2.5 space-x-px">
                      <svg
                        className="w-3 h-3 text-yellow-400 sm:w-4 sm:h-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg
                        className="w-3 h-3 text-yellow-400 sm:w-4 sm:h-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg
                        className="w-3 h-3 text-yellow-400 sm:w-4 sm:h-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg
                        className="w-3 h-3 text-yellow-400 sm:w-4 sm:h-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg
                        className="w-3 h-3 text-yellow-400 sm:w-4 sm:h-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                  </div>
  
                  <div className="text-right">
                    <p className="text-xs font-bold dark:text-white sm:text-sm md:text-base">
                    Rs. {details.Price}
                    </p>
                  </div>
                </div>
              </div>
              </Link>
          })}  
         
            

            
          </div>
        </div>
        
        
      </section>
      <Footer className="self-stretch" />
    </>
  );
}

export default FeaturedProducts;
