const conta = {
  email: "thallentos@gmail.com",
  password: "1234",
  name: 'Thallentos'
};

export const api = new Promise((resolve) => {
  setTimeout(() => {
    resolve(conta);
  }, 3000);
});
