export interface TodoBody {
  id: number;
  content: string;
  completed: boolean;
}

export type VisibilityStatus = 'all' | 'active' | 'completed';
