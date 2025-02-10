import { useState } from "react";
import { useAuthStore } from "../store/useAuthStor";
import { Box, Paper, Button, Stack, Typography } from "@mui/material";
import userImage from "../public/image/userimage.jpg";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import PersonIcon from "@mui/icons-material/Person";
import MailIcon from "@mui/icons-material/Mail";

const ProfilePage = () => {
  const { authUser, updateProfile, isUpdatingProfile } = useAuthStore();
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = async () => {
      const base64Image = reader.result;
      setSelectedImage(base64Image);
      await updateProfile({ profilePic: base64Image });
    };
  };
  return (
    <Box
      component="div"
      display="flex"
      justifyContent="center"
      className="h-screen"
    >
      <Paper
        sx={{
          padding: "40px",
          mt: "50px",
          borderRadius: "30px",
          background: "black",
        }}
      >
        <Stack spacing={2} alignItems="center">
          <Typography
            variant="h5"
            className="text-white"
            sx={{ fontFamily: "geist", fontWeight: "bold" }}
          >
            Profile
          </Typography>
          <Typography variant="subtitle1" className="text-slate-400">
            your Profile Information
          </Typography>
          <Box component="div" sx={{ position: "relative" }}>
            <Box
              component="div"
              className="rounded-full border-2"
              sx={{ borderColor: "white" }}
            >
              <img
                src={selectedImage || authUser.profilePic || userImage}
                alt=""
                className=" h-35 w-35 rounded-full border-4"
              />
            </Box>
            <div className="rounded-full absolute right-0 bottom-0 cursor-pointer hover:scale-110 bg-slate-400 size-10 flex items-center justify-center">
              <label className="cursor-pointer">
                <CameraAltOutlinedIcon className="text-black" />
                <input
                  className="hidden"
                  type="file"
                  onChange={handleImageUpload}
                  disabled={isUpdatingProfile}
                />
              </label>
            </div>
          </Box>
          <Typography variant="subtitle1" className="text-slate-400">
            Click the Camera Icon to Upload your Photo
          </Typography>
        </Stack>
        <div className="space-y-6 mt-20">
          <div className="space-y-1.5">
            <div className="text-sm text-zinc-400 flex items-center gap-2">
              <PersonIcon />
              Full Name
            </div>
            <p className="px-4 py-2.5 w-150  border-white text-slate-400 rounded-lg border">
              {authUser?.fullName}
            </p>
          </div>

          <div className="space-y-1.5">
            <div className="text-sm text-zinc-400 flex items-center gap-2">
              <MailIcon />
              Email Address
            </div>
            <p className="px-4 py-2.5 border-white text-slate-400 rounded-lg border">
              {authUser?.email}
            </p>
          </div>
        </div>
        <div className=" text-white my-15 rounded-xl p-6">
          <h2 className="text-lg  text-whitefont-medium  mb-4">
            Account Information
          </h2>
          <div className="space-y-3 text-sm">
            <div className="flex items-center  justify-between py-2 border-b border-zinc-700">
              <span>Member Since</span>
              <span>{authUser.createdAt?.split("T")[0]}</span>
            </div>
            <div className="flex items-center  justify-between py-2">
              <span>Account Status</span>
              <span className="text-green-500">Active</span>
            </div>
          </div>
        </div>
      </Paper>
    </Box>
  );
};

export default ProfilePage;
