import './navbar.css'
function Navbar () {
  
  return (
    <div className='navbar'>
      <div className='navContainer'>
        <a href="/" className='logo'>BookingHotels</a>
        <div className="navItems">
          <button className="navButton">Register</button>
          <button className="navButton">Login</button>
        </div>
      </div>
    </div>
  )  
}

export default Navbar