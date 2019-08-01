import React from 'react';
import {Grid, Image, Container,Header,} from 'semantic-ui-react';
import left from './left.jpg'
import right from './right.jpg'
import {useSpring, animated, interpolate} from 'react-spring/renderprops'
import styled, {keyframes, } from 'styled-components';



const Home = () => {
   
    
   
    return (
        <Container>
        <Grid equalwidths  columns={2}>
       
            <Grid.Column stretched>
            <Fade>
                <Image 
                centered
                style = {{
                    marginRight: '-15px',
                }}
                size = 'large'
                src = {left} />
            </Fade>
            </Grid.Column>
            <Grid.Column stretched >
            <Fade> 
                <Image
                style = {{
                    marginLeft: '-15px',
                }}
                size = 'large'
                src = {right} />
            </Fade>
            </Grid.Column>
        </Grid>
        </Container>
    )
}

const fadeIn = keyframes`
  from {
    transform: scale(.25);
    opacity: 0;
  }

  to {
    transform: scale(1);
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    transform: scale(1);
    opacity: 0;
  }

  to {
    transform: scale(.5);
    opacity: 1;
  }
`;

const Fade = styled.div`
  ${props => props.out ?
    `display: none;`
   : `display: inline-block;`
   }
  animation: ${props => props.out ? fadeOut : fadeIn} 1.5s linear;
`;

export default Home