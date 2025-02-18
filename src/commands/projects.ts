import command from '../../config.json' assert {type: 'json'};

const createProject = (projectName?: string) : string[] => {
  let string = "";
  const projects : string[] = [];
  const files = `${command.projects.length} File(s)`;
  const SPACE = "&nbsp;";

  projects.push("<br>")

  if(projectName) {
    const project = command.projects.find(p => typeof p[0] === 'string' && p[0].toLowerCase() === projectName.toLowerCase());
    if(project){
      projects.push(`<a href="${project[2]}" target="_blank">${project[0]}</a>`);
      projects.push("<br>");
      if (Array.isArray(project[3])) {
        project[3].forEach((desc, index) => {
          index === 0 ? projects.push(`<p>${desc}</p>`) : projects.push(`<li>${desc}</li>`);
        });
      } else {
        projects.push(`<p>${project[3]}</p>`);
      }
    } else {
      projects.push(`Project <strong>${projectName}</strong> not found.`);
    }
  } else {
    command.projects.forEach((ele) => {
      let link = `<a href="${ele[2]}" target="_blank">${ele[0]}</a>`
      string += SPACE.repeat(2);
      string += link;
      string += SPACE.repeat(17 - ele[0].length);
      string += ele[1];
      projects.push(string);
      string = '';
    });

    projects.push("<br>");
    projects.push(files);
  }
  
  projects.push("<br>");
  return projects
}

export const PROJECTS = createProject()
export const getProjectDetails = createProject;