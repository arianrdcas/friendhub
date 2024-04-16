import { useState } from "react"
import BirthDate from "../components/forms/register/BirthDate"
import Button from "../components/forms/register/Button"
import ConfirmPassword from "../components/forms/register/ConfirmPassword"
import EmailAddress from "../components/forms/register/EmailAddress"
import InputLastName from "../components/forms/register/InputLastName"
import InputName from "../components/forms/register/InputName"
import Password from "../components/forms/register/Password"


const Register = () => {

const [userData, setUserData] = useState({
  name: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  birthDate: "",
});

const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const { name, value } = e.target;
  setUserData((prevState) => ({
    ...prevState,
    [name]: value,
  }));
};

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  // Aquí puedes realizar alguna acción con los datos del usuario, como enviarlos a tu servidor
  console.log(userData);
};

  return (
    <div className="flex min-h-full flex-col justify-center">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Register
        </h2>
      </div>
      <div className="m-5 sm:mx-auto sm:w-full sm:max-w-sm border-2 border-blue-600 rounded-md p-5">
        <form
          className="space-y-6"
          action="#"
          method="POST"
          onSubmit={handleSubmit}
        >
          <InputName value={userData.name} onChange={handleInputChange} />
          <InputLastName
            value={userData.lastName}
            onChange={handleInputChange}
          />
          <EmailAddress value={userData.email} onChange={handleInputChange} />
          <Password value={userData.password} onChange={handleInputChange} />
          <ConfirmPassword
            value={userData.confirmPassword}
            onChange={handleInputChange}
          />
          <BirthDate value={userData.birthDate} onChange={handleInputChange} />
          <Button />
        </form>
      </div>
    </div>
  );
}

export default Register