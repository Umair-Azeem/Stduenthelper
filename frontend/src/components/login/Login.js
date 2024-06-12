import React from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput,
} from "mdb-react-ui-kit";

import Button from "react-bootstrap/Button";

import "./Login.css";

const Login = () => {
  return (
    <MDBContainer className="my-5 d-flex justify-content-center">
      <MDBCard style={{ maxWidth: "900px" }}>
        <MDBRow className="g-0">
          <MDBCol md="6">
            <MDBCardImage
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
              alt="login form"
              className="rounded-start w-100"
              style={{ height: 500 }}
            />
          </MDBCol>

          <MDBCol md="6">
            <MDBCardBody className="d-flex flex-column justify-content-center">
              <div className="d-flex flex-row mt-2">
                <MDBIcon
                  fas
                  icon="cubes fa-3x me-3"
                  style={{ color: "#ff6219" }}
                />
                <span className="h4 fw-bold mb-3">Login</span>
              </div>

              <MDBInput
                wrapperClass="mb-4"
                label="Email address"
                id="formControlLg"
                type="email"
                size="lg"
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Password"
                id="formControlLg"
                type="password"
                size="lg"
              />

              <Button
                className="mb-4 px-5"
                color="dark"
                onClick={() => console.log("yo")}
                style={{
                  transform: "none",
                  scale: 1,
                }}
              >
                Login
              </Button>

              <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                Don't have an account?{" "}
                <a href="#!" style={{ color: "#393f81" }}>
                  Register here
                </a>
              </p>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </MDBContainer>
  );
};

export default Login;
