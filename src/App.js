
// import './App.css';
// import React,{Suspense, lazy} from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from "./components/Home";
// import About from "./components/About";
// import Contact from "./components/Contact";
// import Cources from "./components/Cources";
//  import Library from "./components/Library";
// import Events from "./components/Events";
// import Quiz from "./components/Quiz";
// import Chatbot from "./components/Chatbot";
// // import Education from "./components/Education";
// import Curricular from "./components/Curricular";
// function App() {
//   return (
//     <Router>
//       <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/Cources" element={<Cources />} /> 
//           <Route path="/Library" element={<Library />} />
//           <Route path="/Events" element={<Events />} />
//           {/* <Route path="/Education" element={<Education />} /> */}
//           <Route path="/Chatbot" element={<Chatbot />} /> 
//           <Route path="/Quiz" element={<Quiz />} />
//           <Route path="/Curricular" element={<Curricular />} /> 
//       </Routes>
//     </Router>
//   );
// }

// export default App;



import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Home = lazy(() => import("./components/Home"));
const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));
const Cources = lazy(() => import("./components/Cources"));
const Library = lazy(() => import("./components/Library"));
const Events = lazy(() => import("./components/Events"));
const Quiz = lazy(() => import("./components/Quiz"));
const Abled = lazy(() => import("./components/Abled"));
const Chatbot = lazy(() => import("./components/Chatbot"));
const Curricular = lazy(() => import("./components/Curricular"));


function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Cources" element={<Cources />} /> 
          <Route path="/Library" element={<Library />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/Chatbot" element={<Chatbot />} /> 
          <Route path="/Quiz" element={<Quiz />} />
          <Route path="/Curricular" element={<Curricular />} /> 
          <Route path="/Abled" element={<Abled />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
