// Minimal declarations for the React 17+ JSX runtime.
// This fixes: "This JSX tag requires the module path 'react/jsx-runtime' to exist".

declare module "react/jsx-runtime" {
  export const Fragment: any;
  export function jsx(type: any, props: any, key?: any): any;
  export function jsxs(type: any, props: any, key?: any): any;
}


