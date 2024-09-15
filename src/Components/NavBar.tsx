import { useState } from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBIcon
} from 'mdb-react-ui-kit';

export default function NavBar() {
  const [openNavText, setOpenNavText] = useState(false);

  return (
    <>
      <MDBNavbar expand='md' dark bgColor='dark'>
        <MDBContainer fluid className='navbar-container'>
          <MDBNavbarBrand href='#'><div className="logo-mask"><img  className="nav-img-logo" src="https://hopewritersassociation.my.canva.site/hope-write-inspire/images/eb145a4fba047e2746405c70e8b1d70a.png"/></div></MDBNavbarBrand>
          <MDBNavbarToggler
            type='button'
            data-target='#navbarText'
            aria-controls='navbarText'
            aria-expanded={openNavText}
            aria-label='Toggle navigation'
            onClick={() => setOpenNavText(!openNavText)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
          <MDBCollapse navbar open={openNavText}>
            <MDBNavbarNav className='d-flex flex-row mr-auto mb-lg-0'>
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current='page' href='#home' id=''>
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#involve'>Get Involved</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#contact'>Contact</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#'>More Info</MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
            <span className='navbar-text d-flex align-items-center tagline'>
              Empowering youth through HOPEWRITE
            </span>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>

      <div
        className='p-5 text-center bg-image'
        style={{ backgroundImage: "url('')", height: '60vh' }}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className="bg-overlay">
              <div className="overlay"></div>
              <div className='text-overlay text-white'>
              <h1 className='mb-3'>Creating Futures with HOPEWRITERS</h1>
              <p className='mb-3'>Transforming Lives Through Literature and Learning – Join Us on Our Journey to a Brighter Tomorrow</p>
              <a href="#">
                <button className="learn-more">
                  <span className="circle" aria-hidden="true">
                    <span className="icon arrow"></span>
                  </span>
                  <span className="button-text">Learn More</span>
                </button>
              </a>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
