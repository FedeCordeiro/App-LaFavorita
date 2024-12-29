import { Component } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  productos = [
    { id: 1, nombre: 'Pan de papa', descripcion: 'Pan suave, ideal para preparar hamburguesas.', precio: 300, imagen: 'assets/img/productos/panpapa.png' },
    { id: 2, nombre: 'Pebete', descripcion: 'Pan alargado de textura blanda, ideal para sándwiches.', precio: 300, imagen: 'assets/img/productos/pebete.webp' },
    { id: 3, nombre: 'Pan de molde', descripcion: 'Pan rebanado, disponible en variedades blancas e integrales.', precio: 4500, imagen: 'assets/img/productos/molde.jpg' },
    { id: 4, nombre: 'Pan árabe', descripcion: 'Pan plano y suave, perfecto para wraps y shawarma.', precio: 300, imagen: 'assets/img/productos/arabe.jpg' },
    { id: 5, nombre: 'Bollito de salvado', descripcion: 'Pan redondo con alto contenido de salvado.', precio: 300, imagen: 'assets/img/productos/negritos.png' },
    { id: 6, nombre: 'Pan de pancho', descripcion: 'Pan suave y alargado, ideal para panchos.', precio: 300, imagen: 'assets/img/productos/pancho.webp' },
    { id: 7, nombre: 'Sandwich de miga', descripcion: 'Variedad de sándwiches fríos.', precio: 300, imagen: 'assets/img/productos/sandwich.jpg' },
    { id: 8, nombre: 'Chipa', descripcion: 'Pan de queso típico de la gastronomía paraguaya.', precio: 300, imagen: 'assets/img/productos/chipa.jpeg' },
    { id: 9, nombre: 'Pasteles', descripcion: 'Masa rellena frita, dulce o salada, típica en reuniones.', precio: 4500, imagen: 'assets/img/productos/pasteles.jpg' },
    { id: 10, nombre: 'Budines', descripcion: 'Bizcochos esponjosos en distintos sabores y tamaños.', precio: 2500, imagen: 'assets/img/productos/budin.jpg' },
    { id: 11, nombre: 'Croissant', descripcion: 'Masa hojaldrada y mantecosa con forma de media luna.', precio: 400, imagen: 'assets/img/productos/croissant.jpg' },
    { id: 12, nombre: 'Facturas', descripcion: 'Amplia selección: dulces, saladas, con crema, membrillo, dulce de leche y más.', precio: 180, imagen: 'assets/img/productos/medialunas.jpg' },
    { id: 13, nombre: 'Facturas danesas', descripcion: 'Masa con rellenos y coberturas típicas danesas.', precio: 160, imagen: 'assets/img/productos/danesas.webp' },
    { id: 14, nombre: 'Scones', descripcion: 'Pequeños panes dulces, ideales para acompañar el té.', precio: 170, imagen: 'assets/img/productos/scones.jpg' },
    { id: 15, nombre: 'Torta matera', descripcion: 'Bizcocho con crema pastelera, perfecto para acompañar el mate.', precio: 400, imagen: 'assets/img/productos/matera.webp' },
    { id: 16, nombre: 'Alfajor húmedo', descripcion: 'Alfajor humedo bañado con chocolate y relleno de dulce de leche.', precio: 180, imagen: 'assets/img/productos/alfajor.jpg' },
    { id: 17, nombre: 'Alfajor de maicena', descripcion: 'Alfajor relleno de dulce de leche y coco.', precio: 160, imagen: 'assets/img/productos/maicena.avif' },
    { id: 18, nombre: 'Palitos', descripcion: 'Snack crujiente de masa horneada y salada.', precio: 170, imagen: 'assets/img/productos/palitos.avif' },
    { id: 19, nombre: 'Bizcochos de grasa', descripcion: 'Masa salada y crujiente, ideal para el mate.', precio: 400, imagen: 'assets/img/productos/bizcochos.webp' },
    { id: 20, nombre: 'Masas finas', descripcion: 'Pequeñas piezas de pastelería con rellenos variados.', precio: 180, imagen: 'assets/img/productos/masasfinas.jpg' },
    { id: 21, nombre: 'Pepas chocolate', descripcion: 'Galletas dulces con relleno de chocolate.', precio: 170, imagen: 'assets/img/productos/pepas.jpg' },
    { id: 22, nombre: 'Pepas membrillo', descripcion: 'Galletas dulces con relleno de membrillo.', precio: 300, imagen: 'assets/img/productos/pepasm.jpg' },
    { id: 23, nombre: 'Pan dulce', descripcion: 'Pan festivo con frutas abrillantadas y frutos secos.', precio: 300, imagen: 'assets/img/productos/pandulce.jpeg' },
    { id: 24, nombre: 'Pellizcos', descripcion: 'Pequeños bocados dulces de textura suave.', precio: 4500, imagen: 'assets/img/productos/conitos.jpg' },
  ];

  // Parámetros de paginación
  pageSize = 8;
  currentPage = 1;
  paginatedProductos = this.productos.slice(0, this.pageSize);
  totalPages = Array(Math.ceil(this.productos.length / this.pageSize)).fill(0).map((_, i) => i + 1);

  // Métodos de paginación
  goToPage(page: number): void {
    this.currentPage = page;
    this.updatePaginatedProductos();
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePaginatedProductos();
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages.length) {
      this.currentPage++;
      this.updatePaginatedProductos();
    }
  }

  updatePaginatedProductos(): void {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    this.paginatedProductos = this.productos.slice(startIndex, startIndex + this.pageSize);
  }
}
