interface Issue {
  name: string;
  id: number;
  creator_id: string;
  created_at: Date;
  comments: number;
}
interface Repo {
  open: Array<Object>;
  progress: Array<Object>;
  done: Array<Object>;
}
interface NamedRepo {
  [key: string]: Repo;
}
export type { Issue, Repo, NamedRepo };
