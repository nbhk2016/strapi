'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */


module.exports = {
  create: async ctx => {
    let reqBody = Object.assign({}, ctx.request.body)
    reqBody.user = Object.assign({}, ctx.req.user)
    let entity = await strapi.services.publication.create(reqBody)
    let resp = {
    	id: entity.id,
    	title: entity.title,
    	user: entity.user.username,
    	culture: entity.culture,
    	description: entity.description,
    	date: entity.created_at
    }

    return resp
  },

};