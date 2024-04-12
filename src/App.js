import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AppLayout from './components/AppLayout';
import Home from './components/pages/Home';
import Aboutus from './components/pages/Aboutus';
import Contactus from './components/pages/Contactus';
import CardiologyDiagnostic from './components/pages/Diagnostic/CardiologyDiagnostic';
import OncologyDiagnostic from './components/pages/Diagnostic/OncologyDiagnostic';
import Resources from './components/pages/Resources';
import Accreditations from './components/pages/Accreditations';
import OncologyDrugs from './components/pages/OncologyDrugs';
import Biorepository from './components/pages/Biorepository';
import GeneralDiagnostic from './components/pages/Diagnostic/GeneralDiagnostic';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './App.css';
import Ourcenters from './components/pages/Ourcenters';


const App = () => {

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "aboutus",
          element: <Aboutus />,
        },
        {
          path: "ourcenters",
          element: <Ourcenters />,
        },

        {
          path: "generalDiagnostic",
          element: <GeneralDiagnostic />,
        },
        {
          path: "cardiologyDiagnostic",
          element: <CardiologyDiagnostic />,
        },
        {
          path: "OncologyDiagnostic",
          element: <OncologyDiagnostic />,
        },
        {
          path: "biorepository",
          element: <Biorepository />,
        },
        {
          path: "oncologyDrugs",
          element: <OncologyDrugs />,
        },
        {
          path: "accreditations",
          element: <Accreditations />,
        },
        {
          path: "resources",
          element: <Resources />,
        },
        {
          path: "contactus",
          element: <Contactus />,
        },




      ]



    },








  ])
  return (

    <RouterProvider router={appRouter}></RouterProvider>

  )
}

export default App;