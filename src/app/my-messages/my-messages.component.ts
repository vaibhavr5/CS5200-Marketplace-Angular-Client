import { Component, OnInit } from '@angular/core';
import {MessageServiceClient} from "../services/message.service.client";
import {ActivatedRoute, Router} from "@angular/router";
import {UserServiceClient} from "../services/user.service.client";
import {forEach} from "@angular/router/src/utils/collection";

@Component({
  selector: 'app-my-messages',
  templateUrl: './my-messages.component.html',
  styleUrls: ['./my-messages.component.css']
})
export class MyMessagesComponent implements OnInit {

  constructor(private messageService: MessageServiceClient,
              private userService: UserServiceClient,
              private router: Router,
              private route: ActivatedRoute) { }

  messages=[];

  deleteMessage(messageId)
  {
    this.messageService
      .deleteMessage(messageId)
      .then(()=>
        this.messageService
          .findMessagesForUser()
          .then(messages=>this.messages=messages)
      );


  }
  ngOnInit() {
    this.messageService
      .findMessagesForUser()
      .then(messages=>this.messages=messages);
    }


}
