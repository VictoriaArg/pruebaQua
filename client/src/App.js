import { Route, BrowserRouter as Router } from "react-router-dom";
import React from 'react';

import MainWindow from './components/MainWindow.jsx'

function App() {
  return (
    <Router>
      <Route path="/" render={() => <MainWindow />} />
    </Router>
  );
}

export default App;
