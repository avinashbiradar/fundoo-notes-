import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import "./login.scss";

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
export default function Login() {
  const classes = useStyles();

  return (
    <div>
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
          <h3>Sign in</h3>
        </div>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address Or Phone"
            name="email"
            autoFocus
          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
          />
          <div class="forgot-password">
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
          </div>

          <Grid container spacing={12}>
            <Grid item item xs={12} sm={6} className="create">
              <Link href="#" variant="body2">
                {"create Account"}
              </Link>
            </Grid>
            <Grid item item xs={12} sm={6} classname="submit">
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign In
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
    </div>
  );
}

// class Login extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       email: "",
//       password: "",
//     };
//   }
//   render() {
//     return (
//       <div>
//         <div className="main-div">
//           <Form>
//           <span className="inlineTitle">
//             <b>
//               <font color="#1976d2">F</font>
//               <font color="#e53935">u</font>
//               <font color="#ffb74d">n</font>
//               <font color="#1976d2">d</font>
//               <font color="#388e3c">o</font>
//               <font color="#e53935">o</font>
//             </b>
//           </span>
//             <h4>Sign in</h4>
//             <p>Use your Google Account </p>
//             <Form.Group controlId="formBasicEmail">
//               <TextField
//                 id="outlined-helperText"
//                 label="Email or Phone"
//                 variant="outlined"
//               />
//               <div className="link"><a href="https://www.w3schools.com/">Forget email?</a></div>
//             </Form.Group>
//             <Form.Group controlId="formBasicPassword">
//               <TextField
//                 id="outlined-password-input"
//                 label="Password"
//                 type="password"
//                 autoComplete="current-password"
//                 variant="outlined"
//               />
//             </Form.Group>
//             <Form.Group controlId="formBasicCheckbox">
//               <Form.Check type="checkbox" label="show password" />
//             </Form.Group>
//             <Button color="primary">Create account</Button>
//           </Form>
//         </div>

//       </div>
//     );
//   }
// }

// export default Login;
