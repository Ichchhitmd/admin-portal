import React from 'react';
import { Job } from '../types/job';

interface StatusBadgeProps {
  status: Job['status'];
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  const getStatusColor = (status: Job['status']): string => {
    return status === 'expired' ? 'text-red-500' : 'text-green-500';
  };

  return (
    <div className={`flex items-center ${getStatusColor(status)}`}>
      <span className="w-2 h-2 rounded-full bg-current mr-1" />
      <span className="capitalize">{status}</span>
    </div>
  );
};

export default StatusBadge;