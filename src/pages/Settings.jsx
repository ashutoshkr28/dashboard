import { useState } from 'react';
import { FaCamera } from 'react-icons/fa';
import { useGlobalData } from '../context/DataContext';

const Settings = () => {
  const { userData, updateUserData,updateAllData } = useGlobalData();
  const [profileData, setProfileData] = useState({
...userData
  });

  const handleChange = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  const changeUserImage=(e)=>{
    const file = e.target.files[0]; 
    
    if (!file) return; 
  
    const imageUrl = URL.createObjectURL(file);
     setProfileData({...profileData, image:imageUrl})

  }
  const saveInfo=()=>{
    updateAllData(profileData);
  }

  return (
    <div className="p-5 bg-gray-100 min-h-screen">
      <div className="bg-white  shadow-md rounded-3xl p-5">
        {/* Tabs Section */}
        <div className="flex border-b mb-6">
          <button className="py-2 px-4 border-b-2 border-black font-semibold">
            Edit Profile
          </button>
          <button className="py-2 px-4 text-gray-500">Preferences</button>
          <button className="py-2 px-4 text-gray-500">Security</button>
        </div>
        <div className='flex flex-col justify-center items-center md:items-start md:flex-row w-full gap-10 pt-3.5'>

          <div className="">
            <div className="relative m-auto md:m-0">
              <div className='relative w-24 h-24'>

              <img
                src={profileData.image}
                alt="Profile"
                className=" rounded-full "
              />
              <label htmlFor="profile-pic" className="absolute bottom-1 right-1 bg-black text-white p-2 rounded-full cursor-pointer h-[30px] w-[30px]">
               <input type='file' name='profile-pic' id='profile-pic' onChange={changeUserImage} className='hidden'/>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.587 4.16321L13.2365 5.51379C13.0988 5.65149 12.8761 5.65149 12.7384 5.51379L9.48646 2.26184C9.34876 2.12415 9.34876 1.90149 9.48646 1.76379L10.837 0.413208C11.3849 -0.134644 12.2755 -0.134644 12.8263 0.413208L14.587 2.17395C15.1378 2.7218 15.1378 3.61243 14.587 4.16321ZM8.3263 2.92395L0.632942 10.6173L0.0118485 14.1769C-0.0731124 14.6573 0.345833 15.0734 0.826302 14.9913L4.38587 14.3673L12.0792 6.67395C12.2169 6.53626 12.2169 6.3136 12.0792 6.1759L8.82728 2.92395C8.68665 2.78626 8.464 2.78626 8.3263 2.92395ZM3.63587 9.95813C3.47474 9.797 3.47474 9.53918 3.63587 9.37805L8.14759 4.86633C8.30872 4.7052 8.56654 4.7052 8.72767 4.86633C8.8888 5.02747 8.8888 5.28528 8.72767 5.44641L4.21595 9.95813C4.05482 10.1193 3.797 10.1193 3.63587 9.95813ZM2.57825 12.422H3.9845V13.4855L2.09486 13.8165L1.18372 12.9054L1.51478 11.0157H2.57825V12.422Z" fill="white" />
                </svg>

              </label>
              </div>
              <input
                type="file"
                id="profile-pic"
                className="hidden"
              />
            </div>


          </div>


          {/* <div>
            <h2 className="text-lg font-semibold">{profileData.name}</h2>
            <p className="text-sm text-gray-500">{profileData.email}</p>
          </div> */}
          <div className="grid md:grid-cols-2 gap-4 w-full">
            {Object.entries(profileData).map(([key, value]) => (
              <>
              {
                key==='image'?'':<>
                
                <div key={key} className="flex flex-col">
                <label className="text-sm text-[rgba(35, 35, 35, 1)] capitalize mb-1 text-[16px]">{key.replace(/([A-Z])/g, ' $1')}</label>
                <input
                  type="text"
                  name={key}
                  value={value}
                  onChange={handleChange}
                  className="border border-[rgba(230,239,245,1)] rounded-2xl p-3 outline-none text-[#718EBF] placeholder-[#718EBF]/50"
                />
              </div>
                </>
              }
              
              </>
            ))}
          </div>


        </div>





        <div className="flex justify-end mt-6">
          <button onClick={saveInfo} className="bg-black text-white px-16 py-2 rounded-2xl hover:bg-gray-800 w-full sm:w-auto">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
