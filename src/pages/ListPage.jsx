import { useState } from "react";
import { MainLayout } from "../components";
import { useList } from "../hooks";

export function ListPage() {
  const [task, setTask] = useState("");

  const { list, addItem } = useList();

  function onSubmit(event) {
    event.preventDefault();

    addItem({
      content: task,
      priority: 1,
    });
  }

  return (
    <MainLayout>
      <h1>Manage Tasks</h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="task">New Task</label>
          <input
            type="text"
            name="task"
            id="task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </div>
        <div className="form-group">
          <button type="submit">Add</button>
        </div>
      </form>
      <ul>
        {list.map((item) => {
          return (
            <li key={item.id} id={item.id}>
              {item.content}
            </li>
          );
        })}
      </ul>
    </MainLayout>
  );
}
