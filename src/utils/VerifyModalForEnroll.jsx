import { Box, Modal, Typography } from "@mui/material";
import React, { useState } from "react";
import VerificationModule from "../components/AuthModule/VerificationModule";
import LoginModule from "@/components/AuthModule/LoginModule";

const VerifyModalForEnroll = ({ open, setOpen, setIsVerified }) => {
  const [openLogin, setOpenLogin] = useState(false)
  const [openVerificationModal, setOpenVerificationModal] = useState(true)
  return (
    <div className="fixed inset-0 flex items-center justify-center p-4">
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-[450px] bg-white dark:bg-slate-900 rounded-[8px] shadow-lg p-4">
          <Typography
            className={"dark:text-white text-black"}
            variant="h6"
            component="h2"
          >
          </Typography>
          <Typography sx={{ mt: 2 }}>
            <div>
               {openVerificationModal && <VerificationModule  setIsVerified={setIsVerified} setOpenLogin={setOpenLogin} setOpenVerificationModal={setOpenVerificationModal}/>}
                {/* {openLogin && <LoginModule setOpen={setOpen}/> } */}
            </div>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default VerifyModalForEnroll;
