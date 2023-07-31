import { Outlet } from "react-router-dom";
import { Navigation, NavigationLink } from "./SharedLayout.styled";

const SharedLayout = () => {
  return (
    <div>
      <header>
        <Navigation>
          <NavigationLink to="/">Home</NavigationLink>
          <NavigationLink to="/movies">Movies</NavigationLink>
        </Navigation>
      </header>
      <Outlet />
    </div>
  );
};

export default SharedLayout
