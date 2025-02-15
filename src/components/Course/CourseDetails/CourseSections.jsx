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
  
  const getTotalLecturesAndDuration = (section) => {
    const lectureCount = section.sectionContents?.length || 0;
    // Assuming duration is in minutes and stored in each content
    const totalDuration = section.sectionContents?.reduce((acc, content) => 
      acc + (content.duration || 0), 0);
    return { lectureCount, totalDuration };
  };

  return (
    <div className="space-y-2">
      {courseData?.map((section) => {
        const { lectureCount, totalDuration } = getTotalLecturesAndDuration(section);
        return (
          <Accordion 
            key={section._id}
            sx={{
              backgroundColor: theme.palette.mode === 'dark' ? 'rgba(25, 118, 210, 0.08)' : 'rgba(25, 118, 210, 0.04)',
              color: theme.palette.text.primary,
              '& .MuiAccordionSummary-root': {
                padding: '0.75rem 1rem',
              }
            }}
          >
            <AccordionSummary
              aria-controls={`panel-${section._id}-content`}
              id={`panel-${section._id}-header`}
            >
              <div className="flex justify-between items-center w-full">
                <Typography component="span" className="text-xl font-semibold  dark:text-white">
                  {section.title}
                </Typography>
                <Typography component="span" className="text-sm text-gray-600">
                  {lectureCount} lectures • {totalDuration}min
                </Typography>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <div className="space-y-4">
                {section.sectionContents?.map((content) => (
                  <div key={content._id} className="flex items-center justify-between py-1">
                    <div className="flex items-center gap-3">
                      <span className="text-gray-600 dark:text-white">
                      ▶
                      </span>
                      <Typography className="text-base  dark:text-white">
                        {content.videoTitle}
                      </Typography>
                    </div>
                    <div className="flex items-center gap-2">
                      {content.videoUrl && (
                        content.paid === true ? <span>🔒</span> : 
                        
                        <Button
                        variant="text"
                        color="primary"
                        size="small"
                        
                        href={content.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer  dark:text-white"
                        >
                        Preview
                        </Button>
                       
                      )}
                      <Typography className="text-sm text-gray-600 min-w-[4rem] text-right">
                        {content.duration?.toString().padStart(2, '0')}:{content.durationSeconds?.toString().padStart(2, '0')}
                      </Typography>
                    </div>
                  </div>
                ))}
              </div>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
};

export default CourseSections;
