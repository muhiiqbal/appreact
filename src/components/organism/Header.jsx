import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
} from 'mdb-react-ui-kit';
const Header = () => {
  return (
    <MDBCard className='text-start'>
      <MDBCardBody>
        <MDBCardTitle>Awesome MeetUp and Event</MDBCardTitle>
        <MDBCardText>
        Hello, JavaScript and Nodejs<br></br>
        Get ready for our monthly meetup JakartaJS! This will be our meetip of 2018!<br></br>
        The meetup format will constain some short stories and technical task<br></br>
        <br></br>
        Remember to bring a photo ID to get throught building security
        </MDBCardText>
      </MDBCardBody>
    </MDBCard>
  );
}
export default Header;