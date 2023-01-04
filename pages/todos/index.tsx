import Link from "next/link";
import { useQuery } from "react-query";
import { loadTodos, MAX_COUNT } from "../../lib/load-todos";
import { useState } from "react";

const Todos = () => {
  const [start, setStart] = useState([0]);
  const [count, setCount] = useState(MAX_COUNT);
  const res = useQuery(["todos", { start, count }], loadTodos, {
    staleTime: 30000,
    keepPreviousData: true,
  });
  if (res.isLoading) return <div>loading...</div>;

  return (
    <>
      <ul>
        {res.data?.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
      <br />
      <button
        onClick={() => setStart((start) => Math.max(start - MAX_COUNT, 0))}
        disabled={start <= 0}
      >
        prev
      </button>
      <button
        onClick={() => {
          if (!res.isPreviousData) {
            setStart((start) => start + MAX_COUNT);
          }
        }}
        disabled={res.isPreviousData}
      >
        next
      </button>
      <br />
      <Link href="/">go to main</Link>
    </>
  );
};

export default Todos;
