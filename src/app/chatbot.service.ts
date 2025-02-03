import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatbotService {
  private options = [
    { text: '¿Cuál es la dirección?', response: 'Nos encontramos en Calle 22 Nº 4169, Necochea, Buenos Aires.' },
    { text: '¿Cuál es el teléfono de contacto?', response: 'Podes llamarnos a nuestro numero: 2262-354689.' },
    { text: '¿Cuál es el email de contacto?', response: 'Nuestro email es lafavorita_a@hotmail.com.ar' },
    { text: '¿Cuáles son los horarios de atención?', response: 'Abrimos de Martes a Domingo de 8:00 a 13:00 hs y de 15:00 a 21:00 hs.' },
    { text: '¿Quiénes son?', response: 'Desde 1969, en Necochea, La Favorita es una panadería familiar que elabora productos artesanales con amor y dedicación.' },
    { text: '¿Qué compromiso tienen?', response: 'Nos dedicamos a elaborar productos artesanales con ingredientes frescos y naturales, garantizando calidad y tradición.' },
    { text: '¿Puedo enviar mi CV?', response: 'Sí, envíanos tu CV a nuestro correo de Recursos Humanos: lafavorita.rrhh@gmail.com' }
  ];

  constructor() {}

  getOptions(): Observable<any> {
    return of(this.options);
  }

  getResponse(optionText: string): Observable<any> {
    const selectedOption = this.options.find(option => option.text === optionText);
    return of(selectedOption ? selectedOption.response : 'Lo siento, no tengo una respuesta para eso.');
  }
}