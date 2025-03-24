import React, { useState } from "react";

const QuickTransfer = () => {
  const [amount, setAmount] = useState("");

  const contacts = [
    { name: "Livia Bator", role: "CEO", img: "https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/people19.png" },
    { name: "Randy Press", role: "Director", img: "https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/people19.png" },
    { name: "Workman", role: "Designer", img: "https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/people19.png" },
  ];

  const handleSend = () => {
    if (amount && !isNaN(amount) && Number(amount) > 0) {
      alert(`Amount of $${amount} sent successfully!`);
      setAmount("");
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-full max-w-md mx-auto">

      <div className="flex gap-4 mb-4 flex-wrap">
        {contacts.map((contact, index) => (
          <div key={index} className="flex flex-col items-center w-[30%]">
            <img
              src={contact.img}
              alt={contact.name}
              className="w-12 h-12 rounded-full mb-2"
            />
            <p className={`font-medium text-sm ${index === 0 ? 'font-bold' : ''}`}>{contact.name}</p>
            <p className="text-xs text-gray-500">{contact.role}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center">
        <span className="text-[#718EBF]">Write Amount</span>
        <div className="bg-[#EDF1F7] p-2 pl-10 pr-0 rounded-4xl flex justify-between items-center w-full max-w-[250px]">
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="525.25"
            className="bg-transparent w-full outline-none"
          />
          <button
            onClick={handleSend}
            className={`bg-[#232323] p-2 text-white flex justify-between px-5 rounded-3xl gap-1.5 items-center ${!amount ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={!amount}
          >
            Send
            <svg className="h-5 w-5" viewBox="0 0 26 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M25.9824 0.923369C26.1091 0.333347 25.5307 -0.164153 24.9664 0.0511577L0.490037 9.39483C0.195457 9.50731 0.000610804 9.78965 1.43342e-06 10.105C-0.000607937 10.4203 0.193121 10.7034 0.487294 10.817L7.36317 13.4726V21.8369C7.36317 22.1897 7.60545 22.4963 7.94873 22.5779C8.28972 22.659 8.64529 22.4967 8.80515 22.1796L11.6489 16.5364L18.5888 21.6868C19.011 22.0001 19.6178 21.8008 19.7714 21.2974C26.251 0.0528342 25.9708 0.97674 25.9824 0.923369ZM19.9404 3.60043L8.01692 12.092L2.88664 10.1106L19.9404 3.60043ZM8.8866 13.3428L19.2798 5.94118C10.3366 15.3758 10.8037 14.8792 10.7647 14.9317C10.7067 15.0096 10.8655 14.7058 8.8866 18.6327V13.3428ZM18.6293 19.8197L12.5206 15.2862L23.566 3.63395L18.6293 19.8197Z" fill="white" />
            </svg>
          </button>
        </div>
      </div>

      {amount && (
        <p className="mt-4 text-green-600 font-medium">Amount Entered: ${amount}</p>
      )}
    </div>
  );
};

export default QuickTransfer;
