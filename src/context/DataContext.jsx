// contexts/GlobalDataContext.js
import { createContext, useContext, useState, useCallback } from 'react';

const GlobalDataContext = createContext();

export const GlobalDataProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    image:'https://randomuser.me/api/portraits/women/44.jpg',
    name: 'Ashutosh Kumar',
    email: 'ashutoshkumar@gmail.com',
    dob: '28 December 1999',
    permanentAddress: 'Bhopal, Madhya Pradesh',
    postalCode: '45962',
    username: 'Ashutosh Kumar',
    password: '********',
    presentAddress: 'Bhopal, Madhya Pradesh',
    city: 'Bhopal',
    country: 'INDIA',
  });

  const updateUserData = useCallback((field, value) => {
    setUserData(prev => ({
      ...prev,
      [field]: value
    }));
  }, []);
  const updateAllData=(data)=>{
    setUserData(data)

  }

  return (
    <GlobalDataContext.Provider value={{ userData, updateUserData ,updateAllData}}>
      {children}
    </GlobalDataContext.Provider>
  );
};

export const useGlobalData = () => {
  const context = useContext(GlobalDataContext);
  if (!context) {
    throw new Error('useGlobalData must be used within a GlobalDataProvider');
  }
  return context;
};