import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, User } from "lucide-react"; // Hamburger & user icon

const Navbar = () => {
  const [userEmail, setUserEmail] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("jobnestUser"));
    if (user?.email) {
      setUserEmail(user.email);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("jobnestToken");
    localStorage.removeItem("jobnestUser");
    setUserEmail(null);
    navigate("/login");
  };

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-green-600">JobNest</Link>

        {/* Hamburger (mobile only) */}
        <button
          className="md:hidden text-gray-700 dark:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {userEmail ? (
            <>
              <Link to="/jobs" className="text-gray-700 dark:text-white hover:text-green-600">Jobs</Link>
              <Link to="/post-job" className="text-gray-700 dark:text-white hover:text-green-600">Post Job</Link>
              <div className="flex items-center gap-2 text-sm text-gray-800 dark:text-gray-300">
                <User className="w-5 h-5" />
                {userEmail}
              </div>
              <button
                onClick={handleLogout}
                className="text-red-600 hover:underline text-sm"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-gray-700 dark:text-white hover:text-green-600">Login</Link>
              <Link to="/signup" className="text-gray-700 dark:text-white hover:text-green-600">Sign Up</Link>
            </>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-4">
          {userEmail ? (
            <>
              <Link to="/jobs" className="text-gray-700 dark:text-white hover:text-green-600" onClick={() => setMenuOpen(false)}>Jobs</Link>
              <Link to="/post-job" className="text-gray-700 dark:text-white hover:text-green-600" onClick={() => setMenuOpen(false)}>Post Job</Link>
              <div className="flex items-center gap-2 text-sm text-gray-800 dark:text-gray-300">
                <User className="w-5 h-5" />
                {userEmail}
              </div>
              <button
                onClick={() => { handleLogout(); setMenuOpen(false); }}
                className="text-red-600 hover:underline text-sm"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-gray-700 dark:text-white hover:text-green-600" onClick={() => setMenuOpen(false)}>Login</Link>
              <Link to="/signup" className="text-gray-700 dark:text-white hover:text-green-600" onClick={() => setMenuOpen(false)}>Sign Up</Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
