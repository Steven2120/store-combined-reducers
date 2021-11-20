const productList = [
  {
    id: "123",
    title: "Christmas Tree",
    description: "Beautiful Christmas tree",
    brand: "Pinewood Oaks",
    price: 15000,
    image:
      "https://images.unsplash.com/photo-1606922619208-e0a4227607f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1036&q=80",
  },
  {
    id: "345",
    title: "MacBook Pro",
    description: "MacBook Pro 13inch",
    brand: "Apple",
    price: 140000,
    image:
      "https://images.unsplash.com/photo-1569770218135-bea267ed7e84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
  },
];

var users = [
  {
    id: "111",
    email: "steve@email.com",
    name: "Steven",
    lastName: "Smith",
    password: "password",
    favoriteItems: ["345"],
  },
];

export const editFavorites = (userId, favorites) =>
  new Promise((resolve, reject) => {
    console.log("fetching Data from imaginary products database");
    setTimeout(() => {
      try {
        const user = users.find((user) => user.id === userId);

        const arrayOfOtherUsers = users.filter((user) => user.id !== userId);

        const userWithUpdatedFavorites = { ...user, favoriteItems: favorites };

        users = [...arrayOfOtherUsers, userWithUpdatedFavorites];

        resolve(userWithUpdatedFavorites);

        throw new Error("Incorrect username or password");
      } catch (error) {
        reject(error);
      }
    }, 1000);
  });

export const logInUser = (email, password) =>
  new Promise((resolve, reject) => {
    const userFound = users.find((user) => {
      if (user.email === email && user.password === password) {
        return true;
      }

      return false;
    });

    console.log("fetching Data from imaginary products database");
    setTimeout(() => {
      try {
        if (userFound) {
          resolve(userFound);
        }
        throw new Error("Incorrect username or password");
      } catch (error) {
        reject(error);
      }
    }, 1000);
  });

export const fetchProducts = () =>
  new Promise((resolve, reject) => {
    console.log("fetching Data from imaginary products database");
    setTimeout(() => {
      try {
        resolve(productList);
      } catch (error) {
        reject(error);
      }
    }, 1000);
  });
