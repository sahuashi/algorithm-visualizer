import "./App.css";
import "@fontsource/roboto";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <Container maxWidth="md">
      <Typography variant="h3" gutterBottom align="center">
        Algorithm Visualizer
      </Typography>
      <Sidebar />
    </Container>
  );
}

export default App;
