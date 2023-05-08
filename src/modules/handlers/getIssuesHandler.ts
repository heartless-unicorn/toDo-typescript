import { octokit } from "../../helpers/constants";
import type { Issue } from "../../helpers/interfaces";

export async function getIssuesHandler(link: string): Promise<Issue[]> {
  const repo = link.split("/").at(-2);
  const owner = link.split("/").at(-3);
  //can return epo and owner and push to local storage by that name, get from local storage and just pass the request stats
  console.log(repo, owner);
  return await octokit
    .request(`GET /repos/${owner}/${repo}/issues`, {
      owner,
      repo,
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
      state: "all",
      per_page: 10,
    })
    .then((response) => {
      console.log(response);
      return response.data.map((el: any) => {
        // let status;
        // if (el.state === "closed") {
        //   status = "done";
        // } else if (el.status === "open") {
        //   if (el.assignee !== null) {
        //     status = "progress";
        //   } else {
        //     status = "open";
        //   }
        // }
        return {
          name: el.title,
          id: el.number,
          creator_id: el.user.login,
          created_at: new Date(el.created_at),
          comments: el.comments,
        };
      });
    });
}
