import "./App.css";
import "@fontsource/roboto";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Sidebar from "./components/Sidebar";
import Visualizer from "./components/Visualizer/Visualizer";
import { useState } from 'react';
import randomizeArray from './helpers/Randomizer';
import bubbleSort from "./algorithms/bubble-sort";

function App() {
  const [selectedAlgorithm, setSelectedAlgorithm] =  useState("Bubble Sort");
  const [array, setArray] = useState(randomizeArray());
  const algorithms = [
    "Bubble Sort",
    "Insertion Sort",
    "Merge Sort",
    "Quick Sort",
    "Insertion Sort"
  ]

  const randomize = () => {
    let arr = randomizeArray();
    setArray(arr);
  }

  const sort = () => {
    let arr = [...bubbleSort(array)];
    setArray(arr);
  }

  return (
    <Container maxWidth="lg" className="container">
      <Sidebar algorithms={algorithms} setSelectedAlgorithm={setSelectedAlgorithm} />
      <Visualizer array={array} randomize={randomize} selectedAlgorithm={selectedAlgorithm} sort={sort}/>
    </Container>
  );
}

export default App;
