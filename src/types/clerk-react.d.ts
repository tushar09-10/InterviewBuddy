// Minimal type declarations for '@clerk/clerk-react' used in this project.
// This satisfies TypeScript when the library's own type declarations
// are not being picked up, without affecting runtime behavior.

declare module "@clerk/clerk-react" {
  export interface ClerkUser {
    id: string;
    fullName?: string | null;
    firstName?: string | null;
    primaryEmailAddress?: { emailAddress: string } | null;
    imageUrl: string;
  }

  export function useAuth(): {
    isSignedIn: boolean | null;
    userId: string | null;
  };

  export function useUser(): {
    isLoaded: boolean;
    isSignedIn: boolean | null;
    user: ClerkUser | null;
  };

  export interface ClerkProviderProps {
    publishableKey: string;
    afterSignOutUrl?: string;
    children?: React.ReactNode;
  }

  export const ClerkProvider: (props: ClerkProviderProps) => JSX.Element;
}


