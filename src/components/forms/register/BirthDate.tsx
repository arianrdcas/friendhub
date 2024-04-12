

function BirthDate() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <label
          htmlFor="birth_date"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Birth Date
        </label>
        <div className="text-sm"></div>
      </div>
      <div className="mt-2">
        <input
          id="birth_date"
          name="birth_date"
          type="birth_date"
          autoComplete={"birth_date"}
          required
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  );
}

export default BirthDate