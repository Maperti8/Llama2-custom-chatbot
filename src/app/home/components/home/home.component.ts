import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  messages: { user: string, bot: string }[] = [];
  userInput: string = '';

  sendMessage() {
    console.log(this.userInput)
    const userMessage = this.userInput;
    this.messages.push({ user: userMessage, bot: 'Loading...' });
    this.userInput = '';

    // Send userMessage to your backend and handle the bot's response in the HTTP callback.
    // Replace 'Loading...' with the actual bot response.
  }

}
