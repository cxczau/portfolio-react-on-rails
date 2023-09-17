import React, { useReducer, useEffect, useState } from 'react';
import AlarmOnIcon from '@mui/icons-material/AlarmOn';
import FitnessCenterTwoToneIcon from '@mui/icons-material/FitnessCenterTwoTone';
import PsychologyTwoToneIcon from '@mui/icons-material/PsychologyTwoTone';
import badGraph from '../../../assets/images/bad_graph.png';
import steadyGraph from '../../../assets/images/steady_graph.png';
import GaugedResult from './GaugedResult';
import { Button, ButtonGroup } from '@mui/material';

const QuestionCard = ({
  survey: {
    id,
    name,
    description,
    logoSrc,
    wellbeingResult,
    wellbeingColor,
    wellbeingCategory,
    lastCompletedAt
  }
}) => {
  const LOGOS = {
    'A': <AlarmOnIcon sx={roundedStyles} />,
    'B': <FitnessCenterTwoToneIcon sx={roundedStyles} />,
    'C': <PsychologyTwoToneIcon sx={roundedStyles} />,
  }

  return (
    <div className="mb-4">
      
    </div>
  );
}

export default QuestionCard;