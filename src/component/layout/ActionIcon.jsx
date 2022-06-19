
import React from 'react';
import { OverlayTrigger, Tooltip, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ActionIcon = props => {
  const {icon} = props
  return <>
    <div>  
      <Button variant='link'>
        <FontAwesomeIcon icon={icon}/>
      </Button>
    </div>
    
  </>;
};

export default ActionIcon;