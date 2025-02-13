import React from "react";
import { Button } from "@mui/material";
import toast from "react-hot-toast";

const SpeedLogin = ({ setValues }) => {
  const handleSpeedLogin = () => {
    setValues({
      email: "shasan2200@gmail.com",
      password: "shasan",
    });
    toast("Here you are 🖐 | Please Click Login")
  };

  return (
    <Button
      type="button"
      variant="outlined"
      color="secondary"
      onClick={handleSpeedLogin}
      className="mt-2 ml-4 dark:text-white text-black"
    >
      Speed Login "Quick test"
    </Button>
  );
};

export default SpeedLogin