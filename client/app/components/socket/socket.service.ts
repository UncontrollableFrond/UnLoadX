import * as io from 'socket.io-client';
import { Injectable, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { ReplaySubject } from 'rxjs/ReplaySubject';

let requestData;

@Injectable()


export default class SocketService {
  private _url = 'http://52.9.136.53:80';
  private _socket = io.connect(this._url);
  requestDataSource = new ReplaySubject();

  constructor() {
    this.setRequestData();
    setTimeout(() => {
      this.requestDataSource.next(true);
    }, 30000);
  }

  // service command that emits that requestData is available
  setRequestDataAvailable() {
    this.requestDataSource.next(true);
  }

  setRequestData() {
    this._socket.on('receive-requests', function(requests) {
      requestData = requests;
      this.setRequestDataAvailable();
    }.bind(this));
  }

  sendServers(serverPost) {
    this._socket.emit('receive-post', serverPost);
  }

  getData() {
    return requestData;
  }
}
