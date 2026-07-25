import Home from "./pages/Home";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Home />
      <Footer />
      <ToastContainer />
    </>
  );
}
export default App; 

