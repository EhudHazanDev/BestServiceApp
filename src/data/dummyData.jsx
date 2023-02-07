export const AppInfo = {
  name: "BestService",
  user: "Ehud Hazan",
  mail: "EhudHazandev@gmail.com",
};

export const Tasks = [
  {
    _id: "t001",
    waiterId: "1",
    requestId: "2",
    tableId: "2",
    createdAt: "2023-01-10T15:14:52.115Z",
    isDone: false,
  },
  {
    _id: "t002",
    waiterId: "2",
    requestId: "2",
    tableId: "2",
    createdAt: new Date(),
    isDone: true,
  },
  {
    _id: "t003",
    waiterId: "3",
    requestId: "2",
    tableId: "1",
    createdAt: new Date(),
    isDone: false,
  },
  {
    _id: "t004",
    waiterId: "1",
    requestId: "1",
    tableId: "4",
    createdAt: new Date(),
    isDone: false,
  },
  {
    _id: "t005",
    waiterId: "3",
    requestId: "2",
    tableId: "2",
    createdAt: new Date(),
    isDone: false,
  },
  
  {
    _id: "t006",
    waiterId: "2",
    requestId: "2",
    tableId: "2",
    createdAt: new Date(),
    isDone: false,
  },
];

export const Waiters = [
  {
    _id: "1",
    fullName: "Ehud Hazan",
    Address: {
      street: "Ber Nisan 30",
      city: "Beer Sheva",
      Cuntry: "Israel",
    },
    phone: "0585888123",
    email: "ehudhazandev@gmail.com",
  },
  {
    _id: "2",
    fullName: "Harel Hazan",
    Address: {
      street: "Yakov Hazan 8",
      city: "Beer Sheva",
      Cuntry: "Israel",
    },
    phone: "0584588812",
    email: "hazandev@gmail.com",
  },
  {
    _id: "3",
    fullName: "Shiran Hazan",
    Address: {
      street: "Ben Abu 9",
      city: "Nativot",
      Cuntry: "Israel",
    },
    phone: "0587888123",
    email: "shiranhzn@gmail.com",
  },
];

export const CustomerRequests = [
  {
    _id: "1",
    type: "cutlery" /*סכום*/,
  },
  {
    _id: "2",
    type: "bread",
  },
  {
    _id: "3",
    type: "drink",
  },
  {
    _id: "4",
    type: "Salad",
  },
  {
    _id: "5",
    type: "Appetizer" /*מנה ראשונה*/,
  },
  {
    _id: "6",
    type: "Main Course" /*מנה עיקרית*/,
  },
  {
    _id: "7",
    type: "dessert" /*קינוח*/,
  },
];

export const Tables = [
  {
    _id: "1",
    waiterId: "2",
  },
  {
    _id: "2",
    waiterId: "3",
  },
  {
    _id: "3",
    waiterId: "1",
  },
  {
    _id: "4",
    waiterId: "1",
  },
];
