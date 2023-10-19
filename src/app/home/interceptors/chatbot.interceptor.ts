// chatbot.interceptor.ts

import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ChatbotService } from '../services/chatbot.service';

@Injectable()
export class ChatbotInterceptor implements HttpInterceptor {
  constructor(private chatbotService: ChatbotService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Intercept the request and delegate it to the chatbot service.
    if (request.url === 'bot-endpoint') {
      return this.chatbotService.getResponse(request.body.input);
    }

    // For other requests, proceed as usual.
    return next.handle(request);
  }
}
