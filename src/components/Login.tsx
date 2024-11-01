import React, { SyntheticEvent } from "react";
import { AuthService } from "../services/AuthService";

interface LoginProps{
    authService: AuthService
}

interface LoginState {
    username: string,
    password: string,
    loginAttempted: boolean,
    loginSuccess: boolean
}

interface CustomEvent {
    target: HTMLInputElement;
}
export class Login extends React.Component<LoginProps, LoginState> {

    state: LoginState = {
        username: '',
        password: '',
        loginAttempted: false,
        loginSuccess: false
    }

    private setUserName(event: CustomEvent){
        this.setState({username: event.target.value});
        // console.log(event.target.value);
    }

    private setPassWord(event: CustomEvent){
        this.setState({password: event.target.value});
    }

    private async handleSubmit(event: SyntheticEvent){
        event.preventDefault();
        this.setState({loginAttempted: true});
        const result = await this.props.authService.login(
            this.state.username,
            this.state.password
        )

        if(result){
            this.setState({loginSuccess: true});
            console.log(result);
        }else {
            this.setState({loginSuccess: false});
            console.log("wrong login");
        }

    }

    render() {
        let loginMessage: any;
        if(this.state.loginAttempted){
            if(this.state.loginSuccess){
                loginMessage = <div>Login Successful</div>
            } else {
                loginMessage = <div>Login Failed</div>
            }
        }
        return (
            <div>
                <h2>Please Login</h2>
                <form onSubmit={e => this.handleSubmit(e)}>
                    <input type="text" value={this.state.username} onChange={(e) => this.setUserName(e)}/> <br />
                    <input type="password" value={this.state.password} onChange={(e) => this.setPassWord(e)}/> <br />
                    <button value="login">Login</button>
                </form>
                {loginMessage}
            </div>
        )
    }
}