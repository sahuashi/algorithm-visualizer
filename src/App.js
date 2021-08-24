import { useState } from 'react';

import { Container, createTheme, ThemeProvider } from '@material-ui/core';
import BubbleChartOutlinedIcon from '@material-ui/icons/BubbleChartOutlined';
import KeyboardReturnOutlinedIcon from '@material-ui/icons/KeyboardReturnOutlined';
import MergeTypeOutlinedIcon from '@material-ui/icons/MergeTypeOutlined';
import SwapVertOutlinedIcon from '@material-ui/icons/SwapVertOutlined';
import TimerOutlinedIcon from '@material-ui/icons/TimerOutlined';

import bubbleSort from './algorithms/bubbleSort';
import insertionSort from './algorithms/insertionSort';
import mergeSort from './algorithms/mergeSort';
import quickSort from './algorithms/quickSort';
import selectionSort from './algorithms/selectionSort';
import Sidebar from './components/Sidebar';
import Visualizer from './components/visualizer/Visualizer';
import '@fontsource/roboto';
import './App.css';

function App() {
  const [selectedAlgorithm, setSelectedAlgorithm] = useState('Bubble Sort');

  const algorithms = {
    'Bubble Sort': [bubbleSort, <BubbleChartOutlinedIcon />],
    'Insertion Sort': [insertionSort, <KeyboardReturnOutlinedIcon />],
    'Merge Sort': [mergeSort, <MergeTypeOutlinedIcon />],
    'Quick Sort': [quickSort, <TimerOutlinedIcon />],
    'Selection Sort': [selectionSort, <SwapVertOutlinedIcon />],
  };

  const theme = createTheme({
    typography: {
      h5: {
        fontFamily: 'Poppins',
        fontWeight: '200',
      },
      body2: {
        fontFamily: 'Poppins',
      },
      button: {
        fontFamily: 'Work Sans',
        textTransform: 'none',
      },
      subtitle1: {
        fontFamily: 'Work Sans',
        textTransform: 'none',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg" className="container">
        <Sidebar
          algorithms={algorithms}
          selectedAlgorithm={selectedAlgorithm}
          setSelectedAlgorithm={setSelectedAlgorithm}
        />
        <Visualizer algorithms={algorithms} selectedAlgorithm={selectedAlgorithm} />
      </Container>
    </ThemeProvider>
  );
}

export default App;
