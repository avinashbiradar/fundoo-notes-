import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import HTMLComment from "react-html-comment";
import "./reset.scss";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Reset() {
  const classes = useStyles();

  return (
    <Container classname="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography className="app_name" variant="h5" color="textSecondary">
          <span style={{ color: "#0606f8" }}>F</span>
          <span style={{ color: "#d10303" }}>u</span>
          <span style={{ color: "#f0b000" }}>n</span>
          <span style={{ color: "#0606f8" }}>d</span>
          <span style={{ color: "green" }}>o</span>
          <span style={{ color: "#d10303" }}>o</span>
        </Typography>
        <div>
          <h3>Reset Password</h3>
        </div>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="old-password"
            label="Old Password"
            name="email"
            autoFocus
          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="New-Password"
            type="password"
            id="new-password"
          />

          <Grid container spacing={12}>
            <Grid item item xs={6} sm={6} classname="submit">
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Reset Password
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
