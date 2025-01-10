import { TaskItem } from "../types/task";

export const insertRow = (storeName: string, row: TaskItem): Promise<TaskItem | string | null> => {
    return new Promise((resolve) => {
        let request = indexedDB.open("TaskDB", 1);

        request.onsuccess = () => {
            let db = request.result;
            const tx = db.transaction(storeName, "readwrite");
            const store = tx.objectStore(storeName);
            store.add(row);
            resolve(row);
        };

        request.onerror = () => {
            const error = request.error?.message;
            if (error) {
                resolve(error);
            } else {
                resolve("Unknown error");
            }
        };
    });
};

export const findById = (storeName: string, id: string): Promise<TaskItem | string | null> => {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open("TaskDB", 1);

        request.onsuccess = () => {
            const db = request.result;
            const transaction = db.transaction(storeName, "readonly");
            const objectStore = transaction.objectStore(storeName);

            const getRequest = objectStore.get(id);

            getRequest.onsuccess = () => {
                resolve(getRequest.result ?? null);
            };

            getRequest.onerror = () => {
                console.error("Failed to retrieve the record:", getRequest.error);
                reject(getRequest.error);
            };

            transaction.oncomplete = () => {
                db.close();
            };
        };

        request.onerror = () => {
            console.error("Failed to open database:", request.error);
            reject(request.error);
        }
    });
};

export const getAll = (storeName: string): Promise<TaskItem[] | string | null> => {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open("TaskDB", 1);

        request.onupgradeneeded = () => {
            const db = request.result;
            if (!db.objectStoreNames.contains(storeName)) {
                reject(`Theres no store with ${storeName}`);
            }
        };

        request.onsuccess = (event) => {
            const db = request.result;
            const transaction = db.transaction(storeName, "readonly");
            const objectStore = transaction.objectStore(storeName);
            const getAllRequest = objectStore.getAll();

            getAllRequest.onsuccess = () => {
                resolve(getAllRequest.result);
            };

            getAllRequest.onerror = () => {
                reject(new Error("Failed to retrieve records from database."));
            };
        };

        request.onerror = () => {
            reject(new Error(`Failed to open database: ${request.error?.message}`));
        };
    });
};

export const updateRow = (storeName: string, row: TaskItem) => {    
    return new Promise((resolve, reject) => {
        const request = indexedDB.open("TaskDB", 1);

        request.onsuccess = () => {
            const db = request.result;
            const transaction = db.transaction(storeName, "readwrite");
            const objectStore = transaction.objectStore(storeName);

            const updateRequest = objectStore.put(row);

            updateRequest.onsuccess = () => {
                resolve(updateRequest.result ?? null);
            };

            updateRequest.onerror = () => {
                console.error("Failed to update the record:", updateRequest.error);
                reject(updateRequest.error);
            };

            transaction.oncomplete = () => db.close();
        };

        request.onerror = () => {
            console.error("Failed to open database:", request.error);
            reject(request.error);
        }
    });
};

export const deleteRow = (storeName: string, id: string) => {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open("TaskDB", 1);

        request.onsuccess = () => {
            const db = request.result;
            const transaction = db.transaction(storeName, "readwrite");
            const objectStore = transaction.objectStore(storeName);

            const updateRequest = objectStore.delete(id);

            updateRequest.onsuccess = () => {
                resolve(updateRequest.result ?? null);
            };

            updateRequest.onerror = () => {
                console.error("Failed to delete the record:", updateRequest.error);
                reject(updateRequest.error);
            };

            transaction.oncomplete = () => db.close();
        };

        request.onerror = () => {
            console.error("Failed to open database:", request.error);
            reject(request.error);
        }
    });
};
