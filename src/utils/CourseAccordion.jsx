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

const Schema = Yup.object().shape({
  title: Yup.string()
    .required("Title is required")
    .max(100, "Title cannot exceed 100 characters"),
  description: Yup.string()
    .required("Description is required")
    .min(10, "Description must be at least 10 characters")
    .max(500, "Description cannot exceed 500 characters"),
  videoUrl: Yup.string()
    .url("Invalid URL format")
    .required("Video URL is required"),
  videoThumbnail: Yup.string()
    .url("Invalid thumbnail URL format")
    .required("Video thumbnail is required"),
  videoSection: Yup.string()
    .required("Video section is required"),
  videoLength: Yup.number()
    .required("Video length is required")
    .positive("Video length must be positive")
    .integer("Video length must be an integer"),
  videoPlayer: Yup.string()
    .required("Video player information is required"),
  links: Yup.string()
    .url("Invalid link format")
    .nullable(), // Allows links to be empty
});
export default function CourseAccordion({setCourseData}) {
const newCourseData = useSelector((state) => state.createCourseData);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      videoUrl: "",
      videoThumbnail: "",
      videoSection: "",
      videoLength: 0,
      videoPlayer: "",
      links: "",
    },
    validationSchema: Schema,
    onSubmit: async (courseData) => {
      console.log(courseData);
      dispatch(setCousreData(courseData));
      console.log(newCourseData);
      setCourseData(true)
    },
  });

  const { errors, touched, values, handleChange, handleSubmit } = formik;
  return (
    <div className="">
      <Accordion className=" dark:bg-slate-900">
        <AccordionSummary
          expandIcon={<MdExpandMore className="dark:text-white size-6" />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <FormControl fullWidth variant="outlined">
            <InputLabel htmlFor="title" className="dark:text-white text-black">
              Section title
            </InputLabel>
            <Input
              type="text"
              className="dark:text-white text-black"
              id="title"
              value={values.title}
              onChange={handleChange}
              aria-describedby="title-helper-text"
            />
            <FormHelperText
              id="title-helper-text"
              className="dark:text-white text-black"
            >
              {errors.title && touched.title ? (
                <span className="text-red-600">{errors.title}</span>
              ) : (
                <span></span>
              )}
            </FormHelperText>
          </FormControl>
        </AccordionSummary>
        <AccordionDetails>
          <div className="space-y-4 p-4 max-w-4xl mx-auto font-Poppins grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormControl fullWidth variant="outlined">
              <InputLabel
                htmlFor="description"
                className="dark:text-white text-black"
              >
                Description
              </InputLabel>
              <Input
                type="text"
                className="dark:text-white text-black"
                id="description"
                value={values.description}
                onChange={handleChange}
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
                className="dark:text-white text-black"
                id="videoUrl"
                value={values.videoUrl}
                onChange={handleChange}
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

            <FormControl fullWidth variant="outlined">
              <InputLabel
                htmlFor="videoThumbnail"
                className="dark:text-white text-black"
              >
                Video Thumbnail
              </InputLabel>
              <Input
                type="text"
                className="dark:text-white text-black"
                id="videoThumbnail"
                value={values.videoThumbnail}
                onChange={handleChange}
                aria-describedby="videoThumbnail-helper-text"
              />
              <FormHelperText
                id="videoThumbnail-helper-text"
                className="dark:text-white text-black"
              >
                {errors.videoThumbnail && touched.videoThumbnail ? (
                  <span className="text-red-600">{errors.videoThumbnail}</span>
                ) : (
                  <span>Provide a video thumbnail</span>
                )}
              </FormHelperText>
            </FormControl>

            <FormControl fullWidth variant="outlined">
              <InputLabel
                htmlFor="videoSection"
                className="dark:text-white text-black"
              >
                Video Section
              </InputLabel>
              <Input
                type="text"
                className="dark:text-white text-black"
                id="videoSection"
                value={values.videoSection}
                onChange={handleChange}
                aria-describedby="videoSection-helper-text"
              />
              <FormHelperText
                id="videoSection-helper-text"
                className="dark:text-white text-black"
              >
                {errors.videoSection && touched.videoSection ? (
                  <span className="text-red-600">{errors.videoSection}</span>
                ) : (
                  <span>Provide the section of the video</span>
                )}
              </FormHelperText>
            </FormControl>

            <FormControl fullWidth variant="outlined">
              <InputLabel
                htmlFor="videoLength"
                className="dark:text-white text-black"
              >
                Video Length
              </InputLabel>
              <Input
                type="number"
                className="dark:text-white text-black"
                id="videoLength"
                value={values.videoLength}
                onChange={handleChange}
                aria-describedby="videoLength-helper-text"
              />
              <FormHelperText
                id="videoLength-helper-text"
                className="dark:text-white text-black"
              >
                {errors.videoLength && touched.videoLength ? (
                  <span className="text-red-600">{errors.videoLength}</span>
                ) : (
                  <span>Provide the length of the video in minutes</span>
                )}
              </FormHelperText>
            </FormControl>

            <FormControl fullWidth variant="outlined">
              <InputLabel
                htmlFor="videoPlayer"
                className="dark:text-white text-black"
              >
                Video Player
              </InputLabel>
              <Input
                type="text"
                className="dark:text-white text-black"
                id="videoPlayer"
                value={values.videoPlayer}
                onChange={handleChange}
                aria-describedby="videoPlayer-helper-text"
              />
              <FormHelperText
                id="videoPlayer-helper-text"
                className="dark:text-white text-black"
              >
                {errors.videoPlayer && touched.videoPlayer ? (
                  <span className="text-red-600">{errors.videoPlayer}</span>
                ) : (
                  <span>Provide the video player information</span>
                )}
              </FormHelperText>
            </FormControl>

            <FormControl fullWidth variant="outlined">
              <InputLabel
                htmlFor="links"
                className="dark:text-white text-black"
              >
                Links
              </InputLabel>
              <Input
                type="text"
                className="dark:text-white text-black"
                id="links"
                value={values.links}
                onChange={handleChange}
                aria-describedby="links-helper-text"
              />
              <FormHelperText
                id="links-helper-text"
                className="dark:text-white text-black"
              >
                {errors.links && touched.links ? (
                  <span className="text-red-600">{errors.links}</span>
                ) : (
                  <span>Provide any relevant links</span>
                )}
              </FormHelperText>
            </FormControl>
          </div>
          <Button
            onClick={handleSubmit}
            variant="contained"
            color="primary"
            size="medium"
          >
            Save
          </Button>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
