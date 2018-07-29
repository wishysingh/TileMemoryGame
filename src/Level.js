import React from 'react';
import {ButtonToolbar} from 'react-bootstrap';
import {Button} from 'react-bootstrap';

const Level = ({mode}) => {
    return(
        <div>
            <ButtonToolbar>
            <Button bsStyle="success" onClick={()=>mode(4)} >EASY</Button>
            <Button bsStyle="warning" onClick={()=>mode(8)}>MEDIUM</Button>
            <Button bsStyle="danger" onClick={()=>mode(12)}>HARD</Button>
            </ButtonToolbar>
        </div>
    )
}
export default Level;