let users = []; // Une liste simple pour simuler une base de données

// Récupérer les utilisateurs
const getUsers = (req, res) => {
  res.status(200).json(users);
};

// Ajouter un utilisateur
const addUser = (req, res) => {
  const { name, age } = req.body;
  if (!name || !age) {
    return res.status(400).json({ error: 'Name and age are required' });
  }
  const newUser = { id: users.length + 1, name, age };
  users.push(newUser);
  res.status(201).json(newUser);
};

export { getUsers, addUser };
