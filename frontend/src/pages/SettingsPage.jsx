import React from "react";
import { useTheme } from "../store/useTheme";
import { Typography } from "@mui/material";

const SettingsPage = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div className="flex items-center justify-center flex-col space-y-10 my-20">
      <Typography
        variant="h2"
        className="text-base-300  "
        sx={{ fontFamily: "geist", fontWeight: "bold" }}
      >
        THEMES
      </Typography>
      <div className="join  flex my-20">
        <input
          onClick={(e) => {
            setTheme(e.target.value);
          }}
          type="radio"
          name="theme-buttons"
          className="btn theme-controller join-item"
          aria-label="Default"
          value="default"
        />
        <input
          onClick={(e) => {
            setTheme(e.target.value);
          }}
          type="radio"
          name="theme-buttons"
          className="btn theme-controller join-item"
          aria-label="Retro"
          value="retro"
        />
        <input
          onClick={(e) => {
            setTheme(e.target.value);
          }}
          type="radio"
          name="theme-buttons"
          className="btn theme-controller join-item"
          aria-label="Cyberpunk"
          value="cyberpunk"
        />
        <input
          onClick={(e) => {
            setTheme(e.target.value);
          }}
          type="radio"
          name="theme-buttons"
          className="btn theme-controller join-item"
          aria-label="Valentine"
          value="valentine"
        />
        <input
          onClick={(e) => {
            setTheme(e.target.value);
          }}
          type="radio"
          name="theme-buttons"
          className="btn theme-controller join-item"
          aria-label="Aqua"
          value="aqua"
        />
        <input
          onClick={(e) => {
            setTheme(e.target.value);
          }}
          type="radio"
          name="theme-buttons"
          className="btn theme-controller join-item"
          aria-label="Dark"
          value="dark"
        />
        <input
          onClick={(e) => {
            setTheme(e.target.value);
          }}
          type="radio"
          name="theme-buttons"
          className="btn theme-controller join-item"
          aria-label="synthwave"
          value="synthwave"
        />
        <input
          onClick={(e) => {
            setTheme(e.target.value);
          }}
          type="radio"
          name="theme-buttons"
          className="btn theme-controller join-item"
          aria-label="forest"
          value="forest"
        />
        <input
          onClick={(e) => {
            setTheme(e.target.value);
          }}
          type="radio"
          name="theme-buttons"
          className="btn theme-controller join-item"
          aria-label="halloween"
          value="halloween"
        />
        <input
          onClick={(e) => {
            setTheme(e.target.value);
          }}
          type="radio"
          name="theme-buttons"
          className="btn theme-controller join-item"
          aria-label="black"
          value="black"
        />
        <input
          onClick={(e) => {
            setTheme(e.target.value);
          }}
          type="radio"
          name="theme-buttons"
          className="btn theme-controller join-item"
          aria-label="coffee"
          value="coffee"
        />
        <input
          onClick={(e) => {
            setTheme(e.target.value);
          }}
          type="radio"
          name="theme-buttons"
          className="btn theme-controller join-item"
          aria-label="dim"
          value="dim"
        />
      </div>
    </div>
  );
};

export default SettingsPage;
