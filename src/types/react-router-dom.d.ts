// Minimal type declarations for 'react-router-dom' used in this project.
// This satisfies TypeScript when it cannot find the library's own types.

declare module "react-router-dom" {
  export interface Location {
    pathname: string;
    search: string;
    hash: string;
    state?: unknown;
    key?: string;
  }

  export function useLocation(): Location;

  export function useNavigate(): (to: string, options?: { replace?: boolean; state?: unknown }) => void;

  export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    to: string;
    replace?: boolean;
    state?: unknown;
  }

  export const Link: (props: LinkProps) => JSX.Element;
}


