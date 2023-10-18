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
  userInputs: string [] = [];
  botResponses: string = '';

  sendMessage() {
    const userMessage = this.userInput;
    this.userInputs.push(this.userInput);
    this.chatbotService.getResponse(userMessage).subscribe((data) => {
      console.log(data)
      if (Array.isArray(data)) {
        const botResponse = data.join('');
        this.botResponses = botResponse;
  
      } 
    });

  }

}
