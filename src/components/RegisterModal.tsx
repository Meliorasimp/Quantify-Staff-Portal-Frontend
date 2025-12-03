import { setIsRegisterModalOpen } from "../store/InteractionSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  setFirstName,
  setLastName,
  setEmail,
  setPassword,
  setConfirmPassword,
} from "../store/RegisterSlice";
import type { RootState } from "../store";
import type React from "react";
import { useMutation } from "@apollo/client/react";
import RegisterUser from "../gql/mutations/userMutation/registerMutation.gql";
import { switchToLoginModal } from "../store/InteractionSlice";

const RegisterModal = () => {
  const dispatch = useDispatch();
  const firstname = useSelector((state: RootState) => state.register.firstName);
  const lastname = useSelector((state: RootState) => state.register.lastName);
  const email = useSelector((state: RootState) => state.register.email);
  const password = useSelector((state: RootState) => state.register.password);
  const confirmPassword = useSelector(
    (state: RootState) => state.register.confirmPassword
  );

  const [registerUser] = useMutation(RegisterUser);

  const handleClose = () => {
    dispatch(setIsRegisterModalOpen(false));
  };

  const handleRegisterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    if (!firstname || !lastname || !email || !password) {
      alert("Please fill in all required fields");
      return;
    }

    try {
      const Response = await registerUser({
        variables: {
          firstname: firstname,
          lastname: lastname,
          email: email,
          password: password,
        },
      });

      console.log("User registered successfully:", Response.data);

      // Success - close modal
      dispatch(setIsRegisterModalOpen(false));
      alert("Registration successful! Welcome aboard!");
    } catch (err: unknown) {
      console.error("Registration error:", err);
      console.error("Full error object:", JSON.stringify(err, null, 2));

      const apolloError = err as {
        graphQLErrors?: Array<{ message: string }>;
        networkError?: { message: string; statusCode?: number };
        message?: string;
      };

      // Handle GraphQL errors (validation, business logic errors)
      if (apolloError.graphQLErrors && apolloError.graphQLErrors.length > 0) {
        const errorMessages = apolloError.graphQLErrors
          .map((error) => error.message)
          .join("\n");
        alert(`Registration failed:\n${errorMessages}`);
        return;
      }

      // Handle network errors
      if (apolloError.networkError) {
        console.error("Network error:", apolloError.networkError);
        const statusCode = apolloError.networkError.statusCode;
        if (statusCode === 400) {
          alert("Registration failed: Please check your input data.");
        } else if (statusCode && statusCode >= 500) {
          alert("Server error: Please try again later.");
        } else {
          alert(`Network error: ${apolloError.networkError.message}`);
        }
        return;
      }

      // Handle other errors
      const fallbackMessage = apolloError.message || "Unknown error occurred";
      alert(
        `An unexpected error occurred during registration: ${fallbackMessage}\nPlease check the console for more details.`
      );
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-40"
      onClick={handleClose}
    >
      <div
        className="bg-white rounded-2xl shadow-lg w-4/5 z-50 h-3/4 overflow-y-auto flex"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Right: registration form */}
        <div className="w-1/2 p-10 flex flex-col justify-center">
          <h1 className="text-2xl font-bold border-b border-gray-300 pb-4 mb-4 w-full">
            <span className="text-blue-500">Organize smarter</span>
            <span className="block text-base text-gray-600 mt-2 font-normal">
              start your free account
            </span>
          </h1>

          <form
            className="flex flex-col gap-y-4"
            onSubmit={handleRegisterSubmit}
          >
            <div className="flex flex-row gap-x-4">
              <div className="flex flex-col w-1/2">
                <label htmlFor="first-name" className="text-sm text-gray-700">
                  First name*
                </label>
                <input
                  id="first-name"
                  type="text"
                  className="border border-gray-300 p-3 rounded-md w-full text-base focus:outline-none focus:ring-2 focus:ring-lime-300"
                  value={firstname}
                  onChange={(e) => dispatch(setFirstName(e.target.value))}
                />
              </div>
              <div className="flex flex-col w-1/2">
                <label htmlFor="last-name" className="text-sm text-gray-700">
                  Last name*
                </label>
                <input
                  id="last-name"
                  type="text"
                  className="border border-gray-300 p-3 rounded-md w-full text-base focus:outline-none focus:ring-2 focus:ring-lime-300"
                  value={lastname}
                  onChange={(e) => dispatch(setLastName(e.target.value))}
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label htmlFor="register-email" className="text-sm text-gray-700">
                Email*
              </label>
              <input
                id="register-email"
                type="email"
                className="border border-gray-300 p-3 rounded-md w-full text-base focus:outline-none focus:ring-2 focus:ring-lime-300"
                value={email}
                onChange={(e) => dispatch(setEmail(e.target.value))}
              />
            </div>

            <div className="flex flex-row gap-x-4">
              <div className="flex flex-col w-1/2">
                <label
                  htmlFor="register-password"
                  className="text-sm text-gray-700"
                >
                  Password*
                </label>
                <input
                  id="register-password"
                  type="password"
                  className="border border-gray-300 p-3 rounded-md w-full text-base focus:outline-none focus:ring-2 focus:ring-lime-300"
                  value={password}
                  onChange={(e) => dispatch(setPassword(e.target.value))}
                />
              </div>
              <div className="flex flex-col w-1/2">
                <label
                  htmlFor="confirm-password"
                  className="text-sm text-gray-700"
                >
                  Confirm Password*
                </label>
                <input
                  id="confirm-password"
                  type="password"
                  className="border border-gray-300 p-3 rounded-md w-full text-base focus:outline-none focus:ring-2 focus:ring-lime-300"
                  value={confirmPassword}
                  onChange={(e) => dispatch(setConfirmPassword(e.target.value))}
                />
              </div>
            </div>

            <button className="bg-blue-500 px-6 py-3 w-2/3 mx-auto mt-4 rounded-full text-white font-semibold hover:bg-blue-600 shadow cursor-pointer transition-colors duration-200">
              Register
            </button>
          </form>

          <p className="text-xs text-gray-500 mt-4 text-center">
            By registering, you agree to our Terms of Service and Privacy
            Policy.
          </p>
          <p className="text-xs text-gray-500 mt-4 text-center">
            Already have an account?{" "}
            <span
              className="text-blue-500 cursor-pointer"
              onClick={() => dispatch(switchToLoginModal())}
            >
              Login
            </span>
          </p>
        </div>

        {/* Right: registration form */}
        {/* Left decorative panel (gradient + pattern) */}
        <div className="relative w-1/2 rounded-tr-2xl rounded-br-2xl overflow-hidden">
          <div
            className="absolute inset-0"
            aria-hidden="true"
            style={{
              background:
                "linear-gradient(135deg,#0ea5a4 0%,#3b82f6 50%,#6366f1 100%)",
            }}
          />

          <svg
            className="absolute inset-0 w-full h-full opacity-10"
            aria-hidden="true"
            preserveAspectRatio="none"
            viewBox="0 0 800 600"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="g2" x1="0" x2="1">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.06" />
                <stop offset="100%" stopColor="#000000" stopOpacity="0.02" />
              </linearGradient>
            </defs>
            <rect width="800" height="600" fill="url(#g2)" />
            <g fill="none" stroke="#fff" strokeOpacity="0.03" strokeWidth="1">
              <path d="M0 100 L800 0" />
              <path d="M0 200 L800 100" />
              <path d="M0 300 L800 200" />
              <path d="M0 400 L800 300" />
              <path d="M0 500 L800 400" />
            </g>
          </svg>

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
                  d="M12 11c0-3.866 3.582-7 8-7v14c-4.418 0-8-3.134-8-7z"
                />
              </svg>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold drop-shadow-md">
              Join Quantify
            </h2>
            <p className="text-base sm:text-lg text-white/80 mt-3 max-w-md">
              Start your free account — streamline inventory, orders and
              analytics.
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
                  <div className="text-base font-medium">Free trial</div>
                  <div className="text-sm text-white/70">
                    14-day access to premium features
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
                      d="M12 11c0-1.657 1.343-3 3-3s3 1.343 3 3"
                    />
                  </svg>
                </span>
                <div>
                  <div className="text-base font-medium">Enterprise-ready</div>
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
                  <div className="text-base font-medium">Scalable</div>
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
      </div>
    </div>
  );
};

export default RegisterModal;
