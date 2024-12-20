import { Component } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  productos = [
    { id: 1, nombre: 'Pan de papa', descripcion: 'Pan de papa, ideal para preparar hamburguesas.', precio: 300, imagen: 'assets/img/productos/panpapa.png' },
    { id: 2, nombre: 'Pebete', descripcion: 'Pan alargado de textura blanda, utilizado en sándwiches.', precio: 300, imagen: 'assets/img/productos/pebete.webp' },
    { id: 3, nombre: 'Pan de molde', descripcion: 'Pan en rebanadas, disponible en diferentes variedades.', precio: 4500, imagen: 'assets/img/productos/molde.jpg' },
    { id: 4, nombre: 'Budines', descripcion: 'Budines esponjosos en distintos sabores y presentaciones.', precio: 2500, imagen: 'assets/img/productos/budin.jpg' },
    { id: 5, nombre: 'Croissant', descripcion: 'Masa hojaldrada en forma de media luna, con manteca.', precio: 400, imagen: 'assets/img/productos/croissant.jpg' },
    { id: 6, nombre: 'Facturas', descripcion: 'Variedad de medialunas, con opciones dulces y saladas.', precio: 180, imagen: 'assets/img/productos/medialunas.jpg' },
    { id: 7, nombre: 'Facturas danesas', descripcion: 'Masa suave con coberturas y rellenos típicos de Dinamarca.', precio: 160, imagen: 'assets/img/productos/danesas.webp' },
    { id: 8, nombre: 'Scones', descripcion: 'Pequeños panes dulces, ideales para acompañar infusiones.', precio: 170, imagen: 'assets/img/productos/scones.jpg' },
    { id: 9, nombre: 'Torta matera', descripcion: 'Bizcocho seco perfecto para acompañar mates.', precio: 400, imagen: 'assets/img/productos/matera.webp' },
    { id: 10, nombre: 'Alfajor húmedo', descripcion: 'Alfajor con cobertura de chocolate y relleno cremoso.', precio: 180, imagen: 'assets/img/productos/alfajor.jpg' },
    { id: 11, nombre: 'Alfajor de maicena', descripcion: 'Alfajor de maicena relleno de dulce de leche y coco rallado.', precio: 160, imagen: 'assets/img/productos/maicena.avif' },
    { id: 12, nombre: 'Palitos', descripcion: 'Palitos de masa horneada, ideales como snack salado.', precio: 170, imagen: 'assets/img/productos/palitos.avif' },
    { id: 13, nombre: 'Bizcochos de grasa', descripcion: 'Masa salada y crujiente, perfecta para el mate.', precio: 400, imagen: 'assets/img/productos/bizcochos.webp' },
    { id: 14, nombre: 'Masas finas', descripcion: 'Pequeñas masas con diferentes rellenos y decoraciones.', precio: 180, imagen: 'assets/img/productos/masasfinas.jpg' },
    { id: 15, nombre: 'Pepas', descripcion: 'Galletitas rellenas con dulce de membrillo en el centro.', precio: 170, imagen: 'assets/img/productos/pepas.jpg' },
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
