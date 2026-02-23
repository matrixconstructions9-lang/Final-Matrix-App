
export enum UserRole {
  OWNER = 'OWNER',
  ENGINEER = 'ENGINEER'
}

export interface User {
  id: string;
  username: string; // New: Unique identifier for login
  name: string;
  role: UserRole;
  assignedProjectIds: string[];
}

export enum TaskStatus {
  NOT_STARTED = 'NOT_STARTED',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
  DELAYED = 'DELAYED'
}

export interface Task {
  id: string;
  projectId: string;
  name: string;
  milestone: 'Foundation' | 'Structure' | 'Finishing' | 'Handover';
  startDate: string;
  endDate: string;
  status: TaskStatus;
  dependsOn?: string[]; // New: Array of task IDs that must be completed before this task can start
}

export interface Project {
  id: string;
  name: string;
  location: string;
  startDate: string;
  targetEndDate: string;
  progress: number;
  engineerIds: string[];
}

export interface DailyReport {
  id: string;
  projectId: string;
  engineerId: string;
  date: string;
  present: boolean;
  notes: string;
  photos: string[]; // Base64 strings
  tasksUpdated: string[]; // Task IDs
  latitude?: number; // Optional: Latitude of the engineer's location
  longitude?: number; // Optional: Longitude of the engineer's location
}

export interface AttendanceRecord {
  id: string;
  engineerId: string;
  date: string;
  present: boolean;
  projectId: string;
}