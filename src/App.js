import Rating from "./screens/Rating";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

import Typography from "@material-ui/core/Typography";

function Link(props) {
  return <a href={props.href}>{props.children}</a>;
}
function App() {
  return (
    <div className="App" style={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Design Evaluation Research
          </Typography>

          <Button color="inherit" component={Link}>
            git
          </Button>
        </Toolbar>
      </AppBar>
      <CssBaseline />

      <Rating />
    </div>
  );
}

export default App;
