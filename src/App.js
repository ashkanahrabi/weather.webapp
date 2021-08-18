import "./styles/css/main.scss";
import Home from "./pages/home/Home";
import SelectedTimeSlot from "./utils/storage/selectedTimeSlot";
function App() {
  return (
      <SelectedTimeSlot>
        <Home />
      </SelectedTimeSlot>
  );
}

export default App;
