import { useEffect, useState } from "react";

import Column from "./Column.module";
import Input from "./Input.module";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import { selectActions } from "../store/action-slice";
import { useAppSelector } from "../store/configureStore";

import type { Repo } from "../helpers/interfaces";

export default function Layout() {
  const [issues, setIssues] = useState("");

  const [path, setPath] = useState<String[]>([]);
  const [data, setData] = useState<Repo | null>();

  const selector = useAppSelector(selectActions);
  useEffect(() => {
    if (issues) {
      const arr = issues.split("-");
      setPath(arr);
      const storeData = selector[issues];
      setData(storeData);
    }
  }, [issues]);
  const getIssues = function (path: string) {
    setIssues(path);
  };
  return (
    <Container>
      <Input issueGetter={getIssues} />
      {issues && (
        <p>
          {path[0]}
          {">"} {path[1]}
        </p>
      )}

      <Row>
        <Column name="open" issues={data ? data.open : null} />
        <Column name="progress" issues={data ? data.progress : null} />
        <Column name="done" issues={data ? data.done : null} />
      </Row>
    </Container>
  );
}
