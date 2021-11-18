export default function Users() {
  return (
    <div className="flex pt-4 pl-4 justify-between">
      <div className="flex">
        <h1 className="font-bold text-2xl text-gray-700">Users</h1>
      </div>

      <div className="flex space-x-4 text-gray-400 mr-3">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-8 rounded">
          Add User
        </button>
      </div>
    </div>
  );
}
