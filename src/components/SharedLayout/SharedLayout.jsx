import { Outlet } from "react-router-dom";
import { Navigation, NavigationLink } from "./SharedLayout.styled";
import { Suspense } from "react";
import Loader from "components/Loader/Loader";

const SharedLayout = () => {
  return (
    <div>
      <header>
        <Navigation>
          <NavigationLink to="/">Home</NavigationLink>
          <NavigationLink to="/movies">Movies</NavigationLink>
        </Navigation>
      </header>

      <Suspense fallback={<Loader/>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default SharedLayout
