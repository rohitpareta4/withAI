export interface Note {
  id: number;
  note: string;
  completed: boolean;
}

export interface CreateNote {
  note: string;
}

export interface UpdateNote {
  id: number;
  note: string;
}