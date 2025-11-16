import { useDispatch, useSelector } from "react-redux";
import { setIsLoginModalOpen } from "../store/InteractionSlice";
import {
  setLoginEmail,
  setLoginPassword,
  clearLoginState,
} from "../store/LoginSlice";
import type { RootState } from "../store";
import { useMutation } from "@apollo/client/react";
import LoginUser from "../gql/mutations/loginMutation.gql";
import { type LoginUserResponse } from "../types/loginuserresponse";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const LoginModal = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClose = () => {
    dispatch(setIsLoginModalOpen(false));
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
          console.log("Storing token:", response.data.loginUser.token);
          localStorage.setItem("token", response.data.loginUser.token);
          console.log("Storing userId:", response.data.loginUser.id);
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
        className="bg-white rounded-2xl shadow-lg p-10 w-1/2 z-50"
        onClick={(e) => e.stopPropagation()}
      >
        <h1 className="text-2xl font-bold border-b border-gray-300 pb-4 mb-4 w-full">
          <span className="text-lime-500">Welcome back</span> - please login to
          your account
        </h1>
        <form className="flex flex-col" onSubmit={handleLogin}>
          <h1 className="text-sm text-gray-700 mt-2">Email*</h1>
          <input
            type="email"
            className="border border-gray-300 rounded-lg p-2"
            onChange={(e) => dispatch(setLoginEmail(e.target.value))}
          />
          <h1 className="text-sm text-gray-700 mt-4">Password*</h1>
          <input
            type="password"
            className="border border-gray-300 rounded-lg p-2"
            onChange={(e) => dispatch(setLoginPassword(e.target.value))}
          />
          <button className="bg-lime-500 px-4 py-2 mt-8 w-2/3 align mx-auto rounded-full cursor-pointer hover:bg-lime-600">
            Login
          </button>
        </form>
        <h1 className="mt-4 text-center text-gray-700 text-sm">
          Already have an Account?{" "}
          <span className="text-lime-500 cursor-pointer">Login</span>
        </h1>
      </div>
    </div>
  );
};

export default LoginModal;
