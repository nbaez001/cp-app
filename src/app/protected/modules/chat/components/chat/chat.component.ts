import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { Animations } from '@shared/animations';
import { Socket } from 'ng-socket-io';
import { Subscription } from 'rxjs';
import { Session } from '@shared/auth/Session';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: Animations
})
export class ChatComponent implements OnInit, OnDestroy {

  socketSubscription: Subscription;
  private stompClient;
  selectedChat: any;

  constructor(private chatService: ChatService,
    private socket: Socket,
  ) {
  }

  ngOnInit() {
    this.chatService.onChatSelected.subscribe(chatData => {
      this.selectedChat = chatData;
    });
    this.chatService.setConversacionEliminada.subscribe(response => {
      this.selectedChat = null;
    });
    this.connect();
    this.stompClient.debug = null;

    this.socketSubscription = this.socket.fromEvent('sesionSocket').subscribe((idUsuario) => {
      if (Session.identity.id_usuario) {
        this.chatService.listadoRefreshContacto('', 0, 0);
        this.chatService.listadoRefreshConversacionInicioSession(+idUsuario);
      }
    });

  }

  connect() {
    this.stompClient = this.chatService.conectarWebsocket();
    const _this = this;
    this.stompClient.connect({}, (frame) => {
      const recargaList = 'reloaded';
      _this.stompClient.subscribe(`/channel/${recargaList}`, (response) => {

        if (JSON.parse(response.body).content) {
          _this.chatService.listadoRefreshConversacion(+JSON.parse(response.body).content);
        }

      });
      _this.stompClient.send(`/app/chat/reloaded/addUser`, {}, JSON.stringify({ sender: 'username', type: 'JOIN' }));
    });
  }

  ngOnDestroy() {
    this.socketSubscription.unsubscribe();
  }

}
