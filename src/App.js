import "./App.css";
import "@fontsource/roboto";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <Container maxWidth="md">
      <Sidebar />
    </Container>
  );
}

export default App;
