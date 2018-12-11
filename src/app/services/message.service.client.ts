export class MessageServiceClient {
  createMessage(message_details) {
    return fetch(' https://boston-marketplace-server.herokuapp.com/api/message', {
      body: JSON.stringify(message_details),
      credentials: 'include', // include, same-origin, *omit
      method: 'post',
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  findMessagesForUser()
  {
    console.log("In service to server");
    const url = ' https://boston-marketplace-server.herokuapp.com/api/msg';
    return fetch(url, {
      credentials: 'include'
    }).then(response => response.json());


  }

  findMessagesForUserid(userId)
  {
    const url = ' https://boston-marketplace-server.herokuapp.com/api/user/'+userId+'/message';
    return fetch(url, {
      credentials: 'include'
    }).then(response => response.json());
  }

  deleteMessage(messageId)
  {
    return fetch(' https://boston-marketplace-server.herokuapp.com/api/delmsg/'+messageId, {
      method: "DELETE",
      credentials: 'include', // include, same-origin, *omit
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());
  }
}
