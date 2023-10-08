import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./pages/Home/Home";
import Apropos from "./pages/Apropos/Apropos";
import Skills from "./pages/Skills/Skills";
import Portfolio from "./pages/Portfolio/Portfolio";
import Confiance from "./pages/Confiance/Confiance";
import Contact from "./pages/Contact/Contact";
import NotFound from "./components/404/404";
import Footer from "./components/Footer/Footer";
import "./index.css";

function App() {
	return (
		<>
			<BrowserRouter>
				<Sidebar />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/apropos' element={<Apropos />} />
					<Route path='/skills' element={<Skills />} />
					<Route path='/portfolio' element={<Portfolio />} />
					<Route path='/confiance' element={<Confiance />} />
					<Route path='/contact' element={<Contact />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
				{/* <Footer /> */}
			</BrowserRouter>
		</>
	);
}

export default App;
