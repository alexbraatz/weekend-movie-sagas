import {HashRouter as Router, Route} from 'react-router-dom';
import { Link } from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList';
import Details from '../Details/Details';
import AddMovie from '../AddMovie/AddMovie';

function App() {
  return (
    <div className="App">
      <h1>The Movies Saga!</h1>

      <Router>

        <Link to={'/addMovie'}>
          <button>Add a New Movie</button>
        </Link>

        <Route path="/" exact>
          <MovieList />
        </Route>
        
        {/* Details page */}
        <Route path="/details" exact component={Details} />

        {/* Add Movie page */}
        <Route path="/addMovie" exact component={AddMovie} />

      </Router>
    </div>
  );
}


export default App;
