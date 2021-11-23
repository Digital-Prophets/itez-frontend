import { Meta } from "../layout/Meta";
import { Main } from "../templates/Main";

export default function location() {
  return (
    <Main meta={Meta}>
      <div className="main-content flex flex-col flex-grow p-4">
        <h1 className="font-bold text-2xl text-gray-700">Location</h1>

        <div className="flex flex-col flex-grow border-4 border-gray-400 border-dashed bg-white rounded mt-4"></div>
      </div>
    </Main>
  );
}
