import React, {useState} from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarBrand,
  MDBCollapse
} from 'mdb-react-ui-kit';

const Navbar = () => {
  const [showNavColor] = useState(false);

  return (
    <>
      <MDBNavbar expand='lg' dark bgColor='dark' className='mb-2'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>QTemu</MDBNavbarBrand>
          <MDBCollapse show={showNavColor} navbar id='navbarColor02'>
            <MDBNavbarNav className='me-auto mb-2 mb-lg-0'>
              <MDBNavbarItem>
                <MDBNavbarLink href='#'>Create Meetup</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#'>Explore</MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
          <MDBCollapse show={showNavColor} navbar id='navbarColor02'>
            <MDBNavbarNav className='me-auto mb-2 mb-lg-0'>
              <MDBNavbarItem>
                <MDBNavbarLink href='#'>Login</MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
      </MDBNavbar>
    </>
  );
}

export default Navbar;