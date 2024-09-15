import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption } from 'mdb-react-ui-kit';

export default function Banner() {
  return (
    <section id="home">
          <MDBCarousel showIndicators showControls fade>
      <MDBCarouselItem itemId={1}>
        <img src='https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg' className='d-block w-100' alt='...' />
        <MDBCarouselCaption className='carousel-caption'>
          <h5>Creating Futures with HOPEWRITERS</h5>
          <p>Transforming Lives Through Literature and Learning – Join Us on Our Journey to a Brighter Tomorrow</p>
          
<button className="learn-more">
  <span className="circle" aria-hidden="true">
  <span className="icon arrow"></span>
  </span>
  <span className="button-text">Learn More</span>
</button>
        </MDBCarouselCaption>
      </MDBCarouselItem>

      <MDBCarouselItem itemId={2}>
        <img src='https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg' className='d-block w-100' alt='...' />
        <MDBCarouselCaption className='carousel-caption'>
          <h5>Empowering Communities Through Education</h5>
          <p>Supporting Local Initiatives and Making Education Accessible to All – Together, We Build Stronger Communities</p>
          
<button className="learn-more">
  <span className="circle" aria-hidden="true">
  <span className="icon arrow"></span>
  </span>
  <span className="button-text">Learn More</span>
</button>
        </MDBCarouselCaption>
      </MDBCarouselItem>

      <MDBCarouselItem itemId={3}>
        <img src='https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg' className='d-block w-100' alt='...' />
        <MDBCarouselCaption className='carousel-caption'>
          <h5>Fostering a Love for Literature and Learning</h5>
          <p>Creating Opportunities for Personal Growth and Discovery – Join Us in Celebrating the Joy of Reading and Learning</p>
        </MDBCarouselCaption>
      </MDBCarouselItem>
    </MDBCarousel>
    </section>
  );
}
