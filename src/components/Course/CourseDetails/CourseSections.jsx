"use client";
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useTheme } from '@mui/material/styles';

const CourseSections = ({ courseData }) => {
  const theme = useTheme();
  console.log(courseData);

  return (
    <div>
      {courseData?.map((section) => (
        <>
          <Accordion 
            key={section._id}
            sx={{
              backgroundColor: theme.palette.mode === 'dark' ? 'rgba(25, 118, 210, 0.08)' : 'rgba(25, 118, 210, 0.04)',
              color: theme.palette.text.primary,
            }}
          >
            <AccordionSummary
              // expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography component="span" className="text-2xl font-bold dark:text-white text-black">{section.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography color="text.secondary">
                {section.description || "No description"}
              </Typography>
            </AccordionDetails>
          </Accordion>
        </>
      ))}
    </div>
  );
};

export default CourseSections;
