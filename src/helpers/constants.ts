import { Octokit } from "octokit";

const octokit = new Octokit({
  auth: "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",
});

export { octokit };
