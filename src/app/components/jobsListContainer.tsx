import React, { useState, useEffect } from 'react';
import { Job } from '../types/job';
import jobsData from '../data/dummyData.json';
import JobList from './jobList';

const JobListContainer: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    setJobs(jobsData.jobs as Job[]);
  }, []);

  const handleStatusChange = (id: number, isActive: boolean) => {
    setJobs(prevJobs =>
      prevJobs.map(job =>
        job.id === id ? { ...job, isActive } : job
      )
    );
  };

  const handleSearch = (query: string) => {
    const filteredJobs = jobsData.jobs.filter(job =>
      job.title.toLowerCase().includes(query.toLowerCase())
    );
    setJobs(filteredJobs as Job[]);
  };

  return (
    <JobList
      jobs={jobs}
      onStatusChange={handleStatusChange}
      onSearch={handleSearch}
    />
  );
};

export default JobListContainer;