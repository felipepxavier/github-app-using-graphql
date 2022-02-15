import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import GlobalStyles from './styles/global';
import Main from 'pages/Main';
import Repositories from 'pages/Repositories';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/repositorios/:username" element={<Repositories />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
