import SideBar from './components/sidebar';
import RightSideBar from './components/rightsidebar';
import Main from './components/main';

function App() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <SideBar />
      <Main />
    </div>
  );
}

export default App;
