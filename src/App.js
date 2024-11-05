import Footer from "./Components/Footer/Footer";
import Nav from "./Components/Nav/Nav";
import PopularDishes from "./Components/PopularDishes/PopularDishes";
import Reservation from "./Components/Reservation/Reservation";
import Section1 from "./Components/Section1/Section1";
import SelectedItem from "./Components/SelectedItem/SelectedItem";
import Testimonials from "./Components/Testimonials/Testimonials";
import Items from '../src/items'
import HomePage from "./HomePage";
import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom";
import MenuPage from "./MenuPage";
import ContactPage from "./ContactPage";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";
import Message from "./Components/Message/Message";
import SearchItemsPage from "./SearchItemsPage";
import ReservationPage from "./ReservationPage";
import Team from "./Components/Team/Team";
import TeamPage from "./TeamPage";

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element:<HomePage />
    },
    {
      path:'/menu',
      element:<MenuPage />
    },
    {
      path: '/menu/:name',
      element: <SelectedItem />
    },
    {
      path: '/contact',
    element: <ContactPage />
    },
    {
      path:'/login',
      element:<LoginPage />
    },
    {
      path:'/signup',
      element:<SignupPage />
    },
    {
      path:'/order/:name',
      element: <Message status='order' />
    },{
      path:'/searchItems',
      element:<SearchItemsPage />
    },{
      path:'/submitted',
      element: <Message status='feedback' />
    },{
      path:'/bookTable',
      element:<Message status='booking' />
    },
    {
      path:'/reservation',
      element:<ReservationPage />
    },
    {
      path:"/ourTeam",
      element:<TeamPage />
    }
  ])
  return (
    <>
    <RouterProvider router={router} />
    </>
  );
}

export default App;
