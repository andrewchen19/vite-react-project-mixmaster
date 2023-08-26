import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Loading from "./Loading";

const Layout = () => {
  // Global loading indicators
  const navigation = useNavigation();
  // console.log(navigation);
  const isLoading = navigation.state === "loading";

  // Global context
  const value = "excellent";

  return (
    <>
      <Navbar />
      <section className="page">
        {isLoading ? <Loading /> : <Outlet context={{ value }} />}
      </section>
    </>
  );
};

export default Layout;
