import { useState, useEffect, SyntheticEvent, ChangeEvent } from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { getIssuesHandler } from "./handlers/getIssuesHandler";
import type { Issue } from "../helpers/interfaces";

export default function Input() {
  const [link, setLink] = useState<string>("");
  const [issues, setIssues] = useState<Issue[]>();
  const [error, setError] = useState<boolean>(false);
  useEffect(() => {}, [issues]);

  const handleInput = function (event: ChangeEvent) {
    const target = event.currentTarget as HTMLInputElement;
    setLink(target.value);
  };
  const handleSubmit = async function (event: SyntheticEvent) {
    event.preventDefault();
    await getIssuesHandler(link)
      .then((response) => {
        console.log(response);
        setIssues(response);
      })
      .catch(() => setError(true));
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Control type="search" onChange={handleInput} />
        <Button type="submit" variant="primary">
          Search
        </Button>
      </Form>
    </div>
  );
}
