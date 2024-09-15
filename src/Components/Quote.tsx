import {
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBTypography
} from 'mdb-react-ui-kit';

export default function Quote() {
  return (
    <section className="body-section">
            <MDBCard className='text-center quote'>
      <MDBCardHeader className='quote-head'>Quote</MDBCardHeader>
      <MDBCardBody>
        <MDBTypography blockquote className='mb-0'>
          <p>"The power of the pen is mightier than the sword."</p>
          <footer className='blockquote-footer p'>
          Edward Bulwer-Lytton
          </footer>
        </MDBTypography>
      </MDBCardBody>
    </MDBCard>
    </section>
  );
}