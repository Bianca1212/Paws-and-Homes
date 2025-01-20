// Breadcrumbs.js
import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation(); // Obținem calea curentă
  const pathnames = location.pathname.split("/").filter((x) => x); // Împărțim calea în segmente

  return (
    <nav
      aria-label="Breadcrumb"
      className="mt-20 mb-6 text-xl mx-20 font-merriWeather"
    >
      <ol className="flex text-sm text-gray-700 space-x-2">
        <li>
          <Link to="/home" className="text-blue-600 hover:text-blue-800">
            Home
          </Link>
        </li>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join("/")}`; // Creăm linkuri pentru fiecare segment
          const capitalizedValue =
            value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
          return (
            <li key={to} className="flex items-center">
              <span className="mx-2 text-gray-500">/</span>
              {index === pathnames.length - 1 ? (
                <span className="font-medium text-gray-900">
                  {capitalizedValue}
                </span> // Ultimul segment nu va fi link
              ) : (
                <Link to={to} className="text-blue-600 hover:text-blue-800">
                  {capitalizedValue}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
