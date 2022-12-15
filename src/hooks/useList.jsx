import { useState } from "react";

export function useList() {
  const [list, setList] = useState([
    {
      id: 1,
      content: "Sleep",
      priority: 1,
    },
    {
      id: 2,
      content: "Code",
      priority: 1,
    },
  ]);
  const [nextId, setNextId] = useState(3);

  function addItem(item) {
    item.id = nextId;
    setNextId(nextId + 1);
    setList([...list, item]);
  }

  function removeItem(id) {
    let updatedList = list.filter((item) => item.id !== id);
    setList(updatedList);
  }

  return { list, addItem, removeItem };
}

