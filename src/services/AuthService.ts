import { User } from "../model/Model";

export class AuthService {
    public async login(username: string, password: string): Promise<User | undefined>{
        if(username === "user" && password === "pass123"){
            return {
                username: username,
                email: "user@example.com"
            };
        } else {
            return undefined
        }
        
    }
}