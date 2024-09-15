import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';

export default function SignUp() {
  const handleClick = ()=>{
    window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSfgCI0YAZGMNE0hFuv-tsZF3SeiI6MILGE6YbL3brZCiYGM1w/viewform'
  }
  return (
    <section className="body-section card-section d-flex align-items-center justify-content-flex-start" id="involve">
        <MDBCard>
      <MDBRow className='g-0'>
        <MDBCol md='4'>
          <MDBCardImage src='https://hopewritersassociation.my.canva.site/hope-write-inspire/images/89c75ee2b4ea21616de2e70836495872.png' alt='...' fluid />
        </MDBCol>
        <MDBCol md='8'>
          <MDBCardBody>
            <MDBCardTitle>Join The Team</MDBCardTitle>
            <MDBCardText>
              <p className="hide-text">We are looking for passionate individuals to help us bridge economic gaps and expand access to education. Whether you're interested in organizing events, volunteering, or offering your skills, your involvement can drive real change. Join us and be a part of something meaningful—together, we can make a difference!</p>
              <p className="show-text">Help us bridge economic gaps and expand educational access. Get involved by volunteering or contributing your skills. Together, we can make a meaningful impact!</p>
            </MDBCardText>
<button className="button-sign" onClick={handleClick}>
  <span className="text-sign">Sign Up</span>
  <svg className="arrow-sign" viewBox="0 0 448 512" height="1em" xmlns="http://www.w3.org/2000/svg"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path></svg>
</button>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>
    </section>
  );
}