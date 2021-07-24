import bcrypt from 'bcryptjs'

const users = [
	{
		name: 'Admin User',
		email: 'admin@admin.com',
		password: bcrypt.hashSync('123456', 12),
		isAdmin: true
	},
	{
		name: 'John Doe',
		email: 'john@user.com',
		password: bcrypt.hashSync('123456', 12),
	},
	{
		name: 'Jane Doe',
		email: 'jane@user.com',
		password: bcrypt.hashSync('123456', 12),
	}
]

export default users