export interface user {
    _id:string;
    firstName:string;
    lastName: string;
    username: string;
    email:string;
    password: string;
    birthDate: Date;
    isRenter:Boolean;
    phone:String;
  }

  export interface userToAdd {
    firstName:string;
    lastName: string;
    username: string;
    email:string;
    password: string;
    birthDate: Date;
    isRenter:Boolean;
    phone:String;
  }
  export interface loginUser {
    username: string;
    password: string;
  }



