'use strict'

const { LogicalException } = require('@adonisjs/generic-exceptions')

class ResourceNotFoundException extends LogicalException {
  handle(error, { response }) {
    return response.status(404).json({
      error: 'El recurso no existe'
    })
  }
}

module.exports = ResourceNotFoundException
