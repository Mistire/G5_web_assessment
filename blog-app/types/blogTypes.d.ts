export interface BlogDetail {
  _id: string;
  image: string;
  title: string;
  description: string;
  author: {
    _id: string;
    name: string;
    email: string;
    image: string;
    role: string;
  };
  tags: string[];
  createdAt: string;
}
