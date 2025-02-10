import { AppBar, Box, Stack, Button, Toolbar } from "@mui/material";
import { useAuthStore } from "../store/useAuthStor";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const { authUser, logout } = useAuthStore();
  const navigate = useNavigate();
  return (
    <AppBar sx={{ position: "relative", backgroundColor: "rgba(0,0,0,0)" }}>
      <Toolbar
        // className="bg-gray-900 "
        sx={{
          display: "flex",
          px: "50px",
          backgroundColor: "rgba(0,0,0,0)",
        }}
        style={{ paddingLeft: "100px", paddingRight: "100px" }}
      >
        <Box
          component="span"
          display="flex "
          className="items-center "
          flexGrow={1}
        >
          <Box
            onClick={() => {
              navigate("/");
            }}
            component="span"
            variant="contained"
            size="large"
            className="w-13 h-13 rounded-4xl"
            sx={{
              backgroundColor: "rgba(75, 46, 209, 0.17)",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ChatBubbleOutlineIcon
              size="large"
              className=" size-7 cursor-pointer text-blue-400 w-13 h-13 rounded-4xl"
              variant="contained"
            />
          </Box>
          <span
            onClick={() => {
              navigate("/");
            }}
            className="mx-5 cursor-pointer text-3xl py-2 font-extrabold text-base-content"
          >
            Chat App
          </span>
        </Box>

        <Stack direction="row" spacing={3}>
          <Button
            onClick={() => {
              navigate("/settings");
            }}
            sx={{ backgroundColor: "rgba(38, 36, 46, 0.88)" }}
            variant="contained"
          >
            <SettingsIcon />
            Settings
          </Button>
          {authUser ? (
            <>
              <Button
                onClick={() => {
                  navigate("/profile");
                }}
                sx={{ backgroundColor: "rgba(38, 36, 46, 0.88)" }}
                variant="contained"
              >
                <PersonIcon />
                profile
              </Button>
              <Button
                sx={{ color: "white" }}
                onClick={() => {
                  logout();
                }}
              >
                <LogoutIcon className="text-base-content" />
                <span className="text-base-content">Logout</span>
              </Button>
            </>
          ) : (
            ""
          )}
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
