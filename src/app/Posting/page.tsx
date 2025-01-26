"use client";
import React, { useState } from "react";
import { Select } from 'antd';
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
    <div className="h-full overflow-y-auto px-4 md:px-6 lg:px-10">
      <div className="w-full bg-white p-5 rounded-md">
        <h2 className="text-xl mb-6 text-[#DEAD00] font-semibold">Job Posting</h2>
        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="col-span-1">
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
            <div className="col-span-1">
              <label className="text-xs font-medium mb-2 block leading-5">
                Industry
              </label>
              <Select
                value={formData.industry}
                onChange={(value) => handleSelectChange('industry', value)}
                placeholder="--Select--"
                className="w-full h-12"
                options={[
                  { value: 'IT', label: 'IT' },
                  { value: 'Healthcare', label: 'Healthcare' }
                ]}
              />
            </div>
            <div className="col-span-1">
              <label className="text-xs font-medium mb-2 block leading-5">
                Job Level
              </label>
              <Select
                value={formData.jobLevel}
                onChange={(value) => handleSelectChange('jobLevel', value)}
                placeholder="--Select--"
                className="w-full h-12"
                options={[
                  { value: 'Entry', label: 'Entry' },
                  { value: 'Mid', label: 'Mid' },
                  { value: 'Senior', label: 'Senior' }
                ]}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="col-span-1">
              <label className="text-xs font-medium mb-2 block leading-5">
                Employment Type
              </label>
              <Select
                value={formData.employmentType}
                onChange={(value) => handleSelectChange('employmentType', value)}
                placeholder="--Select--"
                className="w-full h-12"
                options={[
                  { value: 'Full-time', label: 'Full-time' },
                  { value: 'Part-time', label: 'Part-time' },
                  { value: 'Contract', label: 'Contract' }
                ]}
              />
            </div>
            <div className="col-span-1">
              <label className="text-xs font-medium mb-2 block leading-5">
                Location Type
              </label>
              <Select
                value={formData.locationType}
                onChange={(value) => handleSelectChange('locationType', value)}
                placeholder="--Select--"
                className="w-full h-12"
                options={[
                  { value: 'Onsite', label: 'Onsite' },
                  { value: 'Remote', label: 'Remote' },
                  { value: 'Hybrid', label: 'Hybrid' }
                ]}
              />
            </div>
            <div className="col-span-1">
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
            <div className="col-span-1">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="col-span-1">
              <label className="text-xs font-medium mb-2 block leading-5">
                Experience
              </label>
              <Select
                value={formData.experience}
                onChange={(value) => handleSelectChange('experience', value)}
                placeholder="--Select--"
                className="w-full h-12"
                options={[
                  { value: '0-1', label: '0-1 years' },
                  { value: '1-3', label: '1-3 years' },
                  { value: '3-5', label: '3-5 years' },
                  { value: '5+', label: '5+ years' }
                ]}
              />
            </div>
            <div className="col-span-1">
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
            <div className="col-span-1">
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
            <div className="col-span-1">
              <label className="text-xs font-medium mb-2 block leading-5">
                Hiring Urgency
              </label>
              <Select
                value={formData.hiringUrgency}
                onChange={(value) => handleSelectChange('hiringUrgency', value)}
                placeholder="--Select--"
                className="w-full h-12"
                options={[
                  { value: 'Low', label: 'Low' },
                  { value: 'Medium', label: 'Medium' },
                  { value: 'High', label: 'High' }
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

          <div className="flex gap-5 mt-5 flex-col sm:flex-row">
            <button type="submit" className="bg-teal-500 text-white px-8 py-2 w-full sm:w-auto">
              Post
            </button>
            <button
              type="button"
              className="border border-teal-500 text-teal-500 px-8 py-2 w-full sm:w-auto"
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
    </div>
  );
};

export default JobPostingForm;