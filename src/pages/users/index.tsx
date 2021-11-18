import { NextPage } from 'next';
import Spinner from "../../components/Spinner"
import fetchData from "../../utils/fetcherHelper"
import UserTable from "./UserTable";


const UserList: NextPage = () => {

  const {data, isLoading } = fetchData('users');

  return (
    <>
      {isLoading? <Spinner/>: data? <UserTable data={data}/>: <div className="flex justify-center items mt-8"><h2>An error occurred</h2></div>}
    </>
  );
};

export default UserList;
