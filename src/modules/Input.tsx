import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function Input() {
  return (
    <div>
      <Form>
        <Form.Control type="search" />
        <Button type="submit" variant="primary">
          Search
        </Button>
      </Form>
    </div>
  );
}
