import {
    MDBCard,
    MDBCardTitle,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol
  } from 'mdb-react-ui-kit';
  
  export default function Learnmore() {
    const handleClick = ()=>{
      window.location.href = 'https://www.instagram.com/hopewrite_association?igsh=ajJkMmpnNTBnbzNw'
    }
    return (
      <section className="body-section learnmore d-flex align-items-center ">
          <MDBCard>
        <MDBRow className='g-0'>
          <MDBCol md='8'>
            <MDBCardBody>
              <MDBCardTitle>Upcoming Events & Dates</MDBCardTitle>
              <MDBCardText>
                <p className="hide-text">Join us for our upcoming events dedicated to bridging economic gaps and enhancing educational opportunities. From inspiring fundraisers to community outreach initiatives, there’s something for everyone. Check out our event calendar and get involved—your participation can help drive real change!
</p>
                <p className="show-text">Don’t miss our exciting events aimed at improving educational access. Check our calendar and join us to make a difference!</p>
              </MDBCardText>
  <button className="button-sign" onClick={handleClick}>
    <span className="text-sign">Follow Us</span>
    <svg className="arrow-sign" viewBox="0 0 448 512" height="1em" xmlns="http://www.w3.org/2000/svg"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path></svg>
  </button>
            </MDBCardBody>
          </MDBCol>
          <MDBCol md='4'>
            <MDBCardImage src='https://hopewritersassociation.my.canva.site/hope-write-inspire/images/f98599a0d44b547c428807af9df3059d.jpg' alt='...' fluid />
          </MDBCol>
        </MDBRow>
      </MDBCard>
      </section>
    );
  }