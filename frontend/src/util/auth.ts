import { redirect } from "react-router-dom";

export function getAuthToken() {
    const token = localStorage.getItem('token');
    return token;
  }

  export function getRoles() {
    const roles = localStorage.getItem('roles');
    return roles;
  }
  
  export function tokenLoader() {
    return getAuthToken();
  }
  export function checkAuthLoader(allowedRoles:number[]) {
    const token = getAuthToken();
    const roles=getRoles()?.split(',').map(Number);;
    console.log(typeof(roles)+ roles);
     
    if (!token) {
      return redirect('/login');
    }
    return null
  }
   