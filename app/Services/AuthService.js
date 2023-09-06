const AuthException = use("App/Exceptions/AuthException")
const ResourceNotFoundException = use("App/Exceptions/ResourceNotFoundException")
class AuthService {
    verifyPermission(resource, user){
        if(resource){
            if(resource.user_id !== user.id){
                throw new AuthException()
            }
        }else{
            throw new ResourceNotFoundException()
        }
    }
}

module.exports = new AuthService()