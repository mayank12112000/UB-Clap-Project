import { Account, Client, ID } from "appwrite";
import conf from "../conf/conf";

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)

        this.account = new Account(this.client)
    }

    // login service
    async login({ email, password }) {
        try {
            return await this.account.createEmailPasswordSession(email, password)
        } catch (error) {
            console.log("appwrite login service error ::", error)
            return false
        }
    }

    // signup service
    async createAccount({ email, password, name }) {
        const userAccount = this.account.create(ID.unique(), email, password, name)
        try {
            if (userAccount) {
                this.login({ email, password })
            }
        } catch (error) {
            console.log("appwrite create account service error:: ", error)
            return false
        }
    }

    // get user serive
    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("appwrite get current user error::", error)
            return false
        }
    }

    // logout service
    async logout() {
        try {
            return await this.account.deleteSessions()
        } catch (error) {
            console.log("logout service appwrite error::", error)
            return false
        }
    }

}
const authService = new AuthService();
export default authService;