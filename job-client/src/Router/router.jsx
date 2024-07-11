// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import App from "../App";
// import JobOffer from "../pages/JobOffer";
// import Students from "../pages/Students";
// import Dashboard from "../pages/Dashboard";
// import RequestForm from "../pages/RequestForm";
// import Login from "../pages/Login";
// import Header from "../components/Header";
// import StudentForm from "../pages/StudentForm";
// import CompanyForm from "../pages/CompanyForm";
// import CompanyUpdate from "../pages/CompanyUpdate";
// import StudentUpdate from "../pages/StudentUpdate";
// import StudentSelected from "../pages/StudentSelected";
// import ResumeSubmitted from "../pages/ResumeSubmitted";
// import CompanyFormUpdate from "../pages/CompanyFormUpdate";

// const Routes = () => {
//   return (
//     <Router>
//       <App>
//         <Routes>
//           <Route path="/" element={<JobOffer />} />
//           <Route path="/candidates" element={<Students />} />
//           <Route path="/studentdetails" element={<StudentForm />} />
//           <Route path="/companydetails" element={<CompanyForm />} />
//           <Route path="/requestaccount" element={<RequestForm />} />
//           <Route path="/companyupdate" element={<CompanyUpdate />} />
//           <Route path="/studentupdate" element={<StudentUpdate />} />
//           <Route path="/Studentselected" element={<StudentSelected />} />
//           <Route path="/resumesubmitted" element={<ResumeSubmitted />} />
//           <Route path="/login" element={<Login />} />
//           <Route
//             path="/edit-job/:id"
//             element={<CompanyFormUpdate />}
//             loader={({ params }) =>
//               fetch(`http://localhost:3000/all-jobs/${params.id}`)
//             }
//           />
//         </Routes>
//       </App>
//     </Router>
//   );
// };

// export default Routes;

import {
  createBrowserRouter,
  
} from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import About from "../Pages/About";
import CreateJob from "../Pages/CreateJob";
import MyJobs from "../Pages/MyJobs";
import SalaryPage from "../Pages/SalaryPage";
import UpdateJob from "../Pages/UpdateJob";
import Login from "../Componenets/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/post-job", element: <CreateJob /> },
      { path: "/my-job", element: <MyJobs /> },
      { path: "/salary", element: <SalaryPage /> },
      {
        path: "/edit-job/:id",
        element: <UpdateJob />,
        loader: ({ params }) =>
          fetch(`https://job-portal-api-tau.vercel.app/all-jobs/${params.id}`),
      },
      { path: "/log-in", element: <Login /> },
    ],
  },
]);

export default router