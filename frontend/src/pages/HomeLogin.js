import React, { useState } from "react";
import { Button, Grid, Paper } from "@mui/material";
import Login from "../components/Login";
import Sign from "../components/Sign";


function HomeLogin() {
  const [formType, setFormType] = useState("login");

  const formStyle = {
    background: "linear-gradient(135deg, #676A71, #3B4048)",
    padding: 20,
    width: 300,
    margin: "50px auto",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  };

  const buttonContainerStyle = {
    marginBottom: 20,
    display: "flex",
    justifyContent: "space-around",
  };

  const upStyle = {
    padding: "15px 30px",
    background: "none",
    color: "#decc80",
    cursor: "pointer",
    fontSize: 16,
    transition: "background 0.3s, color 0.3s",
  };

  const switchForm = (e) => {
    const buttonText = e.target.innerText.toLowerCase();
    setFormType(buttonText);
  };

  const handleHover = (e) => {
    e.target.style.background = "#C0C0C0";
    e.target.style.color = "white";
  };

  const handleMouseOut = (e) => {
    e.target.style.background = "none";
    e.target.style.color = "#decc80";
  };

  return (
    <Grid container justifyContent="center">
      <Paper elevation={5} style={formStyle}>
        <Grid container item xs={12} justifyContent="center">
          <img
            src="https://i.imgur.com/MgnwjM9.png"
            alt="logo"
            style={{ width: "100%", height: "auto", maxWidth: "150px" }}
          />
        </Grid>

        <Grid
          style={{
            padding: "20px",
          }}
        >
          {formType === "log in" ? <Login /> : <Sign />}
        </Grid>
        <div style={buttonContainerStyle}>
          <Button
            onClick={(e) => switchForm(e)}
            onMouseOver={handleHover}
            onMouseOut={handleMouseOut}
            style={upStyle}
          >
            Log In
          </Button>
          <Button
            onClick={(e) => switchForm(e)}
            onMouseOver={handleHover}
            onMouseOut={handleMouseOut}
            style={upStyle}
          >
            Sign In
          </Button>
        </div>
      </Paper>
    </Grid>
  );
}

export default HomeLogin;
