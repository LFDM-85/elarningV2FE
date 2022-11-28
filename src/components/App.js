import { ThemeProvider } from '@material-ui/core';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import theme from './ui/Theme';
import Header from './ui/Header';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<div>Home</div>} />
          <Route exact path="/services" element={<div>Services</div>} />
          <Route exact path="/customsoftware" element={<div>Software</div>} />
          <Route exact path="/mobileapps" element={<div>Mobile</div>} />
          <Route exact path="/websites " element={<div>Websites</div>} />
          <Route exact path="/revolution" element={<div>Revolution</div>} />
          <Route exact path="/about" element={<div>About</div>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
