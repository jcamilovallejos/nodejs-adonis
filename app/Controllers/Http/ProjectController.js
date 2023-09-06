'use strict'
const Project = use('App/Models/Project')
const AuthService = use('App/Services/AuthService')

class ProjectController {
    async index({ auth }) {
        const user = await auth.getUser()
        return user.projects().fetch()
    }

    async store ({ auth, request, response }) {
        const user = await auth.getUser()
        const { name } = request.all()
        const project = new Project()
        project.fill({
            name,
            user_id: user.id
        })
        project.save()
        return response.status(201).json(project)
    }

    async destroy ({ auth, response, params: { id }}) {
        const user = await auth.getUser()
        const project = await Project.find(id)
        AuthService.verifyPermission(project, user)
        await project.delete()
        return response.status(202).json(project)
    }

    async update ({ auth, params: { id }, request, response }) {
        const user = await auth.getUser()
        const project = await Project.find(id)
        AuthService.verifyPermission(project, user)
        project.merge(request.only('name'))
        await project.save()
        return response.status(200).json(project)
    }
}

module.exports = ProjectController
