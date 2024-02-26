import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.tsx';
import DonateBunny from './pages/DonateBunny.tsx';
import ReceiveBunny from './pages/ReceiveBunny.tsx';
import Register from './pages/auth/Register.tsx';
import Login from './pages/auth/Login.tsx';
import { QueryClient, QueryClientProvider } from 'react-query';

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/donate-bunny" Component={DonateBunny} />
          <Route path="/receive-bunny" Component={ReceiveBunny} />
          <Route path="/register" Component={Register} />
          <Route path="/login" Component={Login} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
