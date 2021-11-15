import LineChart from '../components/LineChart';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const Dashboard = () => (
  <Main meta={<Meta title="Dash" description="dash" />}>
    <div>
      <h2>Overview</h2>

      <div>
        <LineChart />
      </div>
    </div>
  </Main>
);

export default Dashboard;
