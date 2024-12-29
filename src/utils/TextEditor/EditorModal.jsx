"use client";
import React, { useRef, useEffect } from "react";
import { Editor } from "@tinymce/tinymce-react";

const EditorModal = ({ formik }) => {
  const editorRef = useRef(null);

  const handleSaveContent = () => {
    if (editorRef.current) {
      const content = editorRef.current.getContent();
      formik.setFieldValue("description", content);
      console.log("Editor Content:", content);
    }
  };

  useEffect(() => {
    // If needed, you can use the editor API to manipulate the editor here
    if (editorRef.current) {
      // Example: Check if the editor is initialized
      console.log("Editor initialized!");
    }
  }, [editorRef]);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Course Description</h2>
      <Editor
        apiKey="your-tinymce-api-key" // Replace with your TinyMCE API key
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue="<p>This is the initial content of the editor</p>"
        init={{
          height: 500,
          menubar: false,
          plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table paste code help wordcount",
          ],
          toolbar:
            "undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help",
          readonly: false,  // Ensure the editor is not read-only
          setup: (editor) => {
            editor.on("change", () => {
              // Trigger change event to update formik field
              handleSaveContent();
            });
          },
        }}
      />
      <button
        onClick={handleSaveContent}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Save
      </button>
    </div>
  );
};

export default EditorModal;
