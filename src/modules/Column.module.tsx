import Task from "./Task.module";
import Col from "react-bootstrap/Col";

import type { Repo } from "../helpers/interfaces";
interface issueStatusProp {
  name: string;
  issues: Object[] | null;
}

export default function Column(props: issueStatusProp) {
  console.log(props);
  if (props.issues) {
    return (
      <Col>
        <Task />
        <Task />
        <Task />
      </Col>
    );
  } else {
    return <div>No data</div>;
  }
}
