import "./App.css";
import "@fontsource/roboto";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Sidebar from "./components/Sidebar";
import Visualizer from "./components/Visualizer";

function App() {
  return (
    <Container maxWidth="lg" className="container">
      <Sidebar />
      <Visualizer />
    </Container>
  );
}

export default App;
