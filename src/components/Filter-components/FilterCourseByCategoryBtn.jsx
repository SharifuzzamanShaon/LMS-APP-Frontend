import * as React from 'react';
import { Button, IconButton } from '@mui/material';

export default function FilterCourseByCategoryBtn() {
  return (
    <div
      aria-label="radius button group"
      sx={{ '--ButtonGroup-radius': '40px' }}
    >
      <Button>Programming</Button>
      <Button>Node Js</Button>
      <Button>React Js</Button>
      <Button>C++</Button>
      <Button>React Js</Button>
      <IconButton>

      </IconButton>
    </div>
  );
}
