import React, { useReducer, useEffect, useState } from 'react';
import { Divider, Paper } from '@mui/material';
import OverviewCard from './OverviewCard';
import dayjs from 'dayjs';

const OverviewPage = () => {
  const SURVEYS = [
    {
      id: 'a',
      name: 'Survey Type A',
      description: 'A short weekly survey to see how you are doing',
      lastCompletedAt: dayjs().subtract(1, 'day').format('DD/MM/YYYY'),
      wellbeingResult: 39,
      wellbeingColor: 'red',
      wellbeingCategory: 'Low',
    },
    {
      id: 'b',
      name: 'Survey Type B',
      description: 'A medium length survey to see how you are doing',
      lastCompletedAt: dayjs().subtract(1, 'week').format('DD/MM/YYYY'),
      wellbeingResult: 71,
      wellbeingColor: 'yellow',
      wellbeingCategory: 'Thriving',
    },
    {
      id: 'c',
      name: 'Survey Type C',
      description: 'A comprehensive survey to see how you are doing',
      lastCompletedAt: dayjs().subtract(3, 'day').format('DD/MM/YYYY'),
      wellbeingResult: 91,
      wellbeingColor: 'green',
      wellbeingCategory: 'Excelling',
    },
  ]

  return (
    <Paper elevation={3} className="p-4" style={{ height: "100vh" }} >
      <div className="pt-2">
        <h1>Hi Charles</h1>
        <p>Organisation: Amazon</p>
        <p>Team: Finance</p>
      </div>

      <Divider className="my-4" />

      {SURVEYS.map((survey) => (
        <OverviewCard key={survey.id} survey={survey} />
      ))}
    </Paper>
  );
}

export default OverviewPage;