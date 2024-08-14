import './App.css';
import Header from './Header';
import Nav from './Nav';
import Content from './Content';


const App=()=> {
  return (
    <div className="App">
      <header className="header">
      <Header />
      </header>
      <nav className="nav">
      <Nav />
      </nav>
      <div className="content">
      <Content />
      </div>
    </div>
  );
};


export default App;
