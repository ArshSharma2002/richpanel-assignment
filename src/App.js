import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import SubscriptionPlans from './components/SubscriptionPlans';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Login from './components/Login';


function App() {
  return (
    <BrowserRouter>
        <Navbar title="Richpanel" />
        <div className="container">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<SubscriptionPlans />} />
        {/* <h1 className ="container d-flex justify-content-centre" >My Notes - your notes on cloud</h1> */}
        {/* <Switch> */}
          {/* <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <SubscriptionPlans />
          </Route> */}
        {/* </Switch> */}
      </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
