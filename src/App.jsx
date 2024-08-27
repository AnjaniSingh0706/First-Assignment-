
import './components/Stopwatch/stopwatch.css';
import Stopwatch from './components/Stopwatch/Stopwatch';
import Usertable from './components/Usertable/Usertable';
import Navbar from './components/Navbar/Navbar'
import { useState } from'react';
function App() {
  const [activeComponent, setActiveComponent] = useState('home');

  const handleNavClick = (component) => {
      setActiveComponent(component);
  };

  return (
      <div>
          <Navbar onNavClick={handleNavClick} />
          {activeComponent === 'home' && <h1>Wecome to React Assignment World !!</h1>}
          {activeComponent === 'usertable' && <Usertable />}
          {activeComponent === 'stopwatch' && <Stopwatch />}
      </div>
  );
}
export default App;
