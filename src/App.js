import "./App.css";
import "@fontsource/roboto";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Sidebar from "./components/Sidebar";
import Visualizer from "./components/Visualizer/Visualizer";
import { useState } from 'react';
import randomizeArray from './helpers/Randomizer';
import bubbleSort from "./algorithms/bubble-sort";
import insertionSort from "./algorithms/insertion-sort";
import mergeSort from "./algorithms/merge-sort";
import selectionSort from "./algorithms/selection-sort";

function App() {
  const [selectedAlgorithm, setSelectedAlgorithm] =  useState("Bubble Sort");
  const [array, setArray] = useState(randomizeArray());
  const [isSorted, setIsSorted] = useState(false);

  const algorithms = {
    "Bubble Sort": bubbleSort,
    "Insertion Sort": insertionSort,
    "Merge Sort": mergeSort,
    "Quick Sort": bubbleSort, //temp,
    "Selection Sort": selectionSort
  }

  const randomize = () => {
    let arr = randomizeArray();
    setIsSorted(false);
    setArray(arr);
  }

  const sort = () => {
    let sorted = bubbleSort(array);
    let iteration = sorted.next();
    while(iteration.done !== "true" && iteration.value){
      let arr = [...iteration.value];
      console.log(iteration.value);
      setArray(arr);
      //setTimeout(()=>{}, 3000);
      iteration = sorted.next();
    }
    console.log(iteration);
    //arr.forEach((el) => console.log("yield: " + el));
    //let arr = [...algorithms[selectedAlgorithm](array)];
    //setIsSorted(true);
  }

  return (
    <Container maxWidth="lg" className="container">
      <Sidebar algorithms={algorithms} setSelectedAlgorithm={setSelectedAlgorithm} />
      <Visualizer array={array} randomize={randomize} selectedAlgorithm={selectedAlgorithm} sort={sort} isSorted={isSorted}/>
    </Container>
  );
}

export default App;
