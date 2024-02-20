'use client';
import React, { useState } from 'react';
import PieChartLoads from '../../loads/pieChart/page';
import Year from '../../electricity/Chart/page';
 

const AppSpadeChart: React.FC = () => {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <PieChartLoads />
        <Year year={''}/>
      </div>
    </div>
  );
};

export default AppSpadeChart;