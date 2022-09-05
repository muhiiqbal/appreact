import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
} from 'mdb-react-ui-kit';
const Aboutmeetup = () => {
  return (
    <MDBCard className='text-start' >
      <MDBCardBody>
        <MDBCardTitle>About Meetup</MDBCardTitle>
        <MDBCardText>
        Come and meet other developers interested in the JavaScript and its library in the Greater Jakarta area        </MDBCardText>
      </MDBCardBody>
    </MDBCard>
  );
}
export default Aboutmeetup;