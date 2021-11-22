import CardHeader from "../components/Headers/CardHeader";

export default function Dashboard() {
  return (
    <div className="flex flex-col flex-grow p-4">
      <h1 className="font-bold text-2xl text-gray-700">Dashboard</h1>

      <div className="flex flex-col flex-grow rounded mt-2">
        <CardHeader />
      </div>
    </div>
  );
}
