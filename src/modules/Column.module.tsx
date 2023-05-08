import Task from "./Task";
import Col from "react-bootstrap/Col";

export default function Column() {
  return (
    <Col>
      <Task />
      <Task />
      <Task />
    </Col>
  );
}
