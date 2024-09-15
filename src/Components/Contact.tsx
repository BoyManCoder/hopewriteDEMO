import { MDBContainer, MDBRow, MDBCol} from 'mdb-react-ui-kit';
import Socials from './Socials';

function Contact() {
  return (
    <MDBContainer className="my-5 contact" id="contact">
      <MDBRow className="justify-content-center gradient contact-content">
        <MDBCol xs="12">
            <div className="contact">
                <h2>Contact Us</h2>
                <p>For any inquiries or support, please reach out to us through any of the means below, and we'll get back to you as soon as possible.</p>
                <div className="socials-buttons">
                    <Socials/>
                </div>
            </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Contact;
