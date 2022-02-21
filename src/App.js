import './App.css';
import './index.css';
import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import BlogDetails from './BlogDetails';
import About from './About';
import NotFound from './NotFound';
import BlogUpdate from './BlogUpdate';

// !!! Switch has been replaced with Routes

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        {/* Showing the page depending on the route */}
        <div className="content">
          <Routes>
            {/* Render Home page */}
            <Route exact path="/" element={<Home/>} />
            {/* Render Create page */}
            <Route path="/create" element={<Create/>} />
            {/* Render About page */}
            <Route path="/about" element={<About/>} />
            {/* Render Individual blog */}
            <Route path="/blogs/:id" element={<BlogDetails/>} />
            {/* Render Individual blog for update */}
            <Route path="/blogs/:id/update" element={<BlogUpdate/>} />
            {/* Render 404 page */}
            <Route path="*" element={<NotFound/>} />
          </Routes>
        </div>
    </div>
    </Router>
  );
}

export default App;