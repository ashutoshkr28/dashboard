// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Sidebar from './components/Sidebar';
// import Dashboard from './pages/Dashboard';
// import Settings from './pages/Settings';
// import Navbar from './components/Navbar';

// const App = () => {
//   return (
//     <Router>
//       <Navbar></Navbar>
//       <div className="flex">
//         <Sidebar />
//         <div className="flex-1 p-6">
//           <Routes>
//             <Route path="/" element={<Dashboard />} />
//             <Route path="/settings" element={<Settings />} />
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// };

// export default App;





import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';
import { useState } from 'react';
// import Accounts from './pages/Accounts';

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <Router>
    <div className="flex h-screen font-inter">
      {/* Sidebar: Collapsible on small screens */}
      <div className={`fixed inset-y-0 left-0 z-50 transition-transform duration-300 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} md:relative md:translate-x-0 md:w-64 bg-gray-900 text-white`}>
        <Sidebar  isSidebarOpen={isSidebarOpen} toggleSidebar={() => {
         
          setIsSidebarOpen(!isSidebarOpen)
        }} />
      </div>

      {/* Main Content */}
      <div className="flex flex-col flex-1 min-h-screen transition-all">
        {/* Navbar with Sidebar Toggle Button */}
        <Navbar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

        {/* Page Content */}
        <div className="">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </div>
  </Router>
  );
};

export default App;
