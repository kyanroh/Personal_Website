import reviewOLogo from "../assets/reviewOLogo.jpg";
import financeBacktesting from "../assets/financeBacktesting.png";
import financeProjectSS from "../assets/financeProjectSS.png";
import ALS from "../assets/ALS.png";
export const ProjectList = [
  {
    name: "Project ReviewO",
    image: reviewOLogo,
    skills: "Python, TelegramBot, NLTK, Firebase, Pytorch",
    description: "A telegram bot that helps you quickly sort through reviews and provides important information to make fast and informed decisions. Trained using sentiment analysis models and implemented in the form of a telegram bot for ease of access",
    
  },
  {
    name: "Library Management System",
    image: ALS,
    skills: "Python, Tkinter, mySQL, DBMS",
    description: "Developed A Library System (ALS) that is required to keep records of books and provide services for library members to borrow, return, and reserve books. The system was developed using Python to connect the MySQL database to the interface which was developed using Tkinter. Developing a deep understanding on logical schemas and database design structure. SQL scripts were used to store information on books, members, loans reservations and payments of fines in MySQLdatabase. ",
  },
  {
    name: "Investment Portfolio Finance Project",
    image: financeProjectSS,
    skills: "R, GGplot2, fPortfolio, Microsoft Excel,  ",
    description: "A proposal of 3 portfolios of ETFs as wealth management solutions was made for the typical Japanese retail investor while considering their varying levels of risk tolerance. Using ETF data collected over several years, the risks, returns and Sharpe ratios were taken into account when curating the portfolios. The portfolios were then backtested to evaluate performace",
    btmImage: financeBacktesting,
  }
];
