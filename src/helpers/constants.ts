import { Octokit } from "octokit";

const octokit = new Octokit({
  auth: "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",
});

export { octokit };
