import { ThemeProvider, createTheme } from '@mui/material/styles'; 
import { Box, Stack } from '@mui/material';
import Sidebar from './components/Sidebar';
import Main from './components/Main';

function App() {
  const theme = createTheme({
    typography:{
      fontFamily:[
        "Nunito Sans", 
        'serif'
      ].join(",")
    }
  });
  return (
    <ThemeProvider theme={theme}>
      <Box>
      <Stack direction="row" justifyContent="flex-start" alignItems="stretch">
        <Sidebar />
        <Main />
      </Stack>
    </Box>
    </ThemeProvider>
  );
}

export default App;
