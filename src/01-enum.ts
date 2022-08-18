enum ROLES {
   ADMIN = 'admin',
   SELLER = 'seller',
   CUSTOMER = 'customer',


}

type User = {
  username: string;
  role: ROLES;
}

const loreUser: User = {
  username: 'Lorena',
  role: ROLES.ADMIN,
}
