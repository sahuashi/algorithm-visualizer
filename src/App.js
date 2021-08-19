import { useState } from 'react';
import Container from "@material-ui/core/Container";
import Sidebar from "./components/Sidebar";
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import BubbleChartOutlinedIcon from '@material-ui/icons/BubbleChartOutlined';
import KeyboardReturnOutlinedIcon from '@material-ui/icons/KeyboardReturnOutlined';
import MergeTypeOutlinedIcon from '@material-ui/icons/MergeTypeOutlined';
import TimerOutlinedIcon from '@material-ui/icons/TimerOutlined';
import SwapVertOutlinedIcon from '@material-ui/icons/SwapVertOutlined';
import Visualizer from "./components/Visualizer/Visualizer";
import bubbleSort from "./algorithms/bubble-sort";
import insertionSort from "./algorithms/insertion-sort";
import mergeSort from "./algorithms/merge-sort";
import quickSort from "./algorithms/quick-sort";
import selectionSort from "./algorithms/selection-sort";
import randomizeArray from './helpers/Randomizer';
import '@fontsource/roboto';
import "./App.css";

function App() {
  const [selectedAlgorithm, setSelectedAlgorithm] =  useState("Bubble Sort");
  const [selectedSize, setSelectedSize] = useState(15);
  const [array, setArray] = useState(randomizeArray(selectedSize));
  const [isSorting, setIsSorting] = useState(false);
  const [isSorted, setIsSorted] = useState(false);
  var iterations = [];
  var counter = 0;

  const algorithms = {
    "Bubble Sort": [bubbleSort, <BubbleChartOutlinedIcon />],
    "Insertion Sort": [insertionSort,  <KeyboardReturnOutlinedIcon />],
    "Merge Sort": [mergeSort, <MergeTypeOutlinedIcon/>],
    "Quick Sort": [quickSort, <TimerOutlinedIcon/>],
    "Selection Sort": [selectionSort, <SwapVertOutlinedIcon/>]
  }

  const theme = createTheme({
    typography: {
      h5: {
        fontFamily: 'Poppins',
        fontWeight:'200'
      },
      body2: {
        fontFamily: 'Poppins'
      },
      button: {
        fontFamily: 'Work Sans',
        textTransform: 'none'
      }, 
      subtitle1: {
        fontFamily: 'Work Sans',
        textTransform: 'none'
      }
  }});

  const randomize = () => {
    let arr = randomizeArray(selectedSize);
    setIsSorted(false);
    setArray(arr);
  }

  const sort = () => {
    if(isSorted) return;
    setIsSorting(true);
    let sorting = algorithms[selectedAlgorithm][0](array, 0, array.length-1);
    let iteration = sorting.next();
    while(iteration.value){
      iterations.push([...iteration.value]);
      iteration = sorting.next();
    }
    requestAnimationFrame(animateIterations);
  }
  
  const animateIterations = () => {
    let arr = [...iterations[counter]];
    setArray(arr);
    counter++;
    if (counter !== iterations.length) {
      requestAnimationFrame(animateIterations);
    }
    else {
      setIsSorting(false);
      setIsSorted(true);
    }
  }

  return (
    <ThemeProvider theme={theme}>
    <Container maxWidth="lg" className="container">
      <Sidebar algorithms={algorithms} setSelectedAlgorithm={setSelectedAlgorithm}/>
      <Visualizer array={array} randomize={randomize} selectedAlgorithm={selectedAlgorithm} 
      sort={sort} isSorting={isSorting} isSorted={isSorted} setSelectedSize={setSelectedSize} selectedSize={selectedSize}/>
    </Container>
    </ThemeProvider>
  );
}

export default App;
