export interface createTodo{
    title:string
}

export interface Todo {
  id: number;
  user_id: number;
  title: string;
  completed: boolean;
}

export interface UpdateTodo {
  id: number;
  title: string;
  completed: boolean;
}

