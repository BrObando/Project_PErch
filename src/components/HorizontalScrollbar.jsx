import React  from 'react';
import {Box, Typography} from '@mui/material';
import BodyPart from './BodyPart.jsx';
import {ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';



const HorizontalScrollbar = ({ data, bodyPart, setBodyPart }) => {
  const itemsPerColumn = 5;

  return (
    <ScrollMenu>
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
          <Box key={item.id || item} itemId={item.id || item} title={item.id || item} style={{ width: '100%' }} >
            <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
          </Box>
        ))}
      </div>
    </ScrollMenu>
  );
};

export default HorizontalScrollbar;

