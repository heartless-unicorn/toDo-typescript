import type { Issue } from "../helpers/interfaces";
import { ItemType, PathContext } from "../helpers/constants";

import { useDrag } from "react-dnd";

import "./styles/Task.css";
import { useContext } from "react";

export default function Task(props: { description: Issue; position: string }) {
  const { issuesPath } = useContext(PathContext);

  const issueInfo = props.description;
  const date = new Date().getDate() - new Date(issueInfo.created_at).getDate();

  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: ItemType.CARD,
      item: {
        id: props.description.id,
        curPosition: props.position,
        path: issuesPath,
      },
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    }),
    [props.description.id]
  );

  return (
    <div className="Task" ref={drag}>
      <p>{issueInfo.name}</p>
      <p>{issueInfo.id}</p>
      <p>
        {issueInfo.creator_id}, {issueInfo.comments},{" "}
        {date === 0 ? "today" : `${date} day(s) ago`}
      </p>
    </div>
  );
}
