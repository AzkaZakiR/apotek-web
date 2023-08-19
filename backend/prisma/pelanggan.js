import bcrypt from "bcrypt";

const hashPass = await bcrypt.hash("qwer1234", 5);
export const pelanggan = [
  {
    "id": "pelanggan-01",
    "nama": "Ali Azhar",
    "username": "ali",
    "password": hashPass,
    "alamat": "Jln Tubagus Ismail Dalam No 1",
    "no_telp": "081252125439",
  },
  {
    "id": "pelanggan-02",
    "nama": "Ali Hasan",
    "username": "hasan",
    "password": hashPass,
    "alamat": "Jln Tubagus Ismail Dalam No 2",
    "no_telp": "081252123361",
  },
  {
    "id": "pelanggan-03",
    "nama": "Ali Akbar",
    "username": "akbar",
    "password": hashPass,
    "alamat": "Jln Tubagus Ismail Dalam No 3",
    "no_telp": "081252126312",
  },
];
