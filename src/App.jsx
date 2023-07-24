import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/home/Home";
// import Header from "./components/header/Header";
// import Hero from "./components/hero/Hero";
import Camping from "./components/camping/Camping";
// import Explore from "./components/explore/Explore";
import Why from "./components/why/Why";
import Clients from "./components/clients/Clients";
// import Footer from "./components/footer/Footer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Destination from "./pages/destinations/Destination";
import Services from "./pages/services/Services";
import AboutUs from "./pages/aboutUs/AboutUs";
import ContactUs from "./pages/contactUs/ContactUs";
import LogIn from "./pages/logIn/LogIn";
import Signup from "./pages/Signup/Signup";
function App() {
  const pages = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/Destination",
      element: <Destination />,
    },
    {
      path: "/Services",
      element: <Services />,
    },
    {
      path: "/About",
      element: <AboutUs />,
    },
    {
      path: "/Contact",
      element: <ContactUs />,
    },
    {
      path: "/LogIn",
      element: <LogIn />,
    },
    {
      path: "/SignUp",
      element: <Signup />,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={pages} />
    </div>
  );
}

export default App;
