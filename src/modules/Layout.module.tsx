import Column from "./Column.module";
import Input from "./Input.module";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

export default function Layout() {
  return (
    <Container>
      <Input />
      <p>Facebook {">"} React</p>
      <Row>
        <Column />
        <Column />
        <Column />
      </Row>
    </Container>
  );
}
