

import React from "react";

const RecentTransactions = () => {
  const transactions = [
      { icon: "💰", bgColor: "bg-yellow-100", description: "Deposit from my Card", date: "28 January 2021", amount: "-$850", amountColor: "text-red-500" },
      { icon: "📩", bgColor: "bg-blue-100", description: "Deposit Paypal", date: "25 January 2021", amount: "+$2,500", amountColor: "text-green-500" },
      { icon: "💬", bgColor: "bg-teal-100", description: "Jemi Wilson", date: "21 January 2021", amount: "+$5,400", amountColor: "text-green-500" },
      { icon: "💬", bgColor: "bg-teal-100", description: "Jemi Wilson", date: "21 January 2021", amount: "+$5,400", amountColor: "text-green-500" },
  ];

  return (
      <div>
          <h3 className="text-xl font-semibold mb-4">Recent Transactions</h3>

          <div className="bg-white p-2 rounded-2xl shadow-md max-h-60 overflow-y-auto">
              <div className="space-y-1">
                  {transactions.map((txn, index) => (
                      <div key={index} className="flex items-center justify-between p-2 ">
                          <div className="flex items-center gap-2">
                              <div className={`w-8 h-6 flex items-center justify-center rounded-full ${txn.bgColor}`}>
                                  <span className="text-xl">{txn.icon}</span>
                              </div>
                              <div>
                                  <p className="font-medium">{txn.description}</p>
                                  <p className="text-sm text-gray-500">{txn.date}</p>
                              </div>
                          </div>
                          <p className={`font-medium ${txn.amountColor}`}>{txn.amount}</p>
                      </div>
                  ))}
              </div>
          </div>
      </div>
  );
};

export default RecentTransactions;
