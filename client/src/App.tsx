import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.tsx';
import DonateBunny from './pages/DonateBunny.tsx';
import ReceiveBunny from './pages/ReceiveBunny.tsx';
import Register from './pages/auth/Register.tsx';
import Login from './pages/auth/Login.tsx';
import { QueryClient, QueryClientProvider } from 'react-query';
import Winners from './pages/Winners.tsx';
import { Menu } from 'antd';

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="2">
            {' '}
            <Link to="/donate-bunny">Donate</Link>
          </Menu.Item>
          <Menu.Item key="3">
            {' '}
            <Link to="/receive-bunny">Receive</Link>
          </Menu.Item>
          <Menu.Item key="6">
            {' '}
            <Link to="/winners">Winner</Link>
          </Menu.Item>
          <Menu.Item key="4">
            {' '}
            <Link to="/register">Register</Link>
          </Menu.Item>
          <Menu.Item key="5">
            {' '}
            <Link to="/login">Login</Link>
          </Menu.Item>
        </Menu>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/donate-bunny" Component={DonateBunny} />
          <Route path="/receive-bunny" Component={ReceiveBunny} />
          <Route path="/register" Component={Register} />
          <Route path="/login" Component={Login} />
          <Route path="/winners" Component={Winners} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
