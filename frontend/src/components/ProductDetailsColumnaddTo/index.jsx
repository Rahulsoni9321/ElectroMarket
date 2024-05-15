// // import React from "react";
// import PropTypes from "prop-types";
// import { Button, RatingBar, Img } from "./..";

// export default function ProductDetailsColumnaddTo({
//   addToBasket = "Add To Basket",
//   ...props
// }) {
//   return (
//     <div
//       {...props}
//       className={`${props.className} flex flex-col items-center w-full pt-9 pb-6 gap-[23px] px-5 sm:py-5 border-gray-400_01 border border-solid rounded-[30px]`}
//     >
//       <Img
//         src="\public\Images\breadboard1.png"
//         alt="image"
//         className="h-[192px] w-full object-cover md:h-auto"
//       />
//       <div className="flex flex-col gap-2 self-stretch">
//         <div className="flex w-[61%] items-center justify-center gap-2 md:w-full">
//           <RatingBar
//             value={1}
//             isEditable={true}
//             size={18}
//             className="flex flex-1 justify-between"
//           />
//         </div>
//       </div>
//       <div className="flex flex-col items-start gap-[9px]">
//         <div className="flex flex-wrap gap-[7px]"></div>
//       </div>
//       <Button
//         shape="round"
//         className="w-full border border-solid border-black-900_02 font-inter font-medium sm:px-5"
//       >
//         {addToBasket}
//       </Button>
//     </div>
//   );
// }

// ProductDetailsColumnaddTo.propTypes = {
//   buttontext1: PropTypes.string,
//   text1: PropTypes.string,
//   text2: PropTypes.string,
//   addToBasket: PropTypes.string,
//   className: PropTypes.string,
// };
