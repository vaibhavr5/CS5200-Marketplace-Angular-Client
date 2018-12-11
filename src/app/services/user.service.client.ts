export class UserServiceClient {

  findUserById(userId) {
    return fetch('https://boston-marketplace-server.herokuapp.com/api/user/' + userId)
      .then(response => response.json());
  }

  findUserByName(userName) {
    console.log("ANGULAR SERVICE NAME:"+userName);
    return fetch('https://boston-marketplace-server.herokuapp.com/api/username/' +userName)
      .then(response => response.json());
  }


  findAllUsers() {
    return fetch('https://boston-marketplace-server.herokuapp.com/api/users',{
      credentials: 'include', // include, same-origin, *omit
    }).then(response => response.json());
  }

  login(username, password) {
    const credentials = {
      password: password,
      username: username
    };
    return fetch('https://boston-marketplace-server.herokuapp.com/api/login', {
      method: 'post',
      body: JSON.stringify(credentials),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());
  }

  logout() {
    return fetch('https://boston-marketplace-server.herokuapp.com/api/logout', {
      method: 'post',
      credentials: 'include'
    });
  }

  profile() {
    return fetch('https://boston-marketplace-server.herokuapp.com/api/profile',
      {
        credentials: 'include', // include, same-origin, *omit
      })
      .then(response => response.json());
  }

  createUser(username, password) {
    const user = {
      username: username,
      password: password
    };
    return fetch('https://boston-marketplace-server.herokuapp.com/api/user', {
      body: JSON.stringify(user),
      credentials: 'include', // include, same-origin, *omit
      method: 'post',
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  createUserByAdmin(username, password) {
    const user = {
      username: username,
      password: password
    };
    return fetch('https://boston-marketplace-server.herokuapp.com/api/admin-user', {
      body: JSON.stringify(user),
      credentials: 'include', // include, same-origin, *omit
      method: 'post',
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  findUsername(username) {

    const credentials = {
      username: username,
    };
    return fetch('https://boston-marketplace-server.herokuapp.com/api/register', {
      method: 'post',
      body: JSON.stringify(credentials),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());
  }

  updateUser(user) {
    return fetch('https://boston-marketplace-server.herokuapp.com/api/user', {
      method: "PUT",
      body: JSON.stringify(user),
      credentials: 'include', // include, same-origin, *omit
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  deleteUser(userId)
  {
    return fetch('https://boston-marketplace-server.herokuapp.com/api/user/'+userId, {
      method: "DELETE",
      credentials: 'include', // include, same-origin, *omit
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());
  }
}
