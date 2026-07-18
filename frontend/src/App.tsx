import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import DashboardPage from './features/dashboard/DashboardPage';
import StatesPage from './features/states/StatesPage';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/states" element={<StatesPage />} />
      </Routes>
    </Layout>
  );
}

export default App;