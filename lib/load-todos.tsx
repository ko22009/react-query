import { QueryFunction } from "react-query";
import { QueryKey } from "react-query/types/core/types";

type Todo = {
  title: string;
  id: number;
};

type Pagination = {
  start: number;
  count: number;
};

type Params = QueryKey & [string, Pagination];

export const MAX_COUNT = 5;

export const loadTodos: QueryFunction<Todo[], Params> = async ({
  queryKey,
}) => {
  const pagination = queryKey[1];
  const req = await fetch(
    `https://jsonplaceholder.typicode.com/todos?_start=${
      pagination?.start ?? 0
    }&_limit=${pagination?.count ?? MAX_COUNT}`
  );
  return await req.json();
};
