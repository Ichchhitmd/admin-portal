"use client";
import React, { useState } from "react";
import "react-quill-new/dist/quill.snow.css";

import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

const QuillField = ({
  value,
  onChange,
  name,
  label,
  placeholder,
  required = false,
}: {
  value: string;
  onChange: (name: string, value: string) => void;
  name: string;
  label: string;
  placeholder: string;
  required?: boolean;
}) => {
  const [wordCount, setWordCount] = useState(0);

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      // Font family dropdown
      [{ font: ["Arial", "Times New Roman", "Helvetica", "sans-serif"] }],
      // Text formatting
      ["bold", "italic", "underline", "strike"],
      // Text color and background color
      [{ color: [] }, { background: [] }],
      // Text alignment
      [{ align: [] }],
      // Lists and indentation
      [{ list: "ordered" }, { list: "bullet" }],
      // Link and image insertion
      ["link", "image"],
      // Remove formatting
      ["clean"],
    ],
  };

  const handleQuillChange = (content: string) => {
    const text = content.replace(/<[^>]*>/g, "");
    const words = text
      .trim()
      .split(/\s+/)
      .filter((word) => word.length > 0);
    setWordCount(words.length);
    onChange(name, content);
  };

  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-1">
        {" "}
        <label className="text-xs font-medium mb-2 leading-5">{label}</label>
        {required && (
          <div className="relative top-[-2px]">
            <span className="text-[#FF0000] text-sm">*</span>
          </div>
        )}
      </div>
      <div className="bg-white rounded-lg overflow-hidden border flex flex-col">
        <ReactQuill
          theme="snow"
          value={value}
          onChange={(content) => handleQuillChange(content)}
          modules={modules}
          placeholder={placeholder}
          className="custom-quill flex-1"
        />
        <div className="text-xs text-gray-500 border-t p-2">
          {wordCount} words
        </div>
      </div>
    </div>
  );
};

export default QuillField;