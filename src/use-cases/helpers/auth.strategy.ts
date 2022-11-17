export class AuthStrategy {
    public authPassword(plainPwd: string, encryptedPwd: string): boolean {
        //TODO: refactor to use crypto algorithm
        return plainPwd === encryptedPwd
    }
}

export const authStrategy = new AuthStrategy()
