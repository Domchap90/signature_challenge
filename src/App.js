import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { FileUploadForm } from './components/FileUploadForm';
import { TextSignatureForm } from './components/TextSignatureForm';

const linkStyle = {
  backgroundColor: "#000",
  color: "#fff"
}

function App() {
  return (
    <div className="App">
      <h1>Please select the Signature</h1>
      <Router>
        <Link
          to="/type" 
          style={{...linkStyle, marginRight: 20}} 
          className="MuiButtonBase-root MuiButton-root MuiButton-contained"
          >
          Type
        </Link>

        <Link 
          to="/upload" 
          className="MuiButtonBase-root MuiButton-root MuiButton-contained" 
          style={linkStyle}>
          Upload
        </Link>

        <Switch>
          <Route path="/type" >
            <TextSignatureForm />    
          </Route>
          <Route path="/upload" >
            <FileUploadForm />
          </Route>
        </Switch>
        </Router>
    </div>
  );
}

export default App;
