export interface Note {
  id: number;
  note: string;
  user_id: number;
  title: string
}

export interface CreateNote {
  note: string;
  title:string;
}

export interface UpdateNote {
  id: number;
  note: string;
}