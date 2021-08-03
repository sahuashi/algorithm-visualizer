import "./App.css";
import "@fontsource/roboto";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Sidebar from "./components/Sidebar";
import Visualizer from "./components/Visualizer";
import { useState } from 'react';
import randomizeArray from './helpers/Randomizer';

function App() {
  const [selectedAlgorithm, setSelectedAlgorithm] =  useState("Bubble Sort");
  const [array, setArray] = useState(randomizeArray());

  const randomize = () => {
    var array = randomizeArray();
    setArray(array);
  }

  return (
    <Container maxWidth="lg" className="container">
      <Sidebar setSelectedAlgorithm={setSelectedAlgorithm} />
      <Visualizer array={array} randomize={randomize} selectedAlgorithm={selectedAlgorithm}/>
    </Container>
  );
}

export default App;
