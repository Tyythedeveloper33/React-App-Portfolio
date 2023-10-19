import React from 'react';
// TODO: Add a comment explaining what this import statement is doing
import HelloReact from './components/HelloReact';
import { BrowserRouter as Router, Routes, Route, createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Port from './components/Port';
import ContactMe from './components/Contact';
import Resume from './components/resume';


// TODO: Add a comment explaining the purpose of the App component
//function App() {
    
    // 3️⃣ Router singleton created
  const router = createBrowserRouter([
    { path: '/', Component: HelloReact},
    { path: '/portfolio', Component: Port},
    { path: '/contact', Component: ContactMe},
    { path: '/resume', Component:Resume},
    // { path: "*", Component: Root },
  ]);

  // 4️⃣ RouterProvider added
  export default function App() {
    return <RouterProvider router={router} />;
  }

  // 1️⃣ Changed from App to Root
  // function Root() {
    // 2️⃣ `BrowserRouter` component removed, but the <Routes>/<Route>
    // component below are unchanged


  //   return (
  //     <>
  //     <h2>Hello React</h2>
  //       <Router>
  //         <Routes>
  //           <Route exact path="/" element={HelloReact}/>
  //           <Route path="/portfolio" element={Port} />
  //           <Route path="/contact" element={ContactMe} />
  //           <Route path="/resume" element={Resume} />
  //         </Routes>
  //       </Router>
      
  //     </>
  //   );
  // }
  






//export default App;

