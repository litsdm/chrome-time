import React, { useState } from 'react';

import TimeManagementTab from './components/TimeManagementTab';
import TabBar from './components/TabBar';

const tempData = [{
  category: {
    name: 'Entretainment',
    color: 'rgb(255,89,89)'
  },
  time: 307.8
}, {
  category: {
    name: 'Social Media',
    color: 'rgb(92, 160, 211)'
  },
  time: 153.9
}, {
  category: {
    name: 'Business',
    color: 'rgb(73, 190, 183)'
  },
  time: 51.3
}];

const App = () => {
  const [activeTab, setActiveTab] = useState(1);
  const sortedData = tempData.sort((a, b) => a < b ? 1 : -1);

  return (
    <>
      <TimeManagementTab timeData={sortedData} totalTime={513} />
      <TabBar activeTab={activeTab} setActiveTab={setActiveTab} />
    </>
  );
}

export default App;
