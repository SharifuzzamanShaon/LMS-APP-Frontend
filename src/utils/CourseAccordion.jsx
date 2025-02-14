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
  setCousreData,
} from "../../redux/features/admin/createCourseSlice";
import VideoSection from "@/components/Admin-components/Course/VideoSection";

const Schema = Yup.object().shape({});
export default function CourseAccordion({ setCourseData, resetCourseData }) {
  const dispatch = useDispatch();
  const [expanded, setExpanded] = React.useState(true);

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      sectionContents: [
        {
          videoUrl: "",
          videoTitle: "",
          paid: true,
        },
      ]
    },
    validationSchema: Schema,
    onSubmit: async (courseData) => {
      dispatch(setCousreData(courseData));
      setCourseData(true);
    },
  });

  const { errors, touched, values, handleChange, handleSubmit, resetForm } =
    formik;
  React.useEffect(() => {
      resetForm();
  }, [resetCourseData]);

  const handleSaveClick = async (e) => {
    await handleSubmit(e);
    setExpanded(false);
  };

  return (
    <div className="p-2 w-full mx-auto font-Poppins">
      <form onSubmit={handleSubmit}>
        <Accordion 
          expanded={expanded}
          onChange={() => setExpanded(!expanded)}
          className="dark:bg-slate-900 bg-white shadow-md rounded-md w-full"
        >
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
                  className="dark:text-white text-black w-12/12"
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
            </div>
            {/* {Upload new video} */}
            <VideoSection formik={formik} />

            <div className="mt-6">
              <Button
                onClick={handleSaveClick}
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
