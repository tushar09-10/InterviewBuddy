// Minimal type declarations for 'firebase/firestore' used in this project.
// These are only to satisfy TypeScript and do not affect runtime behavior.

declare module "firebase/firestore" {
  // Basic Firestore field/value helpers
  export type Timestamp = any;
  export type FieldValue = any;

  export function serverTimestamp(): FieldValue;

  // Firestore app / db
  export interface Firestore {}
  export function getFirestore(app?: any): Firestore;

  // Document / collection references
  export interface DocumentReference<T = any> {}
  export interface CollectionReference<T = any> {}
  export interface Query<T = any> {}
  export interface QuerySnapshot<T = any> {
    docs: Array<{ id: string; data(): T }>;
  }

  export function doc(
    db: Firestore,
    collectionPath: string,
    documentId?: string
  ): DocumentReference;

  export function collection(
    db: Firestore,
    collectionPath: string
  ): CollectionReference;

  // CRUD operations
  export function getDoc<T = any>(
    ref: DocumentReference<T>
  ): Promise<{ id: string; exists(): boolean; data(): T }>;

  export function setDoc<T = any>(
    ref: DocumentReference<T>,
    data: T
  ): Promise<void>;

  export function addDoc<T = any>(
    ref: CollectionReference<T>,
    data: T
  ): Promise<{ id: string }>;

  export function updateDoc<T = any>(
    ref: DocumentReference<T>,
    data: Partial<T>
  ): Promise<void>;

  export function deleteDoc(ref: DocumentReference<any>): Promise<void>;

  // Querying
  export function query<T = any>(
    ref: CollectionReference<T> | Query<T>,
    ...constraints: any[]
  ): Query<T>;

  export function where(
    fieldPath: string,
    opStr: any,
    value: any
  ): any;

  export function getDocs<T = any>(
    q: Query<T>
  ): Promise<QuerySnapshot<T>>;

  export function onSnapshot<T = any>(
    q: Query<T>,
    onNext: (snapshot: QuerySnapshot<T>) => void,
    onError?: (err: any) => void
  ): () => void;
}


