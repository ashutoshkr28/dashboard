import { FaRegCreditCard } from 'react-icons/fa';

const MyCards = () => {
  const cards = [
    {
      balance: '$5,756',
      holder: 'Eddy Cusuma',
      cardNumber: '3778 **** **** 1234',
      expiry: '12/22'
    },
    {
      balance: '$3,450',
      holder: 'Eddy Cusuma',
      cardNumber: '3778 **** **** 5678',
      expiry: '08/25'
    }
  ];

  return (
    <div className="p-4 bg-white rounded-2xl shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">My Cards</h2>
        <button className=" hover:underline">See All</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-slate-800 to-slate-700 text-white p-4 rounded-xl relative"
          >
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm">Balance</p>
                <h3 className="text-2xl font-bold">{card.balance}</h3>
              </div>
              <FaRegCreditCard size={30} />
            </div>
            <div className="mt-4">
              <p className="text-sm">CARD HOLDER</p>
              <p className="font-semibold">{card.holder}</p>
              <p className="text-sm mt-2">VALID THRU</p>
              <p className="font-semibold">{card.expiry}</p>
              <p className="mt-2 text-sm">{card.cardNumber}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCards;
