export class MessageServiceClient {
  createMessage(message_details) {
    return fetch('http://localhost:4000/api/message', {
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
    const url = 'http://localhost:4000/api/msg';
    return fetch(url, {
      credentials: 'include'
    }).then(response => response.json());


  }

  findMessagesForUserid(userId)
  {
    const url = 'http://localhost:4000/api/user/'+userId+'/message';
    return fetch(url, {
      credentials: 'include'
    }).then(response => response.json());
  }

  deleteMessage(messageId)
  {
    return fetch('http://localhost:4000/api/delmsg/'+messageId, {
      method: "DELETE",
      credentials: 'include', // include, same-origin, *omit
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());
  }
}
