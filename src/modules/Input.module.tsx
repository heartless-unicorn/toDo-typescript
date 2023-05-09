import { useState, useEffect, SyntheticEvent, ChangeEvent } from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { getIssuesHandler } from "./handlers/getIssuesHandler";

import { addRepo } from "../store/action-slice";
import { useAppDispatch } from "../store/configureStore";

export default function Input(props: { issueGetter: (path: string) => void }) {
  const [link, setLink] = useState<string>("");

  const [error, setError] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const handleInput = function (event: ChangeEvent) {
    const target = event.currentTarget as HTMLInputElement;
    setLink(target.value);
  };
  const handleSubmit = async function (event: SyntheticEvent) {
    event.preventDefault();
    const repo: string = link.split("/").at(-1) ?? "";
    const owner: string = link.split("/").at(-2) ?? "";
    await getIssuesHandler(owner, repo)
      .then((response) => {
        dispatch(addRepo(response));
        props.issueGetter(`${owner}-${repo}`);
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
