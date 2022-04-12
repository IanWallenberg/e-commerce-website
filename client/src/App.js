import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
    </div>
  );
}

export default App;


// import './App.css';
// import {useState} from "react";
// import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
// // enabling routing, using paths instead of several pages (SPA)

// //SCREENS - different paths
// import HomeScreen from "../src/screens/HomeScreen";
// import ProductScreen from "../src/screens/ProductScreen";
// import CartScreen from "../src/screens/CartScreen";
// import Checkout from "../src/screens/Checkout";

// //COMPONENTS - used in any screen
// import Navbar from "./components/Navbar";
// import Backdrop from "./components/Backdrop";
// import SideDrawer from "./components/SideDrawer";

// function App() {

// const [sideToggle, setSideToggle] = useState(false);
// //updating the sidetoggle state depending on action

//   return (
//     <Router>
//      <Navbar click={() => setSideToggle(true)}/>
//      <SideDrawer show={sideToggle} click={() => setSideToggle(false)}/>
//      <Backdrop show={sideToggle} click={() => setSideToggle(false)}/>
//      {/* relevant to what will be shown if clicked */}
//     <main>
//       <Routes>
//         <Route path="/" element={<HomeScreen/>} />
//         <Route path="/product/:id" element={<ProductScreen/>} />
//         <Route path='/cart' element={<CartScreen/>} />
//         <Route path='/checkout' element={<Checkout/>} />
//       </Routes>
//     </main>
//     </Router>
//     );
//   }
 

// export default App;