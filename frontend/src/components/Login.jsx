import React, { useState } from "react";
import {
  Button,
  Grid,
  TextField,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [logInfo, setLogInfo] = useState({
    UserMail: "",
    UserPassword: "",
  });
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;

  const sendInfo = (e) => {
    console.log("logInfo", logInfo);
    e.preventDefault();
    axios
      .post("http://localhost:8081", logInfo) // server
      .then((res) => {
        if (res.data.Message === "Success") {
          navigate("/home");
        } else {
          alert(res.data.Message);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={12}>
        <TextField
          onChange={(e) => setLogInfo({ ...logInfo, UserMail: e.target.value })}
          label="Username"
          placeholder="Username *"
          fullWidth
          required
          variant="outlined"
          margin="dense"
          InputLabelProps={{ style: { color: "#C0C0C0" } }}
          InputProps={{ style: { color: "#C0C0C0" } }}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          onChange={(e) =>
            setLogInfo({ ...logInfo, UserPassword: e.target.value })
          }
          label="Password"
          placeholder="Password *"
          fullWidth
          required
          type="password"
          variant="outlined"
          margin="dense"
          InputLabelProps={{ style: { color: "#C0C0C0" } }}
          InputProps={{ style: { color: "#C0C0C0" } }}
        />
      </Grid>
      <Grid item xs={12}>
        <FormControlLabel
          control={<Checkbox color="primary" />}
          label="Remember Me"
          style={{ color: "#decc80" }}
        />
      </Grid>
      <Grid item xs={12}>
        <Button
          onClick={sendInfo}
          type="button"
          style={{ color: "#decc80", background: "transparent" }}
          variant="contained"
          fullWidth
        >
          Log In
        </Button>
      </Grid>
    </Grid>
  );
}

export default Login;
