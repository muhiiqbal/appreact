import React from "react";
import {
MDBListGroup,
MDBListGroupItem,
MDBCardBody,
MDBCardTitle,
MDBCard,
} from "mdb-react-ui-kit";
import photo from "../../assets/photo.jpeg"
const Member = () => {
  return (
    <MDBCard className='text-start' >
    <MDBCardBody>
      <MDBCardTitle>Members</MDBCardTitle>
      <MDBListGroup light className="mb-4">
          <MDBListGroupItem className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <img
                src={photo}
                alt=""
                style={{ width: "45px", height: "45px" }}
                className="rounded-circle"
              />
              <div className="ms-3">
                <p className="fw-bold mb-1">Organizers</p>
                <p className="text-muted mb-0">Muhammad Iqbal   5 Others</p>
              </div>
            </div>
          </MDBListGroupItem>
        </MDBListGroup>
    </MDBCardBody>
  </MDBCard>
  );
};
export default Member;
