import BirthDate from "../components/forms/register/BirthDate"
import Button from "../components/forms/register/Button"
import ConfirmPassword from "../components/forms/register/ConfirmPassword"
import EmailAddress from "../components/forms/register/EmailAddress"
import InputLastName from "../components/forms/register/InputLastName"
import InputName from "../components/forms/register/InputName"
import Password from "../components/forms/register/Password"


const Register = () => {
  return (
    <div className="flex min-h-full flex-col justify-center">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Register
        </h2>
      </div>
      <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm border-2 border-blue-600 rounded-md p-5">
        <form className="space-y-6" action="#" method="POST">
          <InputName/>
          <InputLastName/>
          <EmailAddress />
          <Password/>
          <ConfirmPassword/>
          <BirthDate/>
          <Button/>
        </form>
      </div>
    </div>
  );
}

export default Register