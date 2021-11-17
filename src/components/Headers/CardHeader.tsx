import React from 'react';

import { UsersIcon } from '@heroicons/react/outline';

import CardStatisticsItem from './CardStatisticsItem';

export default function CardHeader() {
  return (
    <div>
      <header className="flex flex-col sm:flex-row m-2 justify-between items-center h-auto">
        <div className="flex flex-grow space-x-2 justify-center">
          <CardStatisticsItem
            title="Total Beneficiaries"
            Icon={UsersIcon}
            value={100}
          />
          <CardStatisticsItem
            title="Total Males"
            Icon={UsersIcon}
            value={100}
          />
          <CardStatisticsItem
            title="Total Females"
            Icon={UsersIcon}
            value={100}
          />
          <CardStatisticsItem
            title="Weekly Records"
            Icon={UsersIcon}
            value={100}
          />
        </div>
      </header>
    </div>
  );
}
