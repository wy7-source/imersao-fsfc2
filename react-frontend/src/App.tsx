import { CssBaseline, MuiThemeProvider } from "@material-ui/core";
import { SnackbarProvider } from "notistack";
import { Mapping } from "./components/Mapping";
import theme from "./theme";

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <SnackbarProvider maxSnack={3}>
        {/* 
          Por mais que o MuiThemeProvider consiga alterar informações visuais do proprio Mui,
            Precisamos do CssBaseLine pra poder aplicar mais informações, de forma mais efetiva.
            Ex: Background Color...
        */}
        <CssBaseline /> 
        <Mapping />
      </SnackbarProvider>
    </MuiThemeProvider>
  );
}

export default App;
//TS + JSX
