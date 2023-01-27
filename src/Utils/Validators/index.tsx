export const isEmailValid = (email: string) => {
  const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return emailPattern.test(email);
};

export const isPasswordValid = (password: string) => {
  const passwordPattern = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?!.* ).{5,10}$/;
  return passwordPattern.test(password);
};
export const isNameValid = (name: string) => {
  const namePattern = /^[\a-zA-Z]*[\s]*[\a-zA-Z]*[\s]*[\a-zA-Z]*$/;
  return namePattern.test(name);
};
