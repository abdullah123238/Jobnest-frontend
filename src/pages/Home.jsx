import { Link, useNavigate } from "react-router-dom";


const Home = () => {
    const navigate = useNavigate()
    const getStarted = () =>{
        navigate("/signup")
    }
    
  return (
    <div className="flex gap-5">
    <section className="min-h-screen flex flex-col justify-center items-center px-4  bg-white dark:bg-gray-900">
      <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
        Welcome to <span className="text-green-600 dark:text-green-400">JobNest</span>
      </h1>
      <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-xl mb-6">
        Discover thousands of local opportunities. Find your next career move today.
      </p>
      <button
      onClick={getStarted}
        className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white text-lg font-medium rounded-lg transition"
      >
        Get Started
      </button>
    </section>
    
    <img src="/public/Designer girl-bro.png" alt="" className="w-full max-w-xl mx-auto"/>
    </div>
  );
};

export default Home;
