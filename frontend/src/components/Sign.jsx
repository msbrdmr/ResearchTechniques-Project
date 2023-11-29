import React from "react";
import { Button, Grid, TextField, FormControlLabel, Checkbox } from "@mui/material";

function Sign() {
  return (
    <form>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12}>
          <TextField
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
          <Button type="submit" style={{ color: "#decc80", background:"transparent" }} variant="contained" fullWidth>
            Sign In
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default Sign;
