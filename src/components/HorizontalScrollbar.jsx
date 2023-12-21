import React  from 'react';
import {Box, Typography} from '@mui/material';
import BodyPart from './BodyPart.jsx';
import { VisibilityContext } from 'react-horizontal-scrolling-menu';



const HorizontalScrollbar = ({ data, bodyPart, setBodyPart }) => {
  const itemsPerColumn = 5;

  return (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${itemsPerColumn}, 1fr)`,
          gap: '20px',
          margin: '0 auto', 
          maxWidth: '100%', 
        }}
      >
        {data.map((item) => (
          <Box key={item.id || item} itemID={item.id || item} title={item.id || item} style={{ width: '100%' }} >
            <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
          </Box>
        ))}
      </div>
  );
};

export default HorizontalScrollbar;

