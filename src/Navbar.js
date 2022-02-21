import logo from './signature2.png';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <div className="logo">
                <img src={logo} alt="logo" className='App-logo'/>
                <h2>React Blog</h2>
            </div>
            
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>
                <Link to="/about">About</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;