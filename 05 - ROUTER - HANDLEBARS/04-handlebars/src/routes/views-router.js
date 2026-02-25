import { Router } from "express";
const router = Router();

router.get("/vista1", (req, res) => {
  res.render("vista1");
});

router.get("/vista2", (req, res) => {
  res.render("vista2");
});

router.get("/vista3", (req, res) => {
  const user = {
    name: "Juan",
    age: 30,
    email: "juan@email.com",
  };
  res.render("vista3", { user });
});

const users = [
    {
        firstname: 'Juan',
        lastname: 'Perez',
        age: 30,
        mail: 'juan@mail.com',
        phone: "65458942"
    },
    {
        firstname: 'Carlos',
        lastname: 'Perez',
        age: 30,
        mail: 'car@mail.com',
        phone: "6767676"
    },
    {
        firstname: 'Juana',
        lastname: 'Perez',
        age: 30,
        mail: 'juani@mail.com',
        phone: "6577"
    },
    {
        firstname: 'Ernestina',
        lastname: 'Perez',
        age: 30,
        mail: 'ernes@mail.com',
        phone: "43535"
    }
]

router.get("/vista4", (req, res) => {
  res.render("listado", { users });
});


export default router;
