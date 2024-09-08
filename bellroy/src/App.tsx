import './App.css';
import Home from './pages/home';
import { RobotProvider } from './packages/Robot/RobotContext';

function App() {
  return (
    <RobotProvider>
      <Home />
    </RobotProvider>
  );
}

export default App;
