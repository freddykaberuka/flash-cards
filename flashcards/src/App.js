import './App.css';
import Header from './components/header';
import AsideBar from './components/aside';
import Home from './components/home';
import Footer from './components/footer';
import buttons from './components/buttons'

function App() {
  return (
    <div className="App">
 <Header/>
 <p className="heading"><h3>Question and Answer with Cards</h3></p>
 <div className="container">
   <div className="sidebar">
     <AsideBar/></div>
   <div className="content">
 <Home/></div>
 </div>
 <buttons/>
 <Footer/>
    </div>
  );
}

export default App;
