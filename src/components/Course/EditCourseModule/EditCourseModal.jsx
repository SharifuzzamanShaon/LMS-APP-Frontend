import React from "react";
import { useGetCourseByIdQuery } from "../../../../redux/features/admin/dashboardApi";
import CreateCourseForm from "@/components/Admin-components/Course/CreateCourseForm";
const EditCourseModal = ({ setIsEditModalOpen, courseId }) => {
  //   const { data, isLoading, isError } = useGetCourseByIdQuery(courseId);

  //   console.log(data);
  //   if (isLoading) {
  //     return <div>Loading...</div>;
  //   }
  //   if (isError) {
  //     return <div>Error...</div>;
  //   }

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-screen bg-black bg-opacity-50 flex justify-center items-center">
        <div className="relative w-full max-w-4xl max-h-full bg-white rounded-lg shadow-sm dark:bg-gray-700">
          {/* Modal header */}
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              Large modal
            </h3>
            <button
              onClick={() => setIsEditModalOpen(false)}
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          {/* Modal body */}
            <CreateCourseForm/>
          {/* Modal footer */}
          <div className="flex items-center p-4 md:p-5 space-x-3 rtl:space-x-reverse border-t border-gray-200 rounded-b dark:border-gray-600">
            <button
              onClick={() => setIsEditModalOpen(false)}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              I accept
            </button>
            <button
              onClick={() => setIsEditModalOpen(false)}
              className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Decline
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditCourseModal;
