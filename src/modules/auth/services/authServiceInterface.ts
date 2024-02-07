
export interface AuthServiceInterface{

    login():any

    logout():any

    autoLogin():any

    revokeToken():any

    forgotPassword():any

    resetPassword(): any

    activateAccount(): any
}