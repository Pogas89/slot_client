export class SignUpInfo {
    username: string;
    role: string[];
    password: string;
 
    constructor(username: string, password: string, isAdmin: boolean) {
        this.username = username;
        this.password = password;
        if (isAdmin) {
        this.role = ['admin','user'];
        } else {
            this.role = ['user'];
        }
    }
}
