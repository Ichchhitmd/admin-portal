"use client";
import React, { useState } from "react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";

interface FormData {
  jobTitle: string;
  industry: string;
  jobLevel: string;
  employmentType: string;
  locationType: string;
  salaryMin: string;
  salaryMax: string;
  negotiable: boolean;
  experience: string;
  numberOfHiring: string;
  deadline: string;
  hiringUrgency: string;
  jobDescription: string;
  qualifications: string;
  responsibility: string;
}

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

const JobPostingForm = () => {
  const [formData, setFormData] = useState<FormData>({
    jobTitle: "",
    industry: "",
    jobLevel: "",
    employmentType: "",
    locationType: "",
    salaryMin: "",
    salaryMax: "",
    negotiable: false,
    experience: "",
    numberOfHiring: "",
    deadline: "",
    hiringUrgency: "",
    jobDescription: "",
    qualifications: "",
    responsibility: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const target = e.target as HTMLInputElement | HTMLSelectElement;
    const { name, value, type } = target;
    const checked = (target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleQuillChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <div className="w-full bg-white p-5 rounded-md">
      <h2 className="text-xl mb-6 text-[#DEAD00] font-semibold">Job Posting</h2>
      <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
        <div className="grid grid-cols-4 gap-5">
          <div className="col-span-2">
            <label className="text-xs font-medium mb-2 block leading-5">
              Job Title
            </label>
            <input
              type="text"
              name="jobTitle"
              placeholder="Job Title"
              value={formData.jobTitle}
              onChange={handleChange}
              className="w-full px-3 border h-12 rounded-lg bg-white"
            />
          </div>
          <div>
            <label className="text-xs font-medium mb-2 block leading-5">
              Industry
            </label>
            <select
              name="industry"
              value={formData.industry}
              onChange={handleChange}
              className="w-full appearance-none h-12 rounded-lg px-3 border bg-white text-gray-400"
            >
              <option value="">--Select--</option>
              <option value="IT">IT</option>
              <option value="Healthcare">Healthcare</option>
            </select>
          </div>
          <div>
            <label className="text-xs font-medium mb-2 block leading-5">
              Job Level
            </label>
            <select
              name="jobLevel"
              value={formData.jobLevel}
              onChange={handleChange}
              className="w-full appearance-none h-12 rounded-lg px-3 border bg-white text-gray-400"
            >
              <option value="">--Select--</option>
              <option value="Entry">Entry</option>
              <option value="Mid">Mid</option>
              <option value="Senior">Senior</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-5">
          <div>
            <label className="text-xs font-medium mb-2 block leading-5">
              Employment Type
            </label>
            <select
              name="employmentType"
              value={formData.employmentType}
              onChange={handleChange}
              className="w-full appearance-none h-12 px-3 border rounded-lg bg-white text-gray-400"
            >
              <option value="">--Select--</option>
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Contract">Contract</option>
            </select>
          </div>
          <div>
            <label className="text-xs font-medium mb-2 block leading-5">
              Location Type
            </label>
            <select
              name="locationType"
              value={formData.locationType}
              onChange={handleChange}
              className="w-full appearance-none h-12 px-3 border rounded-lg bg-white text-gray-400"
            >
              <option value="">--Select--</option>
              <option value="Onsite">Onsite</option>
              <option value="Remote">Remote</option>
              <option value="Hybrid">Hybrid</option>
            </select>
          </div>
          <div>
            <label className="text-xs font-medium mb-2 block leading-5">
              Minimum Salary
            </label>
            <input
              type="number"
              name="salaryMin"
              placeholder="Minimum"
              value={formData.salaryMin}
              onChange={handleChange}
              className="w-full h-12 px-3 border rounded-lg bg-white"
            />
            <div className="flex items-center gap-2 mt-2">
              <input
                type="checkbox"
                name="negotiable"
                checked={formData.negotiable}
                onChange={handleChange}
                className="h-3 w-3"
              />
              <label className="text-xs">Negotiable</label>
            </div>
          </div>
          <div>
            <label className="text-xs font-medium mb-2 block leading-5">
              Maximum Salary
            </label>
            <input
              type="number"
              name="salaryMax"
              placeholder="Maximum"
              value={formData.salaryMax}
              onChange={handleChange}
              className="w-full h-12 px-3 border rounded-lg bg-white"
            />
          </div>
        </div>

        <div className="grid grid-cols-4 gap-5">
          <div>
            <label className="text-xs font-medium mb-2 block leading-5">
              Experience
            </label>
            <select
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              className="w-full h-12 appearance-none px-3 border rounded-lg bg-white text-gray-400"
            >
              <option value="">--Select--</option>
              <option value="0-1">0-1 years</option>
              <option value="1-3">1-3 years</option>
              <option value="3-5">3-5 years</option>
              <option value="5+">5+ years</option>
            </select>
          </div>
          <div>
            <label className="text-xs font-medium mb-2 block leading-5">
              Number of Hiring
            </label>
            <input
              type="number"
              name="numberOfHiring"
              placeholder="Number of Hiring"
              value={formData.numberOfHiring}
              onChange={handleChange}
              className="w-full h-12 px-3 border rounded-lg bg-white"
            />
          </div>
          <div>
            <label className="text-xs font-medium mb-2 block leading-5">
              Deadline
            </label>
            <input
              type="date"
              name="deadline"
              value={formData.deadline}
              onChange={handleChange}
              className="w-full h-12 px-3 border rounded-lg bg-white"
            />
          </div>
          <div>
            <label className="text-xs font-medium mb-2 block leading-5">
              Hiring Urgency
            </label>
            <select
              name="hiringUrgency"
              value={formData.hiringUrgency}
              onChange={handleChange}
              className="w-full h-12 appearance-none px-3 border rounded-lg bg-white text-gray-400"
            >
              <option value="">--Select--</option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <QuillField
            name="jobDescription"
            value={formData.jobDescription}
            onChange={handleQuillChange}
            label="Job Description"
            placeholder="Job Description"
            required
          />

          <QuillField
            name="qualifications"
            value={formData.qualifications}
            onChange={handleQuillChange}
            label="Qualifications"
            placeholder="Qualifications/Requirements"
            required
          />

          <QuillField
            name="responsibility"
            value={formData.responsibility}
            onChange={handleQuillChange}
            label="Responsibilities"
            placeholder="Responsibilities"
            required
          />
        </div>

        <div className="flex gap-5 mt-5">
          <button type="submit" className="bg-teal-500 text-white px-8 py-2">
            Post
          </button>
          <button
            type="button"
            className="border border-teal-500 text-teal-500 px-8 py-2"
          >
            Save as draft
          </button>
        </div>
        <div className="text-xs mt-5 font-normal flex justify-center items-center">
          Need help? Reach out anytime at
          <span className="ml-1">
            <a
              href="mailto:contact@hrxplor.com"
              className="text-blue-500 hover:underline"
            >
              contact@hrxplor.com
            </a>
          </span>
        </div>
      </form>
    </div>
  );
};

export default JobPostingForm;
