import React, { useState, useCallback } from 'react';
import { Search, MoreVertical } from 'lucide-react';
import { Job } from '../types/job';

interface JobListProps {
  jobs: Job[];
  onStatusChange?: (id: number, isActive: boolean) => void;
  onSearch?: (query: string) => void;
}

const JobList: React.FC<JobListProps> = ({ 
  jobs,
  onStatusChange,
  onSearch 
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = useCallback(() => {
    onSearch?.(searchQuery);
  }, [searchQuery, onSearch]);

  const StatusBadge: React.FC<{ status: Job['status'] }> = ({ status }) => (
    <div className={`flex items-center ${status === 'expired' ? 'text-red-500' : 'text-green-500'}`}>
      <span className="w-2 h-2 rounded-full bg-current mr-1" />
      <span className="capitalize">{status}</span>
    </div>
  );


  const Toggle: React.FC<{ isActive: boolean; onChange: (isActive: boolean) => void }> = ({ 
    isActive, 
    onChange 
  }) => (
    <div 
      onClick={() => onChange(!isActive)}
      className={`w-12 h-6 rounded-full transition-colors duration-200 ease-in-out cursor-pointer ${
        isActive ? 'bg-teal-500' : 'bg-gray-200'
      }`}
    >
      <div className={`w-5 h-5 bg-white rounded-full shadow transform transition-transform duration-200 ease-in-out ${
        isActive ? 'translate-x-6' : 'translate-x-1'
      } mt-0.5`} />
    </div>
  );

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-semibold">Job posts</h2>
          <p className="text-gray-500">{jobs.length} jobs found</p>
        </div>
        <div className="relative flex items-center">
          <div className="relative">
            <input
              type="text"
              placeholder="Search Job"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
            <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
          </div>
          <button 
            onClick={handleSearch}
            className="ml-2 px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600"
          >
            Search
          </button>
        </div>
      </div>

      <div className="border-b border-gray-200 pb-4">
        <div className="flex items-center text-sm text-gray-500">
          <input type="checkbox" className="mr-4" />
          <div className="flex-1 grid grid-cols-6 gap-4">
            <div className="col-span-2">Job Details</div>
            <div>Status</div>
            <div>Active</div>
            <div>Posted Date</div>
            <div>Expiry Date</div>
          </div>
        </div>
      </div>

      {/* Job List */}
      <div>
        {jobs.map(job => (
          <div key={job.id} className="flex items-center py-4 border-b border-gray-100">
            <input type="checkbox" className="mr-4" />
            <div className="flex-1 grid grid-cols-6 gap-4 items-center">
              <div className="col-span-2">
                <h3 className="font-medium text-gray-900">{job.title}</h3>
                <p className="text-sm text-gray-500">
                  {job.applicationsCount} Applications found
                </p>
              </div>
              <StatusBadge status={job.status} />
              <Toggle 
                isActive={job.isActive} 
                onChange={(isActive) => onStatusChange?.(job.id, isActive)}
              />
              <div>{job.postedDate}</div>
              <div className="flex items-center justify-between">
                <span>{job.expiryDate}</span>
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <MoreVertical className="w-5 h-5 text-gray-500" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobList;