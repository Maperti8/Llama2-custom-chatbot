import { Component } from '@angular/core';
import { ChatbotService } from '../../services/chatbot.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {

  constructor(private chatbotService: ChatbotService) { }

  messages: { user: string, bot: string }[] = [];
  userInput: string = '';

  sendMessage() {
    const userMessage = this.userInput;
    console.log(userMessage)
    this.chatbotService.getResponse(userMessage).subscribe((data) => {;
      this.messages.push({ user: this.userInput, bot: data });
    });
  
  }

}
