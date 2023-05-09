interface Issue {
  name: string;
  id: number;
  creator_id: string;
  created_at: Date;
  comments: number;
}
interface Repo {
  open: Array<Issue>;
  progress: Array<Issue>;
  done: Array<Issue>;
}
interface NamedRepo {
  [key: string]: Repo;
}
export type { Issue, Repo, NamedRepo };
