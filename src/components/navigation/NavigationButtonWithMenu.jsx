// import NavigationButton from "./NavigationButton";
// import { SubnavigationButton } from "../navigation/SubnavigationButton";
// import PropTypes from "prop-types";
// import { Link } from "react-router-dom";
// import { FaSortDown, FaSortUp } from "react-icons/fa";

// export const NavigationButtonWithMenu = ({
//   title,
//   isMenuOpen,
//   toggleMenu,
//   menuItems,
// }) => {
//   return (
//     <>
//       <NavigationButton onClick={toggleMenu}>
//         {title && (
//           <div className="flex gap-1">
//             {title} {isMenuOpen ? <FaSortUp /> : <FaSortDown />}
//           </div>
//         )}
//         {isMenuOpen && (
//           <div className="font-merriWeather absolute text-midnightGreen bg-white p-2 gap-2 mt-2 shadow-lg rounded flex flex-col w-50 text-center">
//             {menuItems.map((item, index) => (
//               <Link to={item.url} key={index}>
//                 <SubnavigationButton>{item.name}</SubnavigationButton>
//               </Link>
//             ))}
//           </div>
//         )}
//       </NavigationButton>
//     </>
//   );
// };

// NavigationButtonWithMenu.propTypes = {
//   title: PropTypes.string,
//   isMenuOpen: PropTypes.bool,
//   toggleMenu: PropTypes.func,
//   menuItems: PropTypes.array,
// };
