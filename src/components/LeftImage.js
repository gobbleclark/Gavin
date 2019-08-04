import React from 'react';
import left from './left.jpg'
import {Image,} from 'semantic-ui-react';

const LeftImage = (props) => {
    return (
        <Image
                  centered
                  style = {{
                      marginRight: '-15px',
                  }}
                  size = 'large'
                  src = {left} />
    )
}

export default LeftImage