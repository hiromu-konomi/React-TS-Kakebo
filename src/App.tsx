import './assets/css/App.css';
import Header from './components/elements/Header';
import routes from './router/routes';


function App() {
  return (
    <div className="App">
      <Header />
      {routes}
    </div>
  );
}

export default App;
