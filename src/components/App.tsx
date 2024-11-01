import React from 'react';
import { User } from '../model/Model';
import { AuthService } from '../services/AuthService';
import { Login } from './Login';

// User is came from Model.ts file where we declare all the interfaces and types
interface AppState {
  user: User | undefined
}

export default class App extends React.Component<{}, AppState>{

  private authService: AuthService = new AuthService();
  

  render(){
    return (
      <div>
        <h1>Hello, World!</h1>
        <p>This is a React class component written in TypeScript.</p>
        <Login authService={this.authService}/>
      </div>
    );
  }
}
