export type User = {
  id: number;
  login: string;
  avatar_url: string;
  location: string | null;
  blog: string | null;
  twitter_username: string | null;
  public_repos: number | null;
  followers: number | null;
  following: number | null;
  created_at: string;
  company: string | null;
  name: string | null;
  bio: string | null;
};

export type BgImages = {
  bg: string
}

export type Submit = {
submit:(query:string)=> void;
error: string | null;
}

export type StylesProps = {
  status: "available" | "disable";
}