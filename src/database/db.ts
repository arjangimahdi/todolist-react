let version = 1;

export interface Task {
  id: string
  date: string
  title: string
  isChecked: boolean
}

export enum Stores {
  Tasks = 'tasks',
}

export const initDB = (): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('TaskDB', version);

    request.onupgradeneeded = () => {
      const db = request.result;

      if (!db.objectStoreNames.contains(Stores.Tasks)) {
        console.log('Creating tasks store');
        db.createObjectStore(Stores.Tasks, { keyPath: 'id' });
      }
    };

    request.onsuccess = () => {
      const db = request.result;
      console.log('Database initialized successfully', db.version);
      resolve(true);
    };

    request.onerror = (event) => {
      console.error('Database initialization failed', event);
      reject(false);
    };
  });
};
