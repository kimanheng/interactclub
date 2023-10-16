export interface Post {
  title: string;
  date: string;
  overview: string;
  content: any;
  _id: string;
  slug: {
    current: string;
  }
}

export interface About {
  image: string;
  name: string;
  role: string;
  year: string;
  bio: string;
}
