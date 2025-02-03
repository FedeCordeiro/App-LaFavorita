import { Component, OnInit } from '@angular/core';
import { ChatbotService } from '../../chatbot.service';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent implements OnInit {
  messages: { sender: string; text: string }[] = [];
  options: { text: string }[] = [];
  loading: boolean = false;
  chatOpen: boolean = false;

  constructor(private chatbotService: ChatbotService) {}

  ngOnInit() {
    this.chatbotService.getOptions().subscribe((options: any) => {
      this.options = options;
    });
  }

  toggleChat() {
    this.chatOpen = !this.chatOpen;
  }

  sendOption(optionText: string) {
    this.messages.push({ sender: 'user', text: optionText });
    this.loading = true;

    this.chatbotService.getResponse(optionText).subscribe(
      (response: any) => {
        this.messages.push({ sender: 'bot', text: response });
        this.loading = false;
      },
      error => {
        this.messages.push({ sender: 'bot', text: 'Hubo un error. Intenta nuevamente.' });
        this.loading = false;
      }
    );
  }
}
