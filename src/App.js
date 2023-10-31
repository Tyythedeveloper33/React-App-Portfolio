import React from 'react';
// TODO: Add a comment explaining what this import statement is doing
import HelloReact from './components/HelloReact';
import { BrowserRouter as Router, Routes, Route, createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Port from './components/port';
import ContactMe from './components/contact';
import Resume from './components/resume';


// TODO: Add a comment explaining the purpose of the App component
// function App() {

    // 3️⃣ Router singleton created
  const router = createBrowserRouter([
    { path: '/', element: HelloReact},
    { path: '/portfolio', Component: Port},
    { path: '/contact', Component: ContactMe},
    { path: '/resume', Component:Resume},
    // { path: "*", Component: Root },
  ]);

  // 4️⃣ RouterProvider added
  export default function App() {
    return (
    //<RouterProvider router= {router} />;
      <Router>
        <Routes>
          <Route path='/' element={<HelloReact />} />
          <Route path='/portfolio' element={<Port />} />
          <Route path='/contact' element={<ContactMe />} />
          <Route path='/resume' element={<Resume />} />
        </Routes>
      </Router>
    )
  }

  

 






// export default App;

