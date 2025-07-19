// src/pages/Jobs.jsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/jobs");
        if (!res.ok) throw new Error("Failed to fetch jobs");
        const data = await res.json();
        setJobs(data);
      } catch (err) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 mt-10">
      <h1 className="text-3xl font-bold mb-6 text-center dark:text-white">Available Jobs</h1>

      {loading ? (
  <p className="text-center dark:text-white">Loading jobs...</p>
) : error ? (
  <p className="text-center text-red-600">{error}</p>
) : jobs.length === 0 ? (
  <p className="text-center text-gray-500 dark:text-gray-300">No jobs posted yet.</p>
) : (
  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
    {jobs.map((job) => (
      <div
        key={job._id}
        className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition"
      >
        <h2 className="text-xl font-semibold mb-1 dark:text-white">{job.title}</h2>
        <p className="text-gray-600 dark:text-gray-300">{job.company}</p>
        <p className="text-sm text-gray-400 dark:text-gray-400 mb-2">{job.location}</p>
        <p className="text-sm text-gray-700 dark:text-gray-200 mb-4">{job.description}</p>
        <div className="flex justify-between items-center mt-auto">
          <span className="text-green-600 font-medium">{job.salary}</span>
          <Link
            to={`/jobs/${job._id}`}
            className="text-sm text-green-600 hover:underline"
          >
            View Details
          </Link>
        </div>
      </div>
    ))}
  </div>
)}

    </div>
  );
};

export default Jobs;
