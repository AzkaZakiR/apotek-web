import bcrypt from "bcrypt";

const hashPass = await bcrypt.hash("qwer1234", 5);
export const staffG = [
  {
    "id": "staff-01",
    "nama": "Gilang ciamis",
    "username": "gilang",
    "password": hashPass,
    "alamat": "Jln Sekeloa no 20",
    "no_telp": "08125212312",
  },
  {
    "id": "staff-02",
    "nama": "Ujang Garut",
    "username": "ujang",
    "password": hashPass,
    "alamat": "Jln Tubasgus no 20",
    "no_telp": "0812521221",
  },
  {
    "id": "staff-03",
    "nama": "Dadang Cimahi",
    "username": "dadang",
    "password": hashPass,
    "alamat": "Jln Sekeloa no 20",
    "no_telp": "08125212312",
  },
];
