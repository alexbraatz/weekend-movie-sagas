import {HashRouter as Router, Route} from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './App.css';
import MovieList from '../MovieList/MovieList';
import Details from '../Details/Details';
import AddMovie from '../AddMovie/AddMovie';

function App() {


  return (
    <div className="App">
      <h1>The Movies Saga!</h1>

      <Router>

        <Route path="/" exact>
          <MovieList />
        </Route>
        
        <Route path="/details" exact component={ Details } />

        <Route path="/addMovie" exact component={AddMovie} />

      </Router>
    </div>
  );
}


export default App;
