import './App.css';
import '../src/Assets/Styles/global.css'
import { DashboardHeader} from './Layouts/Header/DashboardHeader';
import { DashboardMain } from './Layouts/Main/DashboardMain';

function App() {
  return (
    <>
      <DashboardHeader />
      <DashboardMain/>
    </>
  )
}

export default App;
