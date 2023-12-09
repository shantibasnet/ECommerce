import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <div className="navbar ">
        <div className="flex-1 text-xl">
          <Link to ="" className="btn btn-ghost text-xl">SolCafe</Link>
      
      <ul className=" navbar">
        <li className="flex-1">
          <Link to="/home">Home</Link>
        </li>
        <li className="flex-1">
          <Link to="/product">Products</Link>
        </li>
        <li className="flex-1">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="flex-1">
          <Link to="/cart"><div className="indicator">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              </div></Link>
        </li>
      </ul>
  
          
        </div>
          <div className="dropdown dropdown-end">
            <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img alt="Tailwind CSS Navbar component" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEukW4DPKavYQdC8K5jH5-ktFQA-3I-KuxXA&usqp=CAU" />
              </div>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li><a>Settings</a></li>
              <li><a>Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }