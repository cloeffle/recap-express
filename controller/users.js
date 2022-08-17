const sendUser = (req, res) => {
  const users = { username: 'Jim' };
  res.json(users);
};

const createUser = (req, res) => {
  const { username, password } = req.body;
  console.log(username, password);

  res.json('User created');
};

module.exports = { sendUser, createUser };
