import {
  useState,
  useEffect,
  SyntheticEvent,
  ChangeEvent,
  useContext,
} from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { getIssuesHandler } from "./handlers/getIssuesHandler";
import { PathContext } from "../helpers/constants";

import { addRepo, selectActions } from "../store/action-slice";
import { useAppDispatch, useAppSelector } from "../store/configureStore";

export default function Input() {
  const [link, setLink] = useState<string>("");

  const [error, setError] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const selector = useAppSelector(selectActions);

  const { issuesPath, setIssuesPath } = useContext(PathContext);

  const handleInput = function (event: ChangeEvent) {
    const target = event.currentTarget as HTMLInputElement;
    setLink(target.value);
  };
  const handleSubmit = async function (event: SyntheticEvent) {
    event.preventDefault();
    const repo: string = link.split("/").at(-1) ?? "";
    const owner: string = link.split("/").at(-2) ?? "";
    setIssuesPath(`${owner}-${repo}`);

    if (!(`${owner}-${repo}` in selector)) {
      await getIssuesHandler(owner, repo)
        .then((response) => {
          dispatch(addRepo(response));
        })
        .catch(() => setError(true));
    }
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
