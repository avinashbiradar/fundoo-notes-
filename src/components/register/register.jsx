import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';
import TextField from '@material-ui/core/TextField';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import './register.scss';
import Typography from "@material-ui/core/Typography";
import registration from "../../services/userservice";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      Rpassword: "",
    };
  }

  handleFirstNameInput = (event) => {
    event.preventDefault();
    this.setState({
      firstName: event.target.value,
    });
  };
  handleLastNameInput = (event) => {
    event.preventDefault();
    this.setState({
      lastName: event.target.value,
    });
  };
  handleEmailInput = (event) => {
    event.preventDefault();
    this.setState({
      email: event.target.value,
    });
  };
  handlePasswordInput = (event) => {
    event.preventDefault();
    this.setState({
      password: event.target.value,
    });
  };
  handleReapetPasswordInput = (event) => {
    event.preventDefault();
    this.setState({
      Rpassword: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    console.log("working handle submit");
    let userData = {
      email: this.state.email,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      password: this.state.password,
      service: "advance",
    };
    console.log(userData);
    registration(userData)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    return (
      <div>
        <div className="container1-body">
          <div>
            <Typography
              className="app_name1"
              variant="h5"
              color="textSecondary"
            >
              <span style={{ color: "#0606f8" }}>F</span>
              <span style={{ color: "#d10303" }}>u</span>
              <span style={{ color: "#f0b000" }}>n</span>
              <span style={{ color: "#0606f8" }}>d</span>
              <span style={{ color: "green" }}>o</span>
              <span style={{ color: "#d10303" }}>o</span>
            </Typography>
          </div>
          <div className="text">
            <h4>Create your Fundoo Account</h4>
          </div>
          <Form className="form">
            <Row>
              <Col className="fname">
                <TextField
                  // value={this.state.firstName}
                  name="firstName"
                  id="outlined-textarea1"
                  label="FirstName"
                  placeholder=""
                  multiline
                  variant="outlined"
                  size="small"
                  margin="dense"
                  onChange={this.handleFirstNameInput}
                />
                {/* <Form.Control placeholder="First name" /> */}
              </Col>

              <Col className="lname">
                <TextField
                  // value={this.state.lastName}
                  name="lastName"
                  id="outlined-textarea1"
                  label="LastName"
                  placeholder=""
                  variant="outlined"
                  multiline
                  // type="text"
                  size="small"
                  margin="dense"
                  onChange={this.handleLastNameInput}
                />
                {/* <Form.Control placeholder="Last name" /> */}
              </Col>
            </Row>
            <div className="user">
              <TextField
                // value={this.state.email}
                name="email"
                id="outlined-textarea2"
                label="Username"
                placeholder=""
                variant="outlined"
                type="text"
                // color="blue"
                helperText="You can use letters,numbers & symbols"
                // size="medium"
                margin="dense"
                onChange={this.handleEmailInput}
              />
              <span class="gmail">@gmail.com</span>
            </div>
            <div className="line1">
              <Button variant="link">
                Use my current email address instead
              </Button>
            </div>
            <div className="cnfmpass">
              <Row>
                <Col className="pass1">
                  <TextField
                    // value={this.state.password}
                    name="password"
                    id="outlined-textarea3"
                    label="Password"
                    placeholder=""
                    name="password"
                    variant="outlined"
                    type="password"
                    autoComplete="current-password"
                    size="small"
                    margin="dense"
                    onChange={this.handlePasswordInput}
                  />
                  {/* <Form.Control placeholder="First name" /> */}
                </Col>

                <Col className="cnfm1">
                  <TextField
                    id="outlined-textarea3"
                    label="Confirm"
                    placeholder=""
                    name=""
                    variant="outlined"
                    type="password"
                    autoComplete="current-password"
                    size="small"
                    margin="dense"
                    onchange={this.handleReapetPasswordInput}
                  />
                  {/* <Form.Control placeholder="Last name" /> */}
                </Col>
              </Row>
              <div className="hint">
                Use 8 or more characters with a mix of letters, numbers &
                symbols{" "}
              </div>
            </div>
            <Form.Group id="formGridCheckbox">
              <Form.Check type="checkbox" label="Show password" />
            </Form.Group>
            <Button className="link2" variant="link">
              Sign in instead
            </Button>
            <Button
              onClick={this.handleSubmit}
              className="but2"
              variant="primary"
              type="submit"
            >
              Next
            </Button>
            <div className="accnt">
              <img />
            </div>
            {/* <div>One account. All of Google working for you.</div> */}
          </Form>
        </div>
      </div>
    );
  }
}
export default Register;
