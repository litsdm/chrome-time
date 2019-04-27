import React, { useState } from 'react';

import TimeManagementTab from './components/TimeManagementTab';
import TabBar from './components/TabBar';

const App = () => {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <>
      <TimeManagementTab />
      <TabBar activeTab={activeTab} setActiveTab={setActiveTab} />
    </>
  );
}

export default App;
