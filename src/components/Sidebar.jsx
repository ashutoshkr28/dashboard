














import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaMoneyBillWave, FaUser, FaCreditCard, FaTools, FaCog, FaTimes, FaBars } from 'react-icons/fa';

const Sidebar = ({ isSidebarOpen ,toggleSidebar}) => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { name: 'Dashboard', path: '/', icon: <FaHome /> },
    { name: 'Transactions', path: '/transactions', icon: <FaMoneyBillWave /> },
    { name: 'Accounts', path: '/accounts', icon: <FaUser /> },
    { name: 'Investments', path: '/investments', icon: <FaCreditCard /> },
    { name: 'Credit Cards', path: '/credit-cards', icon: <FaCreditCard /> },
    { name: 'Loans', path: '/loans', icon: <FaMoneyBillWave /> },
    { name: 'Services', path: '/services', icon: <FaTools /> },
    { name: 'My Privileges', path: '/privileges', icon: <FaCreditCard /> },
    { name: 'Setting', path: '/settings', icon: <FaCog /> },
  ];

  return (
    <>
    
      <div
        className={`fixed lg:relative lg:translate-x-0 z-40 bg-white min-h-screen w-64 border-r-2 border-r-[rgba(230,239,245,1)] transform transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
      >
    
        <div className="p-4">
          <h1 className="text-2xl text-black font-bold mb-6">Soar Task</h1>
          <nav className="space-y-3">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-4 p-3 rounded-lg transition-colors ${isActive
                    ? 'bg-gray-100 text-black font-semibold'
                    : 'text-gray-500 hover:bg-gray-50 hover:text-gray-700'
                  }`
                }
                onClick={toggleSidebar} // Close sidebar on mobile after click
              >
                <span className="text-xl">{item.icon}</span>
                <span className="text-sm">{item.name}</span>
              </NavLink>
            ))}
                <button onClick={toggleSidebar} className='block md:hidden absolute top-0 right-0 text-black  p-4 rounded-lg 
        '>X</button>
          </nav>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 lg:hidden"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
};

export default Sidebar;