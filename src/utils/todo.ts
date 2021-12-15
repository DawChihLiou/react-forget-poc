import { TodoBody, VisibilityStatus } from '../types';

export const initialTodos: TodoBody[] = [
  { id: 0, content: 'memo', completed: false },
  { id: 1, content: 'useCallback', completed: false },
  { id: 2, content: 'useMemo', completed: false },
];

function getNextTodoId(todos: TodoBody[]) {
  return todos.length;
}

export function getUpdated(todos: TodoBody[], todo: string): TodoBody[] {
  const pivot = todos.findIndex((item) => item.content === todo);

  // toggle `completed` status if todo content is found
  if (pivot !== -1) {
    return [
      ...todos.slice(0, pivot),
      {
        ...todos[pivot],
        completed: !todos[pivot].completed,
      },
      ...todos.slice(pivot + 1),
    ];
  }
  // add todo to totos
  return [
    ...todos,
    { id: getNextTodoId(todos), content: todo, completed: false },
  ];
}

export function getFiltered(todos: TodoBody[], visibility: VisibilityStatus) {
  const filtered = todos.filter((todo) => {
    if (visibility === 'all') {
      return true;
    }
    if (visibility === 'active') {
      return !todo.completed;
    }
    if (visibility === 'completed') {
      return todo.completed;
    }
  });
  return filtered;
}

export function checkIsTodoChanged(t1: TodoBody[], t2: TodoBody[]): boolean {
  if (t1.length !== t2.length) {
    return true;
  }
  for (let i = 0; i < t1.length; i++) {
    if (t1[i].completed !== t2[i].completed) {
      return true;
    }
  }
  return false;
}
