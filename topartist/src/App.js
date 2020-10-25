import logo from "./logo.svg";
import "./App.css";
import MainPage from "./Genres/mainPage";
import LatinPage from "./Genres/latinArtistPage";
import PopPage from "./Genres/pop";
import RapPage from "./Genres/rap";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  loaderContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    minHeight: "100vh",
  },
  container: {
    display: "flex",
    backgroundColor: "#f7f7f9",
    flexDirection: "column",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    minHeight: "86vh",
  },
  footerContainer: {
    display: "flex",
    borderTopWidth: "1px",
    borderTopStyle: "solid",
    borderTopColor: "#e6eaea",
    width: "100%",
    padding: "20px",
    color: "#303030",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    flexGrow: 1,
  },
  logo: {
    margin: theme.spacing(0, 0, 2),
  },
  // footerCopyright: {
  //   paddingTop: "30px",
  //   marginLeft: "auto",
  // },
  // footerLogo: {
  //   marginRight: "auto",
  // },
}));

const UseStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #3FEEE6 30%, #FC4445 90%)',
    color: 'white',
    fontFamily: 'cursive',
    height: 48,
    padding: '0 30px',
  },
});

function App() {
  const classes = UseStyles();
  return ( 
  <Router>
    <AppBar position="static" color="default">
      <Toolbar>
        <Typography variant="h6" className={classes.title}></Typography>
          <Link
            style={{ textDecoration: "none", color: "inherit" }}
            to="/latin"
          >
            <Button color="inherit">Latin</Button>
          </Link>
  
        <Link
          style={{ textDecoration: "none", color: "inherit" }}
          to="/pop"
        >
          <Button color="inherit">Pop</Button>
        </Link>
        <Link
          style={{ textDecoration: "none", color: "inherit" }}
          to="/rap"
        >
          <Button color="inherit">Rap</Button>
        </Link>
      </Toolbar>
    </AppBar>
    <titleBar>
      <div  className={classes.root}  align= "center" >
      <h1> Tempo</h1>
      </div>
    </titleBar>
    
    

    <Switch>
      <Route path="/rap">
        <RapPage></RapPage>
      </Route>
      <Route path="/pop">
        <PopPage />
      </Route>
      <Route path="/latin">
        <LatinPage></LatinPage>
      </Route>
      <Route path="/">
        <MainPage/>
      </Route>
    </Switch>
  </Router>);
}

export default App;
