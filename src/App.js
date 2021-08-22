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
import bubbleSort from "./algorithms/bubbleSort";
import insertionSort from "./algorithms/insertionSort";
import mergeSort from "./algorithms/mergeSort";
import quickSort from "./algorithms/quickSort";
import selectionSort from "./algorithms/selectionSort";
import randomizeArray from './helpers/randomizer';
import '@fontsource/roboto';
import "./App.css";

function App() {
  const [selectedAlgorithm, setSelectedAlgorithm] =  useState("Bubble Sort");
  const [selectedSize, setSelectedSize] = useState(15);
  const [array, setArray] = useState(randomizeArray(selectedSize));
  const [isSorting, setIsSorting] = useState(false);
  const [isSorted, setIsSorted] = useState(false);
  const [selectedSpeed, setSelectedSpeed] = useState(1);

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

  return (
    <ThemeProvider theme={theme}>
    <Container maxWidth="lg" className="container">
      <Sidebar algorithms={algorithms} setSelectedAlgorithm={setSelectedAlgorithm}/>
      <Visualizer array={array} selectedAlgorithm={selectedAlgorithm} setArray={setArray} setIsSorted={setIsSorted}
      isSorting={isSorting} isSorted={isSorted} setIsSorting={setIsSorting} setSelectedSize={setSelectedSize} 
      selectedSize={selectedSize} setSelectedSpeed={setSelectedSpeed} selectedSpeed={selectedSpeed} algorithms={algorithms}/>
    </Container>
    </ThemeProvider>
  );
}

export default App;
