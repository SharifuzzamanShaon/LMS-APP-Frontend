"use client";
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
const CourseSections = ({ courseData }) => {
  console.log(courseData);

  return (
    <div>
      {courseData?.map((section) => (
        <>
          <Accordion key={section._id}>
            <AccordionSummary
              // expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography component="span">{section.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {section.description || "No description"}
            </AccordionDetails>
          </Accordion>
        </>
      ))}
    </div>
  );
};

export default CourseSections;
