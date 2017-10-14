module.exports = function(sequelize, DataTypes) {
	var Blog = sequelize.define ("Blog", {
		title: {
			Type: DataTypes.String,
			allowNull: false,
			validate: {
				len: [1]
			}
		},
		body: {
			type: DataTypes.Text,
			allowNull: false,
			len: [1]
		}
	});

	return Blog;
}