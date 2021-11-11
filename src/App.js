import {
  HashRouter as Router,
} from "react-router-dom";
import './App.css';
import TransactionForm from "./components/addTransactions";
import Header from './components/Header';
import TransactionsListPage from "./components/listTransacctions";




const App = () => {

  return (


    <Router>
    <div className="container-dark">
      <div className="app">
        <Header />
        <TransactionForm/>
        <TransactionsListPage   />
        {/* <TransactionsListPage/> */}
        {/* <Route path="/" exact component={listTransactions} />
        <Route path="/note/:id" component={singletransaction} /> */}
      </div>
    </div>
  </Router>
  );
}
export default App;
