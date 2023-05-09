import type { Issue } from "../helpers/interfaces";

export default function Task(props: { description: Issue }) {
  const issueInfo = props.description;
  //{name: 'Flow upgrade to 0.205.1', id: 26796, creator_id: 'kassens', created_at: Tue May 09 2023 02:01:57 GMT+0200 (Восточная Европа, стандартное время), comments: 1}
  const date = new Date().getDate() - issueInfo.created_at.getDate();

  return (
    <div>
      <p>{issueInfo.name}</p>
      <p>{issueInfo.id}</p>
      <p>
        {issueInfo.creator_id}, {issueInfo.comments},{" "}
        {date === 0 ? "today" : `${date} day(s) ago`}
      </p>
    </div>
  );
}
