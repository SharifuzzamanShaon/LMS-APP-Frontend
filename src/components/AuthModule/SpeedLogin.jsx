import React from "react";
import { Button } from "@mui/material";
import toast from "react-hot-toast";
import { FaArrowRight } from "react-icons/fa";
const SpeedLogin = ({ setValues }) => {
  const handleSpeedLogin = () => {
    setValues({
      email: "shasan2200@gmail.com",
      password: "shasan",
    });
    toast("Demo credentials applied ✨ | Click Login to test the system", {
      icon: '🔑',
      duration: 3000
    });
  };

  return (
    <Button
      type="button"
      variant="outlined"
      color="secondary"
      onClick={handleSpeedLogin}
      className="mt-2 ml-4 dark:text-white text-black"
      title="Speed login to test all features of the system"
    >
      Demo Login
      <FaArrowRight className="ml-2" />
    </Button>
  );
};

export default SpeedLogin