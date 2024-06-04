import React from "react";

interface JobItemProps {
  jobTitle: string;
  company: string;
  JobDate: string;
}

const JobItem: React.FC<JobItemProps> = ({ jobTitle, company, JobDate }) => {
  return (
    <li className="mb-8 border-b-[1px] pb-4 flex gap-4 justify-between items-end">
      <div className="flex flex-col">
        <p className="text-2xl mb-2">{jobTitle}</p>
        <p className="text-xl text-gray-400">{company}</p>
      </div>
      <p className="text-xl">{JobDate}</p>
    </li>
  );
};

export default JobItem;
