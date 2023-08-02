import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import SignIn from './components/SignIn';
import DataPage from './pages/DataPage';
import EmptyLayout from './pages/EmptyLayout';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* <Route path="/signin" element = {<SignIn />}/> */}
          <Route path="/" element = {<EmptyLayout />}/>
          <Route path="/:sportsection" element={<DataPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
