import { Component } from '@angular/core';
// chatbot service
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
  isLoading: boolean = false;
  toggleAbout: boolean = false;

  sendMessage() {
    this.isLoading = true;
    this.chatbotService.getResponse(this.userInput).subscribe((data) => {
      if (Array.isArray(data)) {
        const botResponse = data.join('');
        this.botOutput = botResponse;
        this.isLoading = false;
      } 
    });
  }

  toggleAboutCard() {
   this.toggleAbout = !this.toggleAbout
  }

}
