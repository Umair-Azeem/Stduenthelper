import React, { useState } from "react";
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
import Modal from "react-bootstrap/Modal";
import { Form, Button, Row, Col } from "react-bootstrap";
import { Chips } from "primereact/chips";

const Authentication = () => {
  const [modalShow, setModalShow] = useState(false);
  const [value, setValue] = useState("");

  const [formData, setFormData] = useState({
    type: "",
    name: "",
    email: "",
    university: "",
    age: "",
    number: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log("Form Data Submitted:", formData);
  };

  return (
    <>
      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <h2>User Form</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group as={Row} className="mb-3">
              <Form.Label as="legend" column sm={2}>
                Type
              </Form.Label>
              <Col sm={10}>
                <Form.Check
                  type="radio"
                  label="Helper"
                  name="type"
                  value="Helper"
                  checked={formData.type === "Helper"}
                  onChange={handleChange}
                />
                <Form.Check
                  type="radio"
                  label="Seeker"
                  name="type"
                  value="Seeker"
                  checked={formData.type === "Seeker"}
                  onChange={handleChange}
                />
              </Col>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formUniversity">
              <Form.Label>University</Form.Label>
              <Form.Control
                type="text"
                name="university"
                value={formData.university}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formAge">
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                required
                min="0"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formNumber">
              <Form.Label>Number</Form.Label>
              <Form.Control
                type="text"
                name="number"
                value={formData.number}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formNumber">
              <Form.Label>Subjects</Form.Label>
              <Chips
                value={value}
                onChange={(e) => setValue(e.value)}
                separator=","
                style={{
                  borderWidth: 0.25,
                  borderColor: "black",
                  border: "solid",
                  borderRadius: 8,
                }}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setModalShow(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
      {/* Login below  */}
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
                  <a
                    href="#!"
                    style={{ color: "#393f81" }}
                    onClick={() => setModalShow(true)}
                  >
                    Register here
                  </a>
                </p>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCard>
      </MDBContainer>
    </>
  );
};

export default Authentication;
