import Image from 'next/image';

import { Meta } from '../layout/Meta';
import styles from '../styles/location.module.css';
import { Main } from '../templates/Main';

const Location = () => (
  <Main meta={<Meta title="ITEZ" description="ITEZ Frontend" />}>
    <div className=" h-screen">
      {' '}
      <div className="flex  flex-col  w-full h-full ">
        <div className={styles.grad}>
          <div className="">
            <h1>Location</h1>
            <div className="flex ">
              <Image
                className=" justify-center z-10 "
                src="/map.svg"
                width={900}
                height={600}
              />
            </div>
            <ul>
              <li>Lat/Long: -15, 30 </li>
              <li>Province: Lusaka</li>
              <li>District: Chongwe</li>
              <li>Service Area: Chongwe</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </Main>
);

export default Location;
