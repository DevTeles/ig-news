import NextAuth from 'next-auth';

declare module "next-auth" {
  interface Session {
    activeSubscription: Promise<object> | null;
  }
}