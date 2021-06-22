import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { FileUpload } from './components/SignatureUpload';

function App() {
  return (
    <div className="App">
      <h1>Please select the Signature</h1>
      <Router>
        <Link to="/type" style={{marginRight: 20}}>Type</Link>
        <Link to="/upload">Upload</Link>

        <Switch>
          <Route path="/type" >
            type    
          </Route>
          <Route path="/upload" >
            <FileUpload />
          </Route>
        </Switch>
        </Router>
    </div>
  );
}

export default App;
