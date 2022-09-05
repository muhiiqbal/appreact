import React from 'react';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
  MDBRow,
  MDBCol,
  MDBBtn
} from 'mdb-react-ui-kit';
const Pastmeetups = () => {
  return (
    <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
      <MDBCol>
        <MDBCard className='text-start'>
          <MDBCardBody>
            <MDBCardTitle>27 November 2017</MDBCardTitle>
            <MDBCardText>
              #39 JakartaJS April Meetup with kumparan<br></br>
              139 went
            </MDBCardText>
            <MDBBtn>
                View
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='text-start'>
          <MDBCardBody>
            <MDBCardTitle>27 Oktober 2017</MDBCardTitle>
            <MDBCardText>
              #38 JakartaJS April Meetup with BliBli<br></br>
              113 went
            </MDBCardText>
            <MDBBtn>
                View
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard className='text-start'>
          <MDBCardBody>
            <MDBCardTitle>27 September 2017</MDBCardTitle>
            <MDBCardText>
            #37 JakartaJS April Meetup with Hacktiv8<br></br>
            110 went
            </MDBCardText>
            <MDBBtn>
                View
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  );
}
export default Pastmeetups;