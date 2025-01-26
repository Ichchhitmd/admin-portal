"use client";
import React, { useState } from "react";
import { Select } from "antd";
import QuillField from "../components/quillField";

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

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
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
    <div className="h-full overflow-y-auto px-4 md:px-6 lg:px-10 mt-4">
      <div className="w-full bg-white p-5 rounded-md">
        <h2 className="text-xl mb-6 text-[#DEAD00] font-semibold">
          Job Posting
        </h2>
        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-5">
            <div className="">
              <label className="text-xs font-medium mb-2 block leading-5">
                Job Title <span className="text-red-500 ">*</span>
              </label>
              <input
                type="text"
                name="jobTitle"
                placeholder="Job Title"
                value={formData.jobTitle}
                onChange={handleChange}
                required
                className="w-full px-3 border h-12 rounded-lg bg-white"
              />
            </div>
            <div className="">
              <label className="text-xs font-medium mb-2 block leading-5">
                Industry <span className="text-red-500 ">*</span>
              </label>
              <Select
                value={formData.industry}
                onChange={(value) => handleSelectChange("industry", value)}
                placeholder="--Select--"
                className="w-full h-12"
                options={[
                  { value: "IT", label: "IT" },
                  { value: "Healthcare", label: "Healthcare" },
                ]}
                aria-required
              />
            </div>
            <div className="">
              <label className="text-xs font-medium mb-2 block leading-5">
                Job Level <span className="text-red-500 ">*</span>
              </label>
              <Select
                value={formData.jobLevel}
                onChange={(value) => handleSelectChange("jobLevel", value)}
                placeholder="--Select--"
                className="w-full h-12"
                options={[
                  { value: "Entry", label: "Entry" },
                  { value: "Mid", label: "Mid" },
                  { value: "Senior", label: "Senior" },
                ]}
                aria-required
              />
            </div>
            <div className="">
              <label className="text-xs font-medium mb-2 block leading-5">
                Employment Type <span className="text-red-500">*</span>
              </label>
              <Select
                value={formData.employmentType}
                onChange={(value) =>
                  handleSelectChange("employmentType", value)
                }
                placeholder="--Select--"
                className="w-full h-12"
                options={[
                  { value: "Full-time", label: "Full-time" },
                  { value: "Part-time", label: "Part-time" },
                  { value: "Contract", label: "Contract" },
                ]}
                aria-required
              />
            </div>
          </div>

          <div className="grid grid-cols-4 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="col-span-2">
              <label className="text-xs font-medium mb-2 block leading-5">
                Location Type <span className="text-red-500">*</span>
              </label>
              <Select
                value={formData.locationType}
                onChange={(value) => handleSelectChange("locationType", value)}
                placeholder="--Select--"
                className="w-full h-12"
                options={[
                  { value: "Onsite", label: "Onsite" },
                  { value: "Remote", label: "Remote" },
                  { value: "Hybrid", label: "Hybrid" },
                ]}
                aria-required
              />
            </div>
            <div className="col-span-1">
              <label className="text-xs font-medium mb-2 block leading-5">
                Salary <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="salaryMin"
                placeholder="Minimum"
                value={formData.salaryMin}
                onChange={handleChange}
                required
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
            <div className="col-span-1">
              <input
                type="number"
                name="salaryMax"
                placeholder="Maximum"
                required
                value={formData.salaryMax}
                onChange={handleChange}
                className="w-full h-12 px-3 border rounded-lg bg-white mt-7"
              />
            </div>
          </div>

          <div className="grid grid-cols-4 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="col-span-2">
              <label className="text-xs font-medium mb-2 block leading-5">
                Number of Hiring <span className="text-red-500">*</span>
              </label>
              <Select
                value={formData.numberOfHiring}
                onChange={(value) =>
                  handleSelectChange("numberOfHiring", value)
                }
                placeholder="--Select--"
                className="w-full h-12"
                options={Array.from({ length: 30 }, (_, i) => ({
                  value: (i + 1).toString(),
                  label: (i + 1).toString(),
                }))}
                aria-required
              />
            </div>
            <div className="col-span-1">
              <label className="text-xs font-medium mb-2 block leading-5">
                Hiring Urgency
              </label>
              <input
                type="date"
                name="deadline"
                value={formData.deadline}
                onChange={handleChange}
                className="w-full h-12 px-3 border rounded-lg bg-white"
              />
            </div>
            <div className="col-span-1">
              <label className="text-xs font-medium mb-2 block leading-5">
                Hiring Urgency
              </label>
              <Select
                value={formData.hiringUrgency}
                onChange={(value) => handleSelectChange("hiringUrgency", value)}
                placeholder="--Select--"
                className="w-full h-12"
                options={[
                  { value: "Low", label: "Low" },
                  { value: "Medium", label: "Medium" },
                  { value: "High", label: "High" },
                ]}
              />
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
              label="Job Requirements"
              placeholder="Qualifications/Requirements"
              required
            />
          </div>

          <div className="flex gap-5 mt-5 flex-col sm:flex-row">
            <button
              type="submit"
              className="bg-[#0295A9] text-white px-8 py-2 w-full"
            >
              Post
            </button>
          </div>
          <div className="text-xs mt-2 font-normal flex justify-center items-center">
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
    </div>
  );
};

export default JobPostingForm;
