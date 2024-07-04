export type TextPostDto = {
  title: string;
  text: string;
  userId: string;
  postType: "text";
};

export type CreateUserDto = {
  username: string;
  email: string;
  password: string;
};

export type LoginUserDto = {
  username: string;
  password: string;
};
