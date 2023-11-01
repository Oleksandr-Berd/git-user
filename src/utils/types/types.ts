export type User = {
  id: number;
  login: string;
  avatar_url: string;
  location: string;
  blog: string;
  twitter_username: string | null;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
  company: string;
  name: string;
  bio: string;
};

export type BgImages = {
  bg: string
}

export type Submit = {
submit:(query:string)=> void
}