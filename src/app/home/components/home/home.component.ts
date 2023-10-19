import { Component } from '@angular/core';
import { ChatbotService } from '../../services/chatbot.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {

  constructor(private chatbotService: ChatbotService) { }

  userInput: string = '';
  botOutput: string = '';

  sendMessage() {
    this.chatbotService.getResponse(this.userInput).subscribe((data) => {
      console.log(data)
      if (Array.isArray(data)) {
        const botResponse = data.join('');
        this.botOutput = botResponse;
  
      } 
    });

  }

}
