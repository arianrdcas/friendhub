interface InputConfirmPasswordeProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ConfirmPassword: React.FC<InputConfirmPasswordeProps> = ({
  value,
  onChange,
}) => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <label
          htmlFor="password"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Confirm Password
        </label>
        <div className="text-sm"></div>
      </div>
      <div className="mt-2">
        <input
          id="confirmPassword"
          name="confirmPassword"
          type="confirmPassword"
          autoComplete={"off"}
          required
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default ConfirmPassword;
