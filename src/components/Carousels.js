import Carousel from 'react-bootstrap/Carousel';
function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img src="https://storage.pixteller.com/designs/designs-images/2020-12-21/06/headphones-sales-banner-1-5fe0c6a0c06bc.png" width="100%" height="600px"></img>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src="https://i0.wp.com/fiitii.com/wp-content/uploads/2022/06/O5-plus-banner.webp?resize=1920%2C980&ssl=1" width="100%" height="600px"></img>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src="https://mahajanelectronics.com/cdn/shop/articles/Mahajan_banner_18.jpg?v=1705637899" width="100%" height="600px"></img>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;