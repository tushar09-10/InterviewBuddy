// Minimal type declarations for 'react' used in this project.
// This is only to satisfy TypeScript when it can't find React's type package.

declare module "react" {
  export interface FC<P = {}> {
    (props: P & { children?: ReactNode }): JSX.Element | null;
  }

  export type ReactNode = JSX.Element | string | number | boolean | null | undefined | ReactNode[];

  export function useState<S>(initialState: S | (() => S)): [S, (value: S) => void];

  export function useEffect(effect: () => void | (() => void), deps?: readonly unknown[]): void;
}


