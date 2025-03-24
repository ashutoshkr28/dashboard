import { useState } from 'react';
import chip from '../assets/chip.png'
const CardsSection = () => {
  const [isVisible,setIsVisible]=useState(false)
  const cards = [
    {
      balance: "$5,756",
      holder: "Eddy Cusuma",
      number: "3778 8965 7853 1234",
      expiry: "12/22",
      mode:'dark',
      theme: "bg-gradient-to-r from-[#5B5A6F] to-[#000000] text-white", // Dark card
    },
    {
      balance: "$5,756",
      holder: "Eddy Cusuma",
      number: "3778 3467 6709 1234",
      expiry: "12/22",
      mode:'light',
      theme: "bg-white text-black border border-gray-300", // Light card
    },
  ];

  const formatCardNumber=(cardNumber)=>{
  const cleanNumber = cardNumber.replace(/\s+/g, ""); 
  const firstFour = cleanNumber.slice(0, 4);
  const lastFour = cleanNumber.slice(-4);
  const maskedMiddle = "*".repeat(cleanNumber.length - 8)
    .replace(/(.{4})/g, "$1 ");

  return `${firstFour} ${maskedMiddle} ${lastFour}`.trim();


  }

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold">My Cards</h3>
        <button onClick={()=>{
          setIsVisible(!isVisible)
        }} className="text-blue-500 hover:underline cursor-pointer">See All</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`rounded-3xl ${card.theme} shadow-md`}
          >
            <div className="flex justify-between items-center p-4">
              <div>
                <p className="text-sm">Balance</p>
                <span className="text-2xl">{card.balance}</span>
              </div>

              <div>
                <img className={`h-8 ${card.mode==='light'?'invert':''}`} src={chip} />

              </div>
            </div>
            <div className='w-[80%] flex justify-between items-center p-4'>


              <div>
                <span className='text-xs opacity-70'>CARD HOLDER </span>
                <p className="font-medium text-sm">{card.holder}</p>
              </div>
              <div className=''>
                <span className='text-xs opacity-70'>VALID THRU </span>
                <p className="text-sm mt-2">{card.expiry}</p>
              </div>
            </div>
            <div className='p-4 relative'>
              <div className='flex justify-between items-center '>
              <p className="mt-2 tracking-widest text-[22px]">{isVisible ?card?.number :formatCardNumber(card.number)}</p>

              <div className='h-[30px] w-[44px] relative'>

                <div className={`rounded-full ${ card.mode==='light'?'bg-gray-500':'bg-white'}  opacity-50 h-[30px] w-[30px] absolute right-[50%]`}></div>
                <div className={`rounded-full ${ card.mode==='light'?'bg-gray-500':'bg-white'} opacity-50 h-[30px] w-[30px] absolute left-[20%]`}></div>
              </div>


              </div>

              <div className={`absolute bg-gradient-to-r from-[rgba(255,255,255,1)] to-[rgba(255,255,255,0)] opacity-20  w-full h-full top-0 left-0 z-50 ${card.mode==='light'?'border-t':''}`}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardsSection;

