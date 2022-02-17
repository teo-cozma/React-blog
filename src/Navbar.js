import logo from './signature2.png';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <div className="logo">
                <img src={logo} alt="logo" className='App-logo'/>
                <h2>React Blog</h2>
            </div>
            
            <div className="links">
                <a href="/">Home</a>
                <a href="/create">New Blog</a>
                <a href="/about">About</a>
            </div>
        </nav>
     );
}
 
export default Navbar;