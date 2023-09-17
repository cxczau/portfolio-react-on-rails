import React from "react"
import { CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar"

const GaugedResult = ({ index, category, color }) => {
  console.log(index, category, color);
  if (!index) return null
  return (
    <div className='gauge-container' style={{ margin: 'auto', maxHeight: 300, maxWidth: 300 }}>
      <CircularProgressbarWithChildren
        value={index}
        circleRatio={0.80}
        styles={buildStyles({
          strokeLinecap: 'butt',
          rotation: 0.6,
          pathColor: `${color}`,
          trailColor: '#d6d6d6',
        })
      }>
        <div className='gauge-text'>
          <div className='d-flex flex-column align-items-center' style={{ fontSize: '0.75rem', fontWeight: 'bold' }}>{index}</div>
          <div style={{ fontSize: '0.75rem', fontWeight: 'bold' }}>{category}</div>
        </div>
      </CircularProgressbarWithChildren>
    </div>
  )
}

export default GaugedResult
