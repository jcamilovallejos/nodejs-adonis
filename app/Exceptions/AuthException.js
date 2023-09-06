'use strict'

const { LogicalException } = require('@adonisjs/generic-exceptions')

class AuthException extends LogicalException {
  handle(error, { response }) {
    return response.status(403).json({
      error: 'No tienes permiso para acceder a este recurso'
    })
  }
}

module.exports = AuthException
