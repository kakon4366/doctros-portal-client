import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/About/About";
import Appointment from "./Pages/Appointment/Appointment";
import Home from "./Pages/Home/Home";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Header from "./Pages/Shared/Header/Header";
import Reviews from "./Pages/Reviews/Reviews";
import Login from "./Pages/Login/Login";
import NotFound404 from "./Pages/Shared/NotFound404/NotFound404";
import Footer from "./Pages/Shared/Footer/Footer";
import SignUp from "./Pages/SignUp/SignUp";
import RequireAuth from "./Pages/Login/RequireAuth";
import ResetPassword from "./Pages/Login/ResetPassword";

function App() {
	return (
		<>
			<Header></Header>

			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/home" element={<Home />}></Route>
				<Route path="/about" element={<About />}></Route>
				<Route
					path="/appointment"
					element={
						<RequireAuth>
							<Appointment />
						</RequireAuth>
					}
				></Route>
				<Route path="/reviews" element={<Reviews />}></Route>
				<Route path="/contact-us" element={<ContactUs />}></Route>
				<Route path="/login" element={<Login />}></Route>
				<Route path="/sign-up" element={<SignUp />}></Route>
				<Route path="/reset-password" element={<ResetPassword />}></Route>
				<Route path="*" element={<NotFound404 />}></Route>
			</Routes>

			<Footer></Footer>
		</>
	);
}

export default App;
