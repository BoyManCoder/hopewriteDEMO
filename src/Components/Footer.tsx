import {
  MDBFooter,
  MDBContainer,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';
import Socials from './Socials';

export default function Footer() {
  return (
    <MDBFooter className='text-center footer' color='white' bgColor='dark'>
      <MDBContainer className='p-4'>

        <section className=''>
          <form action=''>
            <MDBRow className='d-flex justify-content-center'>
              <MDBCol size="auto">
              <section id="footer-socials">
          <Socials/>
        </section>
              </MDBCol>
              <MDBCol md='5' className='d-flex align-items-center' >
                <MDBInput contrast type='email' label='Email address' className='' />
              </MDBCol>

              <MDBCol size="auto">
                <MDBBtn outline color='light' type='submit' className='mt-3'>
                  Subscribe
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </form>
        </section>
        <section className='w-50 m-auto mb-4'>
          <p>
            Join our newsletter to be notified of the latest in the HOPEWRITE community
          </p>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2024 Copyright:
        <a className='text-white' href='https://mdbootstrap.com/'>
          HopeWrite Association
        </a>
      </div>
    </MDBFooter>
  );
}