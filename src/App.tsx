import MainNavbar from "./assets/components/Navbar";
import Schedule from "./assets/components/Schedule";
import Sidebar from "./assets/components/Sidebar";

const App = () => {
  return (
    <>
      <MainNavbar />
      <Sidebar />

      <h1>Schedule</h1>

      <Schedule/>
    </>
  )
}

export default App;