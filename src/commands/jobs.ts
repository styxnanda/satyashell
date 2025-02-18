import command from '../../config.json' assert {type: 'json'};

const createJobs = (): string[] => {
  const jobs: string[] = [];

  jobs.push("<br>");

  command.jobs.forEach((job) => {
    jobs.push(job.company);
    jobs.push(`<em>${job.role}</em>`);
    jobs.push(`<span>${job.duration}</span>`);
    job.description.forEach((desc) => {
      jobs.push(`<li><span class='jobs-desc'>${desc}</span></li>`);
    });
    jobs.push("<br>");
  })

  return jobs;
}

export const JOBS = createJobs();