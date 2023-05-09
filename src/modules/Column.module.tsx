import Task from "./Task.module";
import Col from "react-bootstrap/Col";

import type { Repo, Issue } from "../helpers/interfaces";
interface issueStatusProp {
  name: string;
  issues: Issue[] | null;
}

export default function Column(props: issueStatusProp) {
  console.log(props);
  if (props.issues) {
    return (
      <Col>
        {props.issues.map((el) => {
          return <Task description={el} key={el.id} />;
        })}
      </Col>
    );
  } else {
    return <div>No data</div>;
  }
}
