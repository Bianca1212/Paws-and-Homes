import NavigationButton from "./NavigationButton";
import { SubnavigationButton } from "../navigation/SubnavigationButton";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const NavigationButtonWithMenu = ({
  title,
  isMenuOpen,
  toggleMenu,
  menuItems,
}) => {
  return (
    <>
      <NavigationButton onClick={toggleMenu}>
        {title}
        {isMenuOpen && (
          <div className="absolute font-josefin text-lowesBlue bg-white p-2 gap-2 mt-2 shadow-lg rounded flex flex-col w-50">
            {menuItems.map((item, index) => (
              <Link to={item.url} key={index}>
                <SubnavigationButton>{item.name}</SubnavigationButton>
              </Link>
            ))}
          </div>
        )}
      </NavigationButton>
    </>
  );
};

NavigationButtonWithMenu.propTypes = {
  title: PropTypes.string,
  isMenuOpen: PropTypes.func,
  toggleMenu: PropTypes.func,
  menuItems: PropTypes.array,
};
