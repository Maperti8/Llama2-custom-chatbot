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
    console.log(this.userInput)
    const userMessage = this.userInput;

    this.chatbotService.getResponse(this.userInput).subscribe((data => {
      console.log(data);
    }))
  
  }

}
