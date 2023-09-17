import React, { useReducer, useEffect, useState } from 'react';
import AlarmOnIcon from '@mui/icons-material/AlarmOn';
import FitnessCenterTwoToneIcon from '@mui/icons-material/FitnessCenterTwoTone';
import PsychologyTwoToneIcon from '@mui/icons-material/PsychologyTwoTone';
import badGraph from '../../../assets/images/bad_graph.png';
import steadyGraph from '../../../assets/images/steady_graph.png';
import GaugedResult from './GaugedResult';
import { Button, ButtonGroup } from '@mui/material';

const roundedStyles = {
  borderRadius: '50%',
  width: '60px',
  height: '60px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '40px',
  background: 'antiquewhite',
  padding: '6px',
  marginRight: '10px',
}

const OverviewCard = ({
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

  const handleSurveyNavigation = () => {
    window.location.href = '/health?page=survey';
  }

  const handleDashboardNavigation = () => {
    window.location.href = '/health?page=dashboard';
  }

  return (
    <div className="mb-4">
      <div className="card">
        <div className="card-body">
          <div className="calc-intro d-md-flex align-items-start">
            <div>
              {LOGOS[id]}
            </div>
            <div className="ml-1">
              <h4 className="my-1">{name}</h4>
              <p>{description}</p>
            </div>
          </div>
          <div className="d-flex justify-content-between w-100">
            <span>
              <div style={{ width: 75, height: 75 }}>
                <GaugedResult
                  category={wellbeingCategory}
                  color={wellbeingColor}
                  index={wellbeingResult} />
              </div>
              <div style={{ height: '100%' }}><img src={wellbeingResult > 50 ? steadyGraph: badGraph} alt="bad graph" /></div>
            </span>
            <ButtonGroup style={{ height: '100%' }}>
              <Button variant="outlined" size="small" onClick={handleDashboardNavigation}>View</Button>
              <Button variant="contained" size="small" onClick={handleSurveyNavigation}>Start Survey</Button>
            </ButtonGroup>
          </div>
        </div>
      </div>
      <div className="d-block mt-2 text-muted">Last completed on {lastCompletedAt}</div>
    </div>
  );
}

export default OverviewCard;