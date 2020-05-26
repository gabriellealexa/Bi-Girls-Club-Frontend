import React from 'react';
import Carousel from 'react-bootstrap/Carousel'

class MainCarousel extends React.Component {

  render() {
  return (
      
    <div> 
      <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://code.gabriellealexa.com/bgccarousel1.png"
      samesite="None"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://code.gabriellealexa.com/bgccarousel1.png"
      samesite="None"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

 </div>
    
    
  
    )}
  }

export default MainCarousel;