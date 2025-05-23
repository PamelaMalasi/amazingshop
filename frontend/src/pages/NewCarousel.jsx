import React from "react";
import { Container,  Card } from "react-bootstrap";
import MultiCarousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import coolimg1 from '../images/cool1.png';
import coolimg2 from '../images/cool3.jpeg';
import coolimg3 from '../images/cool4.jpg';
import coolimg4 from '../images/cool5.jpeg';
import coolimg5 from '../images/cool6.jpeg';
import coolimg7 from '../images/coolimg7.jpg';
import coolimg11 from '../images/coolimg11.jpg';
import "./NewCarousel.css";

const NewCarousel = () => {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 992 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 992, min: 768 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 768, min: 0 },
          items: 1
        }
      };
  return (
    <div>
         <Container className="my-5">
  <div className="top-picks2">
    <h2>More Cool Stuff Coming Soon</h2> 
  </div>
</Container>

<Container className="my-5">

  <MultiCarousel responsive={responsive} autoPlay={true} infinite={true} arrows={true}>
    <Card className="mx-2">
      <Card.Img variant="top" src={coolimg1} className="carousel-card-img" />
      <Card.Body>
        <Card.Title>Electronics</Card.Title>
      </Card.Body>
    </Card>

    <Card className="mx-2">
    <Card.Img variant="top" src={coolimg2} className="carousel-card-img"/>
      <Card.Body>
        <Card.Title>Cool Item</Card.Title>
      </Card.Body>
    </Card>

    <Card className="mx-2">
    <Card.Img variant="top" src={coolimg3} className="carousel-card-img"/>
      <Card.Body>
        <Card.Title>Home</Card.Title>
      </Card.Body>
    </Card>
    <Card className="mx-2">
    <Card.Img variant="top" src={coolimg11} className="carousel-card-img"/>
      <Card.Body>
        <Card.Title>New Tech</Card.Title>
      </Card.Body>
    </Card>
    <Card className="mx-2">
    <Card.Img variant="top" src={coolimg4} className="carousel-card-img"/>
      <Card.Body>
        <Card.Title>Beauty</Card.Title>
      </Card.Body>
    </Card>
    <Card className="mx-2">
    <Card.Img variant="top" src={coolimg5} className="carousel-card-img"/>
      <Card.Body>
        <Card.Title>Device</Card.Title>
      </Card.Body>
    </Card>
    <Card className="mx-2">
    <Card.Img variant="top" src={coolimg7} className="carousel-card-img"/>
      <Card.Body>
        <Card.Title>Electronics</Card.Title>
      </Card.Body>
    </Card>
  </MultiCarousel>
</Container>

    </div>
  )
}

export default NewCarousel
