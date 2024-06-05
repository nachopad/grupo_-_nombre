const User = require('../../services/User');

const usersAPIController = {
    list: async (req, res) => {
        try {
            const users = await User.findAll();
            const usersList = users.map(user => ({
                id: user.id,
                full_name: `${user.first_name} ${user.last_name}`,
                email: user.email,
                detail: `api/users/${user.id}`
            }));
            const response = {
                count: usersList.length,
                users: usersList
            };
            res.json(response);
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    },
    detail: async (req, res) => {
        try {
            const user = await User.findByPk(req.params.id);
            user.password = undefined;
            user.role_id = undefined;
            res.json(user);
        } catch (error) {
            res.status(500).json({ error: 'Internal server errror'});
        }
    }
};

module.exports = usersAPIController;