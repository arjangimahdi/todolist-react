# Project Overview

This project is a task management application built using React and IndexedDB for local data persistence. The main functionalities include:

- Creating, updating, and deleting tasks.
- Managing state using the `useReducer` hook.
- A reusable component architecture with `List`, `ListItem`, `Form`, and `Dialog` components.
- Persistent storage using IndexedDB.

## Components and Functionalities

### 1. `App.tsx`
The main entry point of the application. It:
- Initializes the IndexedDB database.
- Loads tasks from the database into the state.
- Manages the state of tasks using `useReducer`.
- Handles the display logic for creating, updating, and deleting tasks.

#### Key Functions

- **`taskReducer`**: 
  Handles state transitions for the task list. Supported actions:
  - `initialize`: Set initial tasks from the database.
  - `add`: Add a new task.
  - `delete`: Remove a task by its ID.
  - `update`: Update an existing task.

- **`setNewTask`**:
  Adds a new task and closes the `Dialog` for task creation.

- **`updateTask`**:
  Updates a task both in the database and in the state.

- **`deleteTask`**:
  Deletes a task from the database and removes it from the state.

### 2. `List`
A reusable component for rendering lists with type safety and dynamic rendering.

#### Features
- Accepts a generic type `T` for the list items and `P` for the child component props.
- Dynamically maps over the `tasks` array to render child components, passing individual task data and additional props.

#### Props
- **`tasks`**: An array of tasks of type `T` to render.
- **`children`**: A React element of type `P`, used as the template for rendering each task.

#### Example Usage
```tsx
<List tasks={taskList}>
  <ListItem onUpdate={handleUpdate} onDelete={handleDelete} />
</List>
```

### 3. `ListItem`
A component for rendering individual task items with editing and deletion capabilities.

#### Features
- Displays task details, including the ID and title.
- Provides buttons for:
  - **Edit**: Opens a dialog to edit the task using a `Form` component.
  - **Delete**: Deletes the task.

#### Props
- **`task`**: The task data of type `TaskItem` to display.
- **`onUpdate`**: Callback for updating the task after editing.
- **`onDelete`**: Callback for deleting the task by ID.

#### Example Usage
```tsx
<ListItem
  task={task}
  onUpdate={(updatedTask) => handleTaskUpdate(updatedTask)}
  onDelete={(taskId) => handleTaskDelete(taskId)}
/>
```

### 4. `Form`
A component for creating or updating tasks. It:
- Provides a form with fields for entering task details.
- Calls `onAddNewTask` or `onUpdateTask` when the form is submitted.

#### Props
- **`task?`**: Optional. The task data to prepopulate the form when editing.
- **`isEditing?`**: Optional. Boolean indicating if the form is in editing mode.
- **`onAddNewTask?`**: Callback for adding a new task.
- **`onUpdateTask?`**: Callback for updating an existing task.

#### Example Usage
```tsx
<Form 
  isEditing={true} 
  task={selectedTask} 
  onUpdateTask={(task) => handleUpdate(task)} 
/>
```

### 5. `Dialog`
A modal component for displaying forms or messages.

#### Features
- Provides a backdrop to emphasize modal content.
- Allows click-outside-to-close functionality.

#### Props
- **`title`**: The title of the dialog.
- **`isOpen`**: Boolean indicating whether the dialog is open.
- **`onClose`**: Callback for closing the dialog.
- **`children`**: Content to display inside the dialog.

#### Example Usage
```tsx
<Dialog 
  title="Add Task" 
  isOpen={showDialog} 
  onClose={() => setShowDialog(false)}
>
  <Form onAddNewTask={(task) => handleAddTask(task)} />
</Dialog>
```

### 6. IndexedDB Functions

The application uses IndexedDB for local data persistence. Key database operations are abstracted into reusable functions:

- **`initDB`**:
  Initializes the database and its object stores.

- **`getAll`**:
  Retrieves all records from a specified object store.

- **`insertRow`**:
  Inserts a new record into a specified object store.

- **`findById`**:
  Retrieves a record by ID from a specified object store.

- **`updateRow`**:
  Updates a specific record in an object store.

- **`deleteRow`**:
  Deletes a specific record by ID from an object store.

### 7. Utility Functions

#### `generateUniqueId` (in `utils/uniqueId.ts`):
Generates a unique identifier string for tasks or other entities.

```typescript
export function generateUniqueId(): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let uniqueId = '';

  for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      uniqueId += chars[randomIndex];
  }

  return uniqueId;
}
```

### 8. Type Definitions

#### `DialogProps` (in `types/dialog.d.ts`):
Defines the props used by the `Dialog` component.

```typescript
import { ReactNode } from "react"

export interface DialogProps {
  title: string
  isOpen: boolean
  onClose: () => void
  children: ReactNode
}
```

#### `TaskItem` (in `types/task.d.ts`):
Defines the structure of a task item.

```typescript
export interface TaskItem {
  readonly id: string
  title: string
  isChecked: boolean
  date: Date
}
```

### State Management

The application uses `useReducer` for managing the task state, making it predictable and easy to extend. State changes are triggered by dispatching actions from different components (e.g., `ListItem`, `Form`).

## Folder Structure

```
src/
|-- components/
|   |-- List.tsx
|   |-- ListItem.tsx
|   |-- Form.tsx
|   |-- Dialog.tsx
|
|-- database/
|   |-- db.ts
|   |-- repository.ts
|
|-- types/
|   |-- dialog.d.ts
|   |-- task.d.ts
|
|-- utils/
|   |-- uniqueId.ts
|
|-- App.tsx
```

### Key Directories
- **`components/`**: Contains reusable UI components.
- **`database/`**: Contains IndexedDB setup and data manipulation functions.
- **`types/`**: Defines TypeScript interfaces and types used in the application.
- **`utils/`**: Contains utility functions.

## Usage Instructions

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Run the app using `npm start`.
4. Use the UI to create, update, and delete tasks. Changes are saved locally using IndexedDB.

## Future Enhancements
- Add filtering and sorting capabilities for tasks.
- Integrate with an external API for optional synchronization.
- Enhance accessibility and add unit tests for critical components.