import React, { Component } from "react";
import "./register.scss";
import { Card, Container, CssBaseline, Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

class Register extends Component {
  handleRegister=()=>{
     let data={
       firstName:this.state.firstName,
       lastName:this.state.lastName,
       email:this.state.email,
       password:this.state.password,
       service:"advance"
     }
  }
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      
    };
  }

  render() {
    return (
      <div className="inline-wrapper">
        <Card id="card">
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className="inline-paper">
              <br></br>
              <Typography className="fundoo" variant="h5" color="textSecondary">
                <span style={{ color: "#0606f8" }}>F</span>
                <span style={{ color: "#d10303" }}>u</span>
                <span style={{ color: "#f0b000" }}>n</span>
                <span style={{ color: "#0606f8" }}>d</span>
                <span style={{ color: "green" }}>o</span>
                <span style={{ color: "#d10303" }}>o</span>
              </Typography>
              <br></br>
              <Typography component="h1" variant="h5" className="header">
                <div className="header-content">
                  <font color="black">Sign up</font>
                </div>
              </Typography>
              <br></br>
              <form className="form">
                <div className="address">
                  <Grid container spacing={2}>
                    <Grid
                      item
                      xs={12}
                      sm={6}
                      style={{
                        marginTop: 3,
                        marginBottom: 3,
                        marginRight: -20,
                        marginLeft: -5,
                      }}
                    >
                      <div className="name">
                        <div className="first-Name">
                          <TextField
                            height="100"
                            autoComplete="fname"
                            name="firstName"
                            variant="outlined"
                            required
                            id="firstName"
                            label="First Name"
                          />
                        </div>
                      </div>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      sm={6}
                      style={{
                        marginTop: 2,
                        marginBottom: 3,
                        marginLeft: 20,
                        marginRight: -30,
                      }}
                    >
                      <div className="last-name">
                        <div className="first-Name">
                          <TextField
                            height="8"
                            variant="outlined"
                            required
                            id="lastName"
                            label="Last Name"
                            name="lastName"
                          />
                        </div>
                      </div>
                    </Grid>
                    <Grid item xs={12}>
                      <Grid
                        style={{
                          marginTop: 25,
                          marginBottom: 3,
                          marginLeft: -3,
                        }}
                      >
                        <div className="email-address">
                          <div className="first-Name">
                            <TextField
                              height="8"
                              variant="outlined"
                              required
                              fullWidth
                              id="email"
                              label="Email Address"
                              name="email"
                              autoComplete="email"
                            />
                          </div>
                        </div>
                      </Grid>
                    </Grid>

                    <Grid item xs={12}>
                      <Grid
                        style={{
                          marginTop: 25,
                          marginBottom: 3,
                          marginLeft: -3,
                          height: 5,
                        }}
                      >
                        <div className="passwrord-Id">
                          <div className="first-Name">
                            <TextField
                              height="8"
                              variant="outlined"
                              required
                              fullWidth
                              id="password"
                              label="password"
                              name="password"
                              autoComplete="current-password"
                            />
                          </div>
                        </div>
                      </Grid>
                    </Grid>

                    <Grid item xs={12}>
                      <Grid
                        style={{
                          marginTop: 55,
                          marginBottom: 3,
                          marginLeft: -3,
                        }}
                      >
                        <div className="passwrord-Id">
                          <div className="first-Name">
                            <TextField
                              height="8"
                              variant="outlined"
                              required
                              fullWidth
                              name="rpassword"
                              label="confirm Password"
                              type="rpassword"
                              id="rpassword"
                              autoComplete="current-password"
                            />
                          </div>
                        </div>
                      </Grid>
                    </Grid>
                  </Grid>

                  <div className="createAccount">
                    <Grid style={{ marginTop: 45, marginLeft: -1 }}>
                      <div className="Button">
                        <Button
                          type="submit"
                          fullWidth
                          variant="contained"
                          color="primary"
                          onClick={this.handleSubmit2}
                        >
                          Sign Up
                        </Button>
                      </div>
                    </Grid>
                    <br></br>
                    <Grid container justify="flex-end">
                      <div className="forgot-password ">
                        <p align="left">
                          Already registered?
                          <a href="http://localhost:3000/"> Sign in</a>
                        </p>
                      </div>
                    </Grid>
                  </div>
                </div>
              </form>
            </div>
            <Box mt={2}></Box>
          </Container>
        </Card>
      </div>
    );
  }
}

export default Register;
