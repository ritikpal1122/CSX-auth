import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { signInFailure, signInStart, signInSuccess } from "../redux/userSlice";
import { useDispatch, useSelector } from 'react-redux';

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 const{error, loading}  = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(signInStart());
    try {
      
      const response = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

    
      if (!data.success === false) {
        dispatch(signInFailure(data));
        return
      } 

      setEmail('');
      setPassword('');
      dispatch(signInSuccess(data));
      navigate("/");
    } catch (error) {
      dispatch(signInFailure(error));

    }

  };

  return (
    <div className="max-w-md mx-auto p-4 mt-10 bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-4 text-white">Sign in</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-gray-300 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-gray-700"
            id="username"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-300 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-gray-700"
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="text-red-500 text-xs italic">{ error ? error || "Something went wrong!": ""}</p>}
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
          disabled={loading}
        >
          {loading ? "Signing in..." : "Sign in"}
        </button>
        <p className="text-gray-300 text-xs mt-4">
          Don&#39;t have an account?{" "}
          <Link to="/sign-up" className="text-blue-500 hover:text-blue-700">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignIn;