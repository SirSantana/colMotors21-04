import '../styles/globals.css'
import { createTheme, ThemeProvider } from "@material-ui/core";

const theme = createTheme({ 
  palette: {
    primary: {
      light: "#757ce8",
      main: "#1b333d",
      dark: "#173947",
      contrastText: "#f1f1f1",
    },
    secondary: {
      light: '#ff7961',
      main: '#f50057',
      dark: '#c51162',
      contrastText: '#f1f1f1',
    },
  },
});



function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
  <Component {...pageProps} />
    </ThemeProvider>
  )
  
}

export default MyApp