type User = {
    name: string;
    surname: string;
    email: string;
    password: string;
};
  
  const baseUser: User = {
    name: "",
    surname: "",
    email: "",
    password: "",
};
  function createOrUpdateUser(initialValues: Partial<User>) {
    return { ...baseUser, ...initialValues };
  }
  
  createOrUpdateUser({
    email: "user@mail.com",
    password: "password123",
});