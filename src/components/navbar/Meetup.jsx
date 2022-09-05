import React from 'react';
import {
  MDBRow,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBBtn
} from 'mdb-react-ui-kit';

const Meetup = () => {
  return (
      <MDBRow>
      <MDBRow className='g-0 mb-4'>
        <MDBCol md='3'>
          <MDBCardImage src='https://coursereport-s3-production.global.ssl.fastly.net/uploads/school/logo/322/original/Logo_Hacktiv8.jpg' />
        </MDBCol>
        <MDBCol md='2' className="text-start" >
          <MDBCardBody>
            <MDBCardTitle>Meeting Info</MDBCardTitle>
            <br/>
            <MDBCardText>
                <p>Lokasi : Semarang</p>
                <p>Member : 1110</p>
                <p>Organizer : Muhammad Iqbal</p>
            </MDBCardText>
            <MDBCardText>
                <br/>
              <MDBBtn href="#">Join Us</MDBBtn>
            </MDBCardText>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
      </MDBRow>
  );
}

export default Meetup;