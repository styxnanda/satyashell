import command from '../../config.json' assert {type: 'json'};

export const createWhoami = () : string[] => {
  const SPACE = "&nbsp;";
  let string = "";
  string += SPACE.repeat(2);
  string += "You are logged in as: ";
  string += "<span class='output'>";
  string += command.username;
  string += "</span>";
  const whoAmI: string[] = ["<br>", string, "<br>"]; 
  return whoAmI;
}
