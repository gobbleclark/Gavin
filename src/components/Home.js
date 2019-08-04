import React, {useState, } from 'react';
import {Grid, Image, Container,Header,} from 'semantic-ui-react';
import left from './left.jpg'
import right from './right.jpg'
import {useSpring, animated, interpolate} from 'react-spring/renderprops'
import styled, {keyframes, } from 'styled-components';
import SoftwareCard from './SoftwareCard'
import MarketingCard from './MarketingCard'
import LeftImage from './LeftImage'




const Home = (props) => {
   
   const [state, setState] = useState(true);
   const [marketing, setMarketing] = useState(true);
    
   function toggleSoftware() {
    state ? setState(false) : setState(true);
  }
   function toggleSoftwareTwo() {
    state ? setState(true) : setState(false);
  }
   function toggleMarketing() {
    marketing ? setMarketing(false) : setMarketing(true);
  }

  function ShowLeftImage() { 
    return ( {left} )
  }
  
    return (
      <>
      <div style={{backgroundColor: '#393e46'}}>
        <Container>
        <Grid  equalwidths  columns={2}>
            <Grid.Column  stretched>
            {state ? 
                  <Image
                  onMouseEnter={toggleSoftware}
                  centered
                  style = {{
                      marginRight: '-15px',
                  }}
                  size = 'large'
                  src = {left} />
            :<SoftwareCard
            />}
            </Grid.Column>
            <Grid.Column stretched >
            {marketing ? 
                  <Image
                  onMouseOver={toggleMarketing}
                  onMouseOut={!toggleMarketing}
                  style = {{
                      marginLeft: '-15px',
                  }}
                  size = 'large'
                  src = {right} />
              :  <MarketingCard /> }
            </Grid.Column>
        </Grid>
        </Container>
        </div>
        </>
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