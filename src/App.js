import './App.css';
import Header from './Header/Header.jsx';
import Nav from './Navbar/Nav.jsx';
import Content from './Content/Content.jsx';
import Message from './Message/Message.jsx';
import Friends from './Friends/Friends.jsx';
import Photo from './Photo/Photo.jsx';
import Music from './Music/Music.jsx';
import News from './News/News.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



const App = (props) => {
  return (
    <div className="App">
      <BrowserRouter>
      <header className="header">
        <Header />
      </header>
      <nav className="nav">
        <Nav nav={props.stateData.nav}/>
      </nav>
      <div className="content">
         <Routes>
          <Route path='/Profile/*' element={<Content pageProfile={props.stateData.pageProfile}/>} />
          <Route path='/Messages/*' element={<Message pageMessage={props.stateData.pageMessage} />} />
          <Route path='/Friends/*' element={<Friends/>} />
          <Route path='/Photo/*' element={<Photo/>} />
          <Route path='/Music/*' element={<Music/>} />
          <Route path='/News/*' element={<News/>} />
          <Route path='/' element={<Content pageProfile={props.stateData.pageProfile}/>} />
          </Routes>
        
      </div>
      </BrowserRouter>
    </div>
  );
};


export default App;
