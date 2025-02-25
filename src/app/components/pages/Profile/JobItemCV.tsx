import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface JobItemProps {
  jobTitle: string;
  company: string;
  JobDate: string;
  tasks?: string[];
}

const JobItem: React.FC<JobItemProps> = ({
  jobTitle,
  company,
  JobDate,
  tasks,
}) => {
  return (
    <li className="mb-8">
      <div className="flex flex-col w-full gap-10 sm:gap-6 pb-8">
        <div className="flex flex-col md:flex-row justify-between gap-10 sm:gap-6">
          <div>
            <h3 className="text-2xl mb-2 split TextTransform">{jobTitle}</h3>
            <h4 className="text-xl text-gray-400 split TextTransform">
              {company}
            </h4>
          </div>
          <p className="text-xl">{JobDate}</p>
        </div>
        {tasks && tasks.length > 0 ? (
          <div className="mt-6 text-lg text-gray-400">
            <p>Aufgaben</p>
            <ul className="list-disc list-outside ml-4 flex flex-col gap-3  mt-2">
              {tasks.map((task, index) => (
                <li className="cv-taskitem " key={index}>
                  {task}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
      <div className="h-[1px] bg-gray-200 w-full"></div>
    </li>
  );
};

export default JobItem;
