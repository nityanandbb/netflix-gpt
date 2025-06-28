import Header from "./Header";
import {useState} from "react"
const Login = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const toggleForm = (e) => {
     e.preventDefault();
     setIsLoginForm (!isLoginForm);
     console.log("Is Loginf Form = "+ isLoginForm);
  };

// New to Netflix Do Sign Up
        
  return (
    <div>

      <div>
          \
        <Header />
      </div>
      <div>
        <h1>Login</h1>
        <img
          className="absolute"
          src="
https://assets.nflxext.com/ffe/siteui/vlv3/75b0ed49-75ab-4a63-bd45-37bc2c95cb73/web/IN-en-20250623-TRIFECTA-perspective_ae5833b7-6ce5-4e88-853e-014f38c506f1_small.jpg"
          alt="backgrount"
        />
      </div>
      <div className="m-20"></div>
     <form className="relative p-12 bg-black bg-opacity-50 mx-auto max-w-md flex flex-col space-y-4">
          <h3 className="font-bold text-white text-center "> {isLoginForm ? "Sign In":"Sign Up"}</h3>
          <p className="font-bold  text-white p-4 rounded ">
          {isLoginForm ? "Don't have account in Do":"Already have a account"} 
            <button className="underline hover:text-gray-200 ml-2 font-bold"
            onClick={toggleForm}>
               {isLoginForm ? "Sing In":"Sign Up"}
            </button>
          </p>
          {!isLoginForm ? (
           <>
          <input
            type="text"
            placeholder="First Name"
            className="border p-2 rounded text-purple-500 bg-blue-200"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="border p-2 rounded text-purple-500 bg-blue-200"
          />
          <input
            type="tel"
            placeholder="Mobile Number"
            className="border p-2 rounded text-purple-500 bg-blue-200"
          /> 
          </> ): (<>  </> )}
          <input
             type="email"
            placeholder="Email Address"
            className="border p-2 rounded text-purple-500 bg-blue-200"
          />
          <input
            type="password"
            placeholder="Enter Password"
            className="border p-2 rounded font-bold text-green-500 bg-blue-200"
          />
          
           {!isLoginForm ? (
               <>
          <input
            type="password"
            placeholder="Re-Enter Password"
            className="border p-2 rounded font-bold text-green-500 bg-blue-200"
          />
          </>)  : null}
          <button type="submit"
           className="font-bold border p-4 rounded bg-red-700 hover:bg-red-900 transition-colors">
           {isLoginForm ? "Sign In":"Sign Up"}
          </button>
        </form>
    </div>
  );
};
export default Login;
