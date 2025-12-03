import { useDispatch, useSelector } from "react-redux";
import { setIsLoginModalOpen } from "../store/InteractionSlice";
import {
  setLoginEmail,
  setLoginPassword,
  clearLoginState,
} from "../store/LoginSlice";
import type { RootState } from "../store";
import { useMutation } from "@apollo/client/react";
import LoginUser from "../gql/mutations/userMutation/loginMutation.gql";
import { type LoginUserResponse } from "../types/loginuserresponse";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import "../styles/index.css";
import { setIsRegisterModalOpen } from "../store/InteractionSlice";

const LoginModal = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClose = () => {
    dispatch(setIsLoginModalOpen(false));
  };

  const handleSwitchToRegister = () => {
    dispatch(setIsLoginModalOpen(false));
    dispatch(setIsRegisterModalOpen(true));
  };

  //Login State to pass into the Mutation
  const loginemail = useSelector((state: RootState) => state.login.loginemail);
  const loginpassword = useSelector(
    (state: RootState) => state.login.loginpassword
  );

  const [loginUser] = useMutation<LoginUserResponse>(LoginUser);

  //Login Logic
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await loginUser({
        variables: {
          loginemail: loginemail,
          loginpassword: loginpassword,
        },
      });
      if (response) {
        dispatch(setIsLoginModalOpen(false));
        dispatch(clearLoginState());
        if (response.data?.loginUser?.token) {
          localStorage.setItem("token", response.data.loginUser.token);
          localStorage.setItem("userId", response.data.loginUser.id.toString());
          navigate("/dashboard");
          toast.success("Login successful! Welcome back!");
        } else {
          console.warn("No token received upon login.");
        }
      }
      console.log("Login successful:", response);
    } catch (err: unknown) {
      console.error("Login error:", err);
    }
  };
  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-40"
      onClick={handleClose}
    >
      <div
        className="bg-white rounded-2xl shadow-lg w-3/5 z-50 h-3/4 overflow-y-auto flex"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-1/2 rounded-tr-2xl rounded-br-2xl overflow-hidden">
          {/* Gradient background */}
          <div
            className="absolute inset-0"
            aria-hidden="true"
            style={{
              background:
                "linear-gradient(135deg,#0ea5a4 0%,#3b82f6 50%,#6366f1 100%)",
            }}
          />

          {/* Subtle geometric pattern */}
          <svg
            className="absolute inset-0 w-full h-full opacity-10"
            aria-hidden="true"
            preserveAspectRatio="none"
            viewBox="0 0 800 600"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="g1" x1="0" x2="1">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.06" />
                <stop offset="100%" stopColor="#000000" stopOpacity="0.02" />
              </linearGradient>
            </defs>
            <rect width="800" height="600" fill="url(#g1)" />
            <g fill="none" stroke="#fff" strokeOpacity="0.03" strokeWidth="1">
              <path d="M0 100 L800 0" />
              <path d="M0 200 L800 100" />
              <path d="M0 300 L800 200" />
              <path d="M0 400 L800 300" />
              <path d="M0 500 L800 400" />
            </g>
          </svg>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-center p-12 text-center text-white">
            <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center mb-6">
              <svg
                className="w-10 h-10 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 7v4a1 1 0 001 1h3m10 0h3a1 1 0 001-1V7M8 21h8"
                />
              </svg>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold drop-shadow-md">
              Welcome to Quantify
            </h2>
            <p className="text-base sm:text-lg text-white/80 mt-3 max-w-md">
              Smart inventory management for modern businesses — secure, fast
              and scalable.
            </p>

            <ul className="mt-8 space-y-4 text-left w-full max-w-md">
              <li className="flex items-start gap-4">
                <span className="shrink-0 mt-1 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <div>
                  <div className="text-base font-medium">
                    Real-time analytics
                  </div>
                  <div className="text-sm text-white/70">
                    Live dashboards & alerts
                  </div>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <span className="shrink-0 mt-1 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 11c0-1.657 1.343-3 3-3s3 1.343 3 3M5 11c0-1.657 1.343-3 3-3s3 1.343 3 3"
                    />
                  </svg>
                </span>
                <div>
                  <div className="text-base font-medium">
                    Enterprise security
                  </div>
                  <div className="text-sm text-white/70">
                    Role-based access & audit logs
                  </div>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <span className="shrink-0 mt-1 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 7h18M3 12h18M3 17h18"
                    />
                  </svg>
                </span>
                <div>
                  <div className="text-base font-medium">
                    Scalable architecture
                  </div>
                  <div className="text-sm text-white/70">
                    Handles millions of SKUs
                  </div>
                </div>
              </li>
            </ul>

            <a href="#" className="mt-6 text-base underline text-white/90">
              Learn more
            </a>
          </div>
        </div>
        <div className="w-1/2 p-10 flex flex-col justify-center">
          <h1 className="text-2xl font-bold border-b border-gray-300 pb-4 mb-4 w-full">
            <span className="text-blue-500">Welcome back</span>
            <span className="block text-base text-gray-600 mt-2 font-normal">
              please login to your account to access your dashboard
            </span>
          </h1>

          <form className="flex flex-col" onSubmit={handleLogin}>
            <label htmlFor="login-email" className="text-sm text-gray-700 mt-2">
              Email*
            </label>
            <input
              id="login-email"
              type="email"
              placeholder="you@company.com"
              className="border border-gray-300 rounded-lg p-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-300 text-blue-500"
              onChange={(e) => dispatch(setLoginEmail(e.target.value))}
              aria-label="Email address"
            />

            <label
              htmlFor="login-password"
              className="text-sm text-gray-700 mt-4"
            >
              Password*
            </label>
            <input
              id="login-password"
              type="password"
              placeholder="Enter your password"
              className="border border-gray-300 rounded-lg p-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-300 text-blue-500"
              onChange={(e) => dispatch(setLoginPassword(e.target.value))}
              aria-label="Password"
            />

            <div className="flex items-center justify-between mt-3">
              <label className="flex items-center gap-2 text-sm text-gray-700">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded text-blue-500"
                />
                <span>Remember me</span>
              </label>
              <a href="#" className="text-sm text-blue-500">
                Forgot?
              </a>
            </div>

            <button
              type="submit"
              className="bg-blue-500 px-6 py-3 mt-6 w-2/3 mx-auto rounded-full text-white font-semibold cursor-pointer hover:bg-blue-600 shadow"
            >
              Login
            </button>
          </form>

          <p className="mt-4 text-center text-gray-700 text-sm">
            Don't have an account?{" "}
            <a
              href="#"
              className="text-blue-500"
              onClick={() => handleSwitchToRegister()}
            >
              Register
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
