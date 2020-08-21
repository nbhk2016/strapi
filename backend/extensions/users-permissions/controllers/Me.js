module.exports = {
	async me(ctx){
	  if (!ctx.req.user)
	    return ctx.rejectUnauthorized()

		let userId = ctx.req.user.id

    const user = await strapi.query('user', 'users-permissions').findOne({id: userId})
		resp = {
      user: {
        nickname: user.username,
        name: user.name,
        email: user.email,
        accaunt_type: user.role.name,
        //hive_amount: user.hive_amount,
        //publications: user.publications,
        //responds: user.responds
      }
    }

    if (user.role.name == 'Beekeeper')
      Object.assign(resp.user, {
        hive_amount: user.hive_amount,
        responds: user.responds
      })

    else if (user.role.name == 'Farmer')
      resp.user.publications = user.publications

    return resp
	}
}
