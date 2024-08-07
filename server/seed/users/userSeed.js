const bcrypt = require("bcrypt");

const users = [
  {
    username: "whiskeylover01",
    email: "whiskeylover01@example.com",
    password: bcrypt.hashSync("password123", 10),
    full_name: "John Doe",
    address: "123 Bourbon St, Louisville, KY",
    phone_number: "502-555-1234",
    is_admin: false,
    created_at: "2023-05-15T08:27:32.000Z",
    updated_at: "2023-06-12T15:43:29.000Z",
  },
  {
    username: "bourbonfanatic22",
    email: "bourbonfanatic22@example.com",
    password: bcrypt.hashSync("password123", 10),
    full_name: "Jane Smith",
    address: "456 Whiskey Ln, Frankfort, KY",
    phone_number: "502-555-5678",
    is_admin: false,
    created_at: "2022-11-23T14:22:37.000Z",
    updated_at: "2023-01-03T10:45:14.000Z",
  },
  {
    username: "whiskeyenthusiast",
    email: "whiskeyenthusiast@example.com",
    password: bcrypt.hashSync("password123", 10),
    full_name: "Michael Johnson",
    address: "789 Rye Rd, Bardstown, KY",
    phone_number: "502-555-8765",
    is_admin: false,
    created_at: "2022-12-10T07:15:48.000Z",
    updated_at: "2023-02-01T09:31:22.000Z",
  },
  {
    username: "bourbonhunter",
    email: "bourbonhunter@example.com",
    password: bcrypt.hashSync("password123", 10),
    full_name: "Sarah Davis",
    address: "321 Barrel St, Louisville, KY",
    phone_number: "502-555-4321",
    is_admin: false,
    created_at: "2023-04-19T11:44:08.000Z",
    updated_at: "2023-05-23T14:52:13.000Z",
  },
  {
    username: "whiskeyaddict",
    email: "whiskeyaddict@example.com",
    password: bcrypt.hashSync("password123", 10),
    full_name: "Chris Brown",
    address: "654 Distillery Rd, Frankfort, KY",
    phone_number: "502-555-9876",
    is_admin: false,
    created_at: "2023-03-05T16:33:19.000Z",
    updated_at: "2023-04-10T12:28:35.000Z",
  },
  {
    username: "singlemaltfan",
    email: "singlemaltfan@example.com",
    password: bcrypt.hashSync("password123", 10),
    full_name: "Patricia Wilson",
    address: "987 Scotch St, Bardstown, KY",
    phone_number: "502-555-6543",
    is_admin: false,
    created_at: "2022-10-25T09:29:17.000Z",
    updated_at: "2022-12-07T14:18:25.000Z",
  },
  {
    username: "whiskeyconnoisseur",
    email: "whiskeyconnoisseur@example.com",
    password: bcrypt.hashSync("password123", 10),
    full_name: "James Taylor",
    address: "432 Rye Rd, Louisville, KY",
    phone_number: "502-555-3456",
    is_admin: false,
    created_at: "2022-11-14T10:31:12.000Z",
    updated_at: "2023-01-15T15:20:29.000Z",
  },
  {
    username: "bourboncollector",
    email: "bourboncollector@example.com",
    password: bcrypt.hashSync("password123", 10),
    full_name: "Linda Martinez",
    address: "876 Malt St, Frankfort, KY",
    phone_number: "502-555-2345",
    is_admin: false,
    created_at: "2023-02-25T14:22:48.000Z",
    updated_at: "2023-03-22T17:19:37.000Z",
  },
  {
    username: "whiskeyaficionado",
    email: "whiskeyaficionado@example.com",
    password: bcrypt.hashSync("password123", 10),
    full_name: "David Anderson",
    address: "123 Scotch Ln, Bardstown, KY",
    phone_number: "502-555-7890",
    is_admin: false,
    created_at: "2022-09-17T12:45:19.000Z",
    updated_at: "2022-11-21T16:23:14.000Z",
  },
  {
    username: "bourbonlover",
    email: "bourbonlover@example.com",
    password: bcrypt.hashSync("password123", 10),
    full_name: "Barbara Thomas",
    address: "456 Rye St, Louisville, KY",
    phone_number: "502-555-6789",
    is_admin: false,
    created_at: "2022-08-24T15:36:28.000Z",
    updated_at: "2022-10-19T13:14:12.000Z",
  },
  {
    username: "whiskeytaster",
    email: "whiskeytaster@example.com",
    password: bcrypt.hashSync("password123", 10),
    full_name: "Daniel White",
    address: "789 Bourbon Rd, Frankfort, KY",
    phone_number: "502-555-5674",
    is_admin: false,
    created_at: "2022-12-02T13:23:24.000Z",
    updated_at: "2023-01-11T10:17:43.000Z",
  },
  {
    username: "bourbonexpert",
    email: "bourbonexpert@example.com",
    password: bcrypt.hashSync("password123", 10),
    full_name: "Nancy Harris",
    address: "321 Malt St, Bardstown, KY",
    phone_number: "502-555-9870",
    is_admin: false,
    created_at: "2023-01-29T14:22:18.000Z",
    updated_at: "2023-02-27T12:35:24.000Z",
  },
  {
    username: "whiskeydrinker",
    email: "whiskeydrinker@example.com",
    password: bcrypt.hashSync("password123", 10),
    full_name: "Matthew Clark",
    address: "654 Scotch Rd, Louisville, KY",
    phone_number: "502-555-8760",
    is_admin: false,
    created_at: "2023-03-12T09:19:48.000Z",
    updated_at: "2023-04-15T13:31:17.000Z",
  },
  {
    username: "bourbonlover123",
    email: "bourbonlover123@example.com",
    password: bcrypt.hashSync("password123", 10),
    full_name: "Donna Lewis",
    address: "987 Rye St, Frankfort, KY",
    phone_number: "502-555-7654",
    is_admin: false,
    created_at: "2022-07-18T08:31:12.000Z",
    updated_at: "2022-09-20T14:22:09.000Z",
  },
  {
    username: "whiskeyenthusiast456",
    email: "whiskeyenthusiast456@example.com",
    password: bcrypt.hashSync("password123", 10),
    full_name: "Paul Walker",
    address: "432 Barrel Ln, Bardstown, KY",
    phone_number: "502-555-6540",
    is_admin: false,
    created_at: "2022-10-22T12:15:32.000Z",
    updated_at: "2022-11-29T10:23:17.000Z",
  },
  {
    username: "bourboncollector789",
    email: "bourboncollector789@example.com",
    password: bcrypt.hashSync("password123", 10),
    full_name: "Michelle Hall",
    address: "876 Malt Rd, Louisville, KY",
    phone_number: "502-555-5432",
    is_admin: false,
    created_at: "2023-04-25T11:31:45.000Z",
    updated_at: "2023-05-17T09:45:23.000Z",
  },
  {
    username: "whiskeyaddict101",
    email: "whiskeyaddict101@example.com",
    password: bcrypt.hashSync("password123", 10),
    full_name: "Andrew Allen",
    address: "123 Bourbon Ln, Frankfort, KY",
    phone_number: "502-555-4320",
    is_admin: false,
    created_at: "2022-09-27T10:11:12.000Z",
    updated_at: "2022-11-05T08:25:21.000Z",
  },
  {
    username: "bourbonfanatic202",
    email: "bourbonfanatic202@example.com",
    password: bcrypt.hashSync("password123", 10),
    full_name: "Jessica Young",
    address: "456 Rye Rd, Bardstown, KY",
    phone_number: "502-555-3210",
    is_admin: false,
    created_at: "2023-05-07T14:45:28.000Z",
    updated_at: "2023-06-12T10:22:36.000Z",
  },
  {
    username: "whiskeylover303",
    email: "whiskeylover303@example.com",
    password: bcrypt.hashSync("password123", 10),
    full_name: "Joshua King",
    address: "789 Scotch Ln, Louisville, KY",
    phone_number: "502-555-2109",
    is_admin: false,
    created_at: "2022-08-13T09:22:45.000Z",
    updated_at: "2022-09-29T15:17:34.000Z",
  },
  {
    username: "bourbonhunter404",
    email: "bourbonhunter404@example.com",
    password: bcrypt.hashSync("password123", 10),
    full_name: "Emily Wright",
    address: "321 Barrel St, Frankfort, KY",
    phone_number: "502-555-1098",
    is_admin: false,
    created_at: "2023-02-18T16:13:17.000Z",
    updated_at: "2023-03-21T12:14:09.000Z",
  },
  {
    username: "whiskeyenthusiast505",
    email: "whiskeyenthusiast505@example.com",
    password: bcrypt.hashSync("password123", 10),
    full_name: "Ryan Lopez",
    address: "654 Distillery Ln, Bardstown, KY",
    phone_number: "502-555-0987",
    is_admin: false,
    created_at: "2023-01-15T14:27:38.000Z",
    updated_at: "2023-02-13T10:45:47.000Z",
  },
  {
    username: "bourboncollector606",
    email: "bourboncollector606@example.com",
    password: bcrypt.hashSync("password123", 10),
    full_name: "Laura Hill",
    address: "987 Malt St, Louisville, KY",
    phone_number: "502-555-9871",
    is_admin: false,
    created_at: "2022-12-28T12:33:14.000Z",
    updated_at: "2023-01-26T16:21:23.000Z",
  },
  {
    username: "whiskeyconnoisseur707",
    email: "whiskeyconnoisseur707@example.com",
    password: bcrypt.hashSync("password123", 10),
    full_name: "Kevin Scott",
    address: "432 Rye Rd, Frankfort, KY",
    phone_number: "502-555-8762",
    is_admin: false,
    created_at: "2023-04-02T10:45:21.000Z",
    updated_at: "2023-05-09T15:22:45.000Z",
  },
  {
    username: "bourbonlover808",
    email: "bourbonlover808@example.com",
    password: bcrypt.hashSync("password123", 10),
    full_name: "Sarah Green",
    address: "876 Malt Ln, Bardstown, KY",
    phone_number: "502-555-7653",
    is_admin: false,
    created_at: "2022-11-16T14:15:48.000Z",
    updated_at: "2023-01-22T12:45:34.000Z",
  },
  {
    username: "whiskeyaficionado909",
    email: "whiskeyaficionado909@example.com",
    password: bcrypt.hashSync("password123", 10),
    full_name: "Tyler Adams",
    address: "123 Scotch Rd, Louisville, KY",
    phone_number: "502-555-6541",
    is_admin: false,
    created_at: "2023-03-11T09:12:38.000Z",
    updated_at: "2023-04-19T10:47:28.000Z",
  },
  {
    username: "bourbonexpert010",
    email: "bourbonexpert010@example.com",
    password: bcrypt.hashSync("password123", 10),
    full_name: "Kelly Baker",
    address: "456 Rye St, Frankfort, KY",
    phone_number: "502-555-5430",
    is_admin: false,
    created_at: "2023-01-24T11:33:12.000Z",
    updated_at: "2023-03-03T14:12:09.000Z",
  },
  {
    username: "whiskeytaster111",
    email: "whiskeytaster111@example.com",
    password: bcrypt.hashSync("password123", 10),
    full_name: "Brandon Carter",
    address: "789 Barrel Rd, Bardstown, KY",
    phone_number: "502-555-4329",
    is_admin: false,
    created_at: "2022-10-18T13:45:23.000Z",
    updated_at: "2022-11-23T16:28:14.000Z",
  },
  {
    username: "bourboncollector212",
    email: "bourboncollector212@example.com",
    password: bcrypt.hashSync("password123", 10),
    full_name: "Rachel Turner",
    address: "321 Malt Ln, Louisville, KY",
    phone_number: "502-555-3218",
    is_admin: false,
    created_at: "2022-12-15T11:29:14.000Z",
    updated_at: "2023-01-14T10:47:32.000Z",
  },
  {
    username: "whiskeylover313",
    email: "whiskeylover313@example.com",
    password: bcrypt.hashSync("password123", 10),
    full_name: "Justin Parker",
    address: "654 Scotch St, Frankfort, KY",
    phone_number: "502-555-2107",
    is_admin: false,
    created_at: "2023-02-13T12:12:19.000Z",
    updated_at: "2023-03-19T09:34:21.000Z",
  },
  {
    username: "bourbonfanatic414",
    email: "bourbonfanatic414@example.com",
    password: bcrypt.hashSync("password123", 10),
    full_name: "Brittany Collins",
    address: "987 Barrel Rd, Bardstown, KY",
    phone_number: "502-555-1096",
    is_admin: false,
    created_at: "2022-09-29T15:22:14.000Z",
    updated_at: "2022-11-11T16:11:13.000Z",
  },
];

module.exports = users;
