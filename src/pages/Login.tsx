import { useState } from "react";

const Login = () => {
  const [state, setState] = useState<string>("Sign Up");
  const [username, setUserName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  // const onSubmitHandler = async (event: React.FormEvent) => {
  //   // To prevent the page from reloading
  //   event.preventDefault();
  // };

  return (
    <form className="min-h[80vh] flex items-center m-20">
      <div className="flex flex-col gap-3 m-auto items-start p-8 min-w[340px] sm:min-w96 border rounded-xl text-zinc-600 text-sm shadow-lg">
        <p className="text-2xl font-semibold">
          {state === "Sign Up" ? "Create Account" : "Login"}
        </p>
        <p>
          Please {state === "Sign Up" ? "sign up" : "log in"} to book
          appointment
        </p>

        {state === "Sign Up" && (
          <div className="w-full">
            <p>Username</p>
            <input
              className="border border-zinc-300 rounded w-full p-2 mt-1"
              type="text"
              onChange={(e) => setUserName(e.target.value)}
              value={username}
              required
            />
          </div>
        )}

        <div className="w-full">
          <p>Email</p>
          <input
            className="border border-zinc-300 rounded w-full p-2 mt-1"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </div>

        <div className="w-full">
          <p>Password</p>
          <input
            className="border border-zinc-300 rounded w-full p-2 mt-1"
            type="text"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
        </div>
        <button className="bg-primary text-wt w-full py-2 rounded-md text-base">
          {state === "Sign Up" ? "Create Accout" : "Login"}
        </button>
        {state === "Sign Up" ? (
          <p>
            Already have an account?{" "}
            <span
              onClick={() => setState("Login")}
              className="text-primary underline cursor-pointer"
            >
              Login here
            </span>
          </p>
        ) : (
          <p>
            Don't have an account?{" "}
            <span
              onClick={() => setState("Sign Up")}
              className="text-primary underline cursor-pointer"
            >
              Click here
            </span>
          </p>
        )}
      </div>
    </form>
  );
};

export default Login;
