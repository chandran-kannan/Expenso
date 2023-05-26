export const emailValidator = (email: string) => {
  const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return emailPattern.test(email);
};

export const passwordValidator = (password: string) => {
  const passwordPattern = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?!.* ).{5,10}$/;
  return passwordPattern.test(password);
};
export const nameValidator = (name: string) => {
  const namePattern = /^[\a-zA-Z]*[\s]*[\a-zA-Z]*[\s]*[\a-zA-Z]*$/;
  return namePattern.test(name);
};
export const numberValidator = (number: string) => {
  const numberPattern = /^\d*$/;
  return numberPattern.test(number);
};
