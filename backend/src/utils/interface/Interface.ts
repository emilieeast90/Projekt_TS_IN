export interface User {
    username: string;
    password: string;
    email: string;
}

export interface UsersArray {
    users: Array<User>
}

export interface Flow {
    username: string;
    post: string;
}

export interface Message {
    username: string;
    message: string;
}

/* export interface UsersFlow extends User {
    posts: Array<Message>;
}

let user: UsersFlow = {
    posts: [{
        username: '',
        message: ''
    }]
} */
