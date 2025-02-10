import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { MdExpandMore } from "react-icons/md";
import * as Yup from "yup";
import Button from "@mui/material/Button";
import { FormControl, FormHelperText, Input, InputLabel } from "@mui/material";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import {
  setCourseInfo,
  setCousreData,
} from "../../redux/features/admin/createCourseSlice";
import VideoSection from "@/components/Admin-components/Course/VideoSection";
import { dark } from "@mui/material/styles/createPalette";

const Schema = Yup.object().shape({

});
export default function CourseAccordion({ setCourseData }) {
  const newCourseData = useSelector((state) => state.createCourseData);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      title: "", // The title of the course
      description: "", // Description of the course
      sectionContents: [
        {
          videoUrl: "", // URL for video
          videoTitle: "", // Title of the video
        },
      ],
      videoSection: "",
    },
    validationSchema: Schema,
    onSubmit: async (courseData) => {
      console.log("Clicked");

      console.log(courseData);
      dispatch(setCousreData(courseData));
      setCourseData(true);
    },
  });

  const { errors, touched, values, handleChange, handleSubmit } = formik;
  return (
    <div className="p-2 max-w-6xl mx-auto font-Poppins">
      <form onSubmit={handleSubmit}>
        <Accordion className="dark:bg-slate-900 bg-white shadow-md rounded-md">
          <AccordionSummary
            expandIcon={
              <MdExpandMore className="text-black dark:text-white text-2xl" />
            }
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <h2 className="text-xl font-semibold text-black dark:text-white">
              {" "}
              <Input
                type="text"
                id="title"
                value={values.title}
                onChange={handleChange}
                className="dark:text-white text-black"
                aria-describedby="title-helper-text"
                placeholder="Section Title"
              />
            </h2>
          </AccordionSummary>
          <AccordionDetails className="space-y-6 p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormControl fullWidth variant="outlined">
                <InputLabel
                  htmlFor="description"
                  className="dark:text-white text-black"
                >
                  Description
                </InputLabel>
                <Input
                  type="text"
                  id="description"
                  value={values.description}
                  onChange={handleChange}
                  className="dark:text-white text-black"
                  aria-describedby="description-helper-text"
                />
                <FormHelperText
                  id="description-helper-text"
                  className="dark:text-white text-black"
                >
                  {errors.description && touched.description ? (
                    <span className="text-red-600">{errors.description}</span>
                  ) : (
                    <span>Provide a description for the course</span>
                  )}
                </FormHelperText>
              </FormControl>

              <FormControl fullWidth variant="outlined">
                <InputLabel
                  htmlFor="videoUrl"
                  className="dark:text-white text-black"
                >
                  Video URL
                </InputLabel>
                <Input
                  type="text"
                  id="videoUrl"
                  value={values.videoUrl}
                  onChange={handleChange}
                  className="dark:text-white text-black"
                  aria-describedby="videoUrl-helper-text"
                />
                <FormHelperText
                  id="videoUrl-helper-text"
                  className="dark:text-white text-black"
                >
                  {errors.videoUrl && touched.videoUrl ? (
                    <span className="text-red-600">{errors.videoUrl}</span>
                  ) : (
                    <span>Provide a video URL</span>
                  )}
                </FormHelperText>
              </FormControl>
            </div>
            {/* {Upload new video} */}
            <VideoSection formik={formik} />

            <div className="mt-6">
              <Button
                onClick={handleSubmit}
                variant="contained"
                color="primary"
                size="medium"
                className="w-full"
                type="button"
              >
                Save
              </Button>
            </div>
          </AccordionDetails>
        </Accordion>
      </form>
    </div>
  );
}
