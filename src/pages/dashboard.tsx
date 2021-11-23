import CardHeader from "../components/Headers/CardHeader";
import Layout from "../layout/Layout";
import { Meta } from "../layout/Meta";
import { Main } from "../templates/Main";

export default function Dashboard() {
  return (
    <Main meta={<Meta title="ITEZ" description="" />}>
      <div className="flex flex-col flex-grow p-4">
        <h1 className="font-bold text-2xl text-gray-700">Dashboard</h1>

        <div className="flex flex-col flex-grow rounded mt-2">
          <CardHeader />
        </div>
      </div>
    </Main>
  );
}
