import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./pages/Home/Home";
import Presentation from "./pages/Presentation/Presentation";
import Skills from "./pages/Skills/Skills";
import Projets from "./pages/Projets/Projets";
import Contact from "./pages/Contact/Contact";
import Confiance from "./pages/Confiance/Confiance";
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
					<Route path='/presentation' element={<Presentation />} />
					<Route path='/skills' element={<Skills />} />
					<Route path='/projets' element={<Projets />} />
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
