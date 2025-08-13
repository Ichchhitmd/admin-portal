export interface Job {
    id: number;
    title: string;
    applicationsCount: number;
    status: 'active' | 'expired';
    isActive: boolean;
    postedDate: string;
    expiryDate: string;
  }
  
  export interface JobsData {
    jobs: Job[];
  }