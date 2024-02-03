import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.tsx';
import DonateBunny from './pages/DonateBunny.tsx';
import ReceiveBunny from './pages/ReceiveBunny.tsx';
import ListOfRiddles from './pages/ListOfRiddles.tsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/donate-bunny" Component={DonateBunny} />
        <Route path="/receive-bunny" Component={ReceiveBunny} />
        <Route path="/list-of-riddles" Component={ListOfRiddles} />
      </Routes>
    </Router>
  );
}

export default App;
