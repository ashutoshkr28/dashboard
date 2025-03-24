import CardsSection from "../components/CardsSection";
import RecentTransactions from "../components/RecentTransactions";
import WeeklyActivityChart from "../components/WeeklyActivityChart";
import ExpenseStatistics from "../components/ExpenseStatistics";
import QuickTransfer from "../components/QuickTransfer";
import BalanceHistory from "../components/BalanceHistory";

const Dashboard = () => {
  return (
    <div className="p-2 md:p-6 bg-[#f5f7fa] w-dvw md:w-auto">
    {/* Main Content Sections */}
    <div className="flex flex-col md:flex-row gap-4 md:gap-6">
      {/* Left Column (CardsSection) */}
      <div className="w-full md:w-2/3">
        <CardsSection />
      </div>
  
      {/* Right Column (RecentTransactions) */}
      <div className="w-full md:w-1/3">
        <RecentTransactions />
      </div>
    </div>
  
    {/* Charts Section */}
    <div className="flex flex-col md:flex-row gap-4 md:gap-6 ">
      <div className="w-full md:w-2/3">
      <h1 className="text-[#343C6A] font-semibold text-[16px] md:text-[22px] mb-1.5">Weekly Activity</h1>
      <div className="bg-white p-10 rounded-3xl">
        <WeeklyActivityChart />
      </div>
      </div>
  
      <div className="w-full md:w-1/3 h-full">
      <h1 className="text-[#343C6A] font-semibold text-[16px] md:text-[22px] mb-1.5">Expense Statistics</h1>
      <div className="bg-white p-10 rounded-3xl h-full">
        <ExpenseStatistics />
      </div>
      </div>
    </div>
  
    {/* Bottom Section */}
    <div className="flex flex-col md:flex-row gap-4 md:gap-6">
      <div className="w-full md:w-1/2">
        <QuickTransfer />
      </div>
  
      <div className="w-full md:w-1/2">
        <BalanceHistory />
      </div>
    </div>
  </div>
  );
};

export default Dashboard;
