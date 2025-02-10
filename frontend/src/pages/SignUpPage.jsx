import { useState } from "react";
import { useAuthStore } from "../store/useAuthStor";
import {
  Box,
  TextField,
  Stack,
  IconButton,
  Button,
  Typography,
  Grid,
} from "@mui/material";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import toast from "react-hot-toast";
import PersonIcon from "@mui/icons-material/Person";
import MailIcon from "@mui/icons-material/Mail";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import LockIcon from "@mui/icons-material/Lock";
import { Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import AuthImagePattern from "../components/AuthImagePattern";

const SignUpPage = () => {
  const { signup, isSigningUp } = useAuthStore();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const validateForm = () => {
    if (!formData.fullName.trim()) return toast.error("Full name is required");
    if (!formData.email.trim()) return toast.error("Email is required");
    if (!/\S+@\S+\.\S+/.test(formData.email))
      return toast.error("Invalid email format");
    if (!formData.password) return toast.error("Password is required");
    if (formData.password.length < 6)
      return toast.error("Password must be at least 6 characters");

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = validateForm();
    if (success === true) signup(formData);
  };

  return (
    <>
      <Box sx={{ width: "100%", height: "100vh" }}>
        <Grid container>
          <Grid
            item
            my={20}
            md={6}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Stack spacing={2} flex alignItems="center" justifyContent="center">
              <Box
                component="div"
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
                  className=" size-7 text-blue-400 w-13 h-13 rounded-4xl"
                  variant="contained"
                />
              </Box>
              <Typography
                variant="h4"
                className="text-slate-50 text-2xl font-black"
                sx={{ fontFamily: "geist", fontWeight: "bold" }}
              >
                Create Account
              </Typography>
              <Typography variant="h5 " className=" text-slate-400">
                Get started with your free account
              </Typography>
            </Stack>

            <Box component="form" onSubmit={handleSubmit} mt={5}>
              <Stack spacing={3}>
                <Box component="div">
                  <label className="text-slate-50 block mb-2 mt-3 ">
                    Full Name
                  </label>
                  <Box component="div" sx={{ position: "relative" }}>
                    <Box
                      component="div"
                      sx={{
                        position: "absolute",
                        zIndex: "1",
                        top: "12px",
                        left: "1px",
                      }}
                    >
                      <PersonIcon className="ml-2" />
                    </Box>
                    <input
                      className="w-125 h-14 input rounded-lg pl-10 border-0 ring-slate-400 ring-1  "
                      placeholder="    jogn doe"
                      value={formData.fullName}
                      onChange={(e) => {
                        setFormData({ ...formData, fullName: e.target.value });
                      }}
                    />
                  </Box>
                </Box>
                <Box component="div">
                  <label className="text-slate-50 block mb-2 mt-3 ">
                    Email
                  </label>
                  <Box component="div" sx={{ position: "relative" }}>
                    <Box
                      component="div"
                      sx={{
                        position: "absolute",
                        zIndex: "1",
                        top: "12px",
                        left: "1px",
                      }}
                    >
                      <MailIcon className="ml-2" />
                    </Box>
                    <input
                      type="email"
                      className="w-125 h-14 input rounded-lg pl-10 border-0 ring-slate-400 ring-1  "
                      placeholder="    jogn doe@exapmple.com"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                      }}
                    />
                  </Box>
                </Box>
                <Box component="div">
                  <label className="text-slate-50 block mb-2 mt-3 ">
                    Password
                  </label>
                  <Box component="div" sx={{ position: "relative" }}>
                    <Box
                      component="div"
                      sx={{
                        position: "absolute",
                        zIndex: "1",
                        top: "12px",
                        left: "1px",
                      }}
                    >
                      <LockIcon className="ml-2" />
                    </Box>
                    <input
                      type={showPassword ? " " : "password"}
                      className="w-125 h-14 input rounded-lg pl-10 border-0 ring-slate-400 ring-1  "
                      placeholder="    jognbhai"
                      value={formData.password}
                      onChange={(e) => {
                        setFormData({ ...formData, password: e.target.value });
                      }}
                    />
                    <Button
                      sx={{
                        position: "absolute",
                        zIndex: "1",
                        right: "0px",
                        top: "8px",
                      }}
                      className="w-7 h-7"
                      onClick={() => {
                        setShowPassword((val) => !val);
                      }}
                    >
                      {showPassword ? (
                        <VisibilityOffIcon
                          className="ml-2"
                          size="large"
                          sx={{ color: "white" }}
                        />
                      ) : (
                        <VisibilityIcon
                          className="ml-2"
                          size="large"
                          sx={{ color: "white" }}
                        />
                      )}
                    </Button>
                  </Box>
                </Box>
                <Button
                  className="w-125 h-14 rounded-lg"
                  type="submit"
                  color="primary"
                  variant="contained"
                  disabled={isSigningUp}
                >
                  {isSigningUp ? <Loader2 /> : "Create Account"}
                </Button>
                <Box
                  component="div"
                  className="flex"
                  sx={{ alignContent: "center", justifyContent: "center" }}
                >
                  <Typography variant="subtitle1" component="span">
                    Already have an Account?
                  </Typography>

                  <Link to="/login" className="link link-primary">
                    Sign In
                  </Link>
                </Box>
              </Stack>
            </Box>
          </Grid>
          <Grid
            md={6}
            item
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <AuthImagePattern
              title="join our community"
              subtitle="connect with friends , share moments"
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default SignUpPage;
