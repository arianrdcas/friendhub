import { useState } from "react";
import { Link } from "react-router-dom";
import ButtonLogin from "../components/forms/login/ButtonLogin";
import InputEmailLogin from "../components/forms/login/InputEmailLogin";
import InputPasswordLogin from "../components/forms/login/InputPasswordLogin";

const Login = () => {

  const [userLoginData, setUserLoginData] = useState({
    emailLogin: "",
    passwordLogin: ""
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserLoginData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes realizar alguna acción con los datos del usuario, como enviarlos a tu servidor
    console.log(userLoginData);
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm border-2 border-blue-600 rounded-md p-5">
          <form
            className="space-y-6"
            action="#"
            method="POST"
            onSubmit={handleSubmit}
          >
            <InputEmailLogin 
            value={userLoginData.emailLogin} 
            onChange={handleInputChange} 
            />
            <InputPasswordLogin
              value={userLoginData.passwordLogin}
              onChange={handleInputChange}
            />
            <ButtonLogin />
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{" "}
            <Link
              to="/register"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Start a 14 day free trial
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
