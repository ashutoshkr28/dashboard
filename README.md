 Financial Dashboard Application

 Overview
This is a **Financial Dashboard Application** built using **React.js (with Vite), Context API, TailwindCSS, React Router, and Chart.js**. The application provides an overview of financial activities, card details, recent transactions, and interactive statistics. It is fully responsive and adapts to different screen sizes.

 Features
 Dashboard Page
1. My Cards Section
   - Displays multiple card details (balance, cardholder name, and masked card number)
   - "See All" button for full card list view

2. Recent Transactions
   - List of recent transactions with an icon, description, date, and amount

3. Weekly Activity Chart
   - Bar chart visualizing daily deposits and withdrawals for the week

4. Expense Statistics
   - Pie chart breaking down expenses into categories (Entertainment, Bills, Investments, Others)

5. Quick Transfer
   - List of frequent transfer contacts with profile pictures and names
   - Input field for transfer amount (UI only)

6. Balance History Chart
   - Line chart showing balance trends over the past few months

 Settings Page
- Tabs: Edit Profile, Preference, and Security
- Edit Profile Section:
  - Fields for Name, Username, Email, Password, DOB, Address, City, Postal Code, and Country
  - Profile picture upload/edit option
  - "Save" button to apply changes

 Technical Stack
- **React.js (Vite)**: Fast development build tool
- **Context API**: State management
- **TailwindCSS**: Styling
- **React Router**: Navigation
- **Chart.js**: Chart rendering
- **Dummy API Endpoints**: Mocked data fetching for user info, cards, transactions, and charts

## Functional Requirements
- **Responsive Design**: Fully adaptable to mobile, tablet, and desktop
- **Data Visualization**: Dynamic chart updates with Chart.js
- **Interactive Elements**: Hover effects, clickable buttons, and smooth transitions
- **Form Validation**: Ensuring correct email and password formats
- **Accessibility**: ARIA labels and keyboard navigation support
- **Browser Compatibility**: Works across Chrome, Firefox, Safari, and Edge

 Installation & Setup
 Prerequisites
Ensure you have the following installed:
- Node.js (v16+ recommended)
- npm or yarn

 Steps
1. Clone the repository:
   ```sh
   git clone <repository-url>
   ```
2. Navigate into the project directory:
   ```sh
   cd financial-dashboard
   ```
3. Install dependencies with Vite:
   ```sh
   npm create vite@latest . --template react
   npm install  # or yarn install
   ```
4. Start the development server:
   ```sh
   npm run dev  # or yarn dev
   ```
5. Open the browser and visit `http://localhost:5173`

 Deployment
- The project can be deployed using **Vercel**.
- [https://financial-dashboard-pied.vercel.app/](https://dashboard-financial-jade.vercel.app/)
  
---
 Ashutosh Kumar  


