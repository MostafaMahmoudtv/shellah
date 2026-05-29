import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import DashboardLayout from "../layouts/DashboardLayout";

import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Statistics from "../pages/Statistics/Statistics";

import Dashboard from "../pages/Dashboard/Dashboard";
import Support from './../pages/Support/Support';
import Privacy from './../pages/Privacy/Privacy';
import Donation from './../pages/DonationConditions/Donation';
import DonationB from './../pages/DonationBenefits/DonationB';
import Contact from './../pages/Contact/Contact';
const AppRoutes = () => {
  return (
    <Routes>
      {/* صفحات الموقع */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/statistics"
          element={<Statistics />}
        />
         <Route
          path="/privacy"
          element={<Privacy />}
        />
           <Route
          path="/support"
          element={<Support />}
        />   <Route
          path="/donation-rules"
          element={<Donation />}
        />   <Route
          path="/donation-benefits"
          element={<DonationB />}
        />   <Route
          path="/contact"
          element={<Contact />}
        />
      </Route>

      {/* صفحات الداشبورد */}
      <Route
        path="/dashboard"
        element={<DashboardLayout />}
      >
        <Route index element={<Dashboard />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;