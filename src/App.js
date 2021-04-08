import React from "react";
import { Job } from "./models/Job";

const App = () => {
  let job1 = new Job(1, "test", "test2", "11/07/2018");
  let job2 = new Job(1, "test3", "test4", "11/07/2018");

  const jobs = [];
  jobs.push(job1);
  jobs.push(job2);

  const filteredJobs = jobs.filter((job) => job.title === "test3");

  return (
    <div>
      {filteredJobs.map((job) => {
        return (
          <div>
            <h1>{job.title}</h1>
            <h1>{job.description}</h1>
            <h1>{job.publishedDate}</h1>
            <br />
          </div>
        );
      })}
    </div>
  );
};

export default App;
