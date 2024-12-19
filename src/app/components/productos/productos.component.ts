import { Component } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  productos = [
    { id: 1, nombre: 'Alfajor Artesanal', descripcion: 'Alfajor c/ dulce, bañado.', precio: 150, imagen: 'assets/img/productos/4.png' },
    { id: 2, nombre: 'Pan de Masa Madre', descripcion: 'Pan fresco y saludable.', precio: 300, imagen: 'assets/img/productos/4.png' },
    { id: 3, nombre: 'Budín de Limón', descripcion: 'Budín esponjoso con sabor a limón.', precio: 250, imagen: 'assets/img/productos/4.png' },
    { id: 4, nombre: 'Croissant', descripcion: 'Croissant de manteca recién horneado.', precio: 200, imagen: 'assets/img/productos/4.png' },
    { id: 5, nombre: 'Medialunas', descripcion: 'Medialunas dulces y saladas.', precio: 180, imagen: 'assets/img/productos/4.png' },
    { id: 6, nombre: 'Scones', descripcion: 'Scones suaves y esponjosos.', precio: 160, imagen: 'assets/img/productos/4.png' },
    { id: 7, nombre: 'Donas', descripcion: 'Donas glaseadas.', precio: 170, imagen: 'assets/img/productos/4.png' },
    { id: 8, nombre: 'Tarta de Frutas', descripcion: 'Tarta con frutas frescas.', precio: 400, imagen: 'assets/img/productos/4.png' },
    { id: 9, nombre: 'Medialunas', descripcion: 'Medialunas dulces y saladas.', precio: 180, imagen: 'assets/img/productos/4.png' },
    { id: 10, nombre: 'Scones', descripcion: 'Scones suaves y esponjosos.', precio: 160, imagen: 'assets/img/productos/4.png' },
    { id: 11, nombre: 'Donas', descripcion: 'Donas glaseadas.', precio: 170, imagen: 'assets/img/productos/4.png' },
    { id: 12, nombre: 'Tarta de Frutas', descripcion: 'Tarta con frutas frescas.', precio: 400, imagen: 'assets/img/productos/4.png' },
    { id: 13, nombre: 'Medialunas', descripcion: 'Medialunas dulces y saladas.', precio: 180, imagen: 'assets/img/productos/4.png' },
    { id: 14, nombre: 'Scones', descripcion: 'Scones suaves y esponjosos.', precio: 160, imagen: 'assets/img/productos/4.png' },
    { id: 15, nombre: 'Donas', descripcion: 'Donas glaseadas.', precio: 170, imagen: 'assets/img/productos/4.png' },
    { id: 16, nombre: 'Tarta de Frutas', descripcion: 'Tarta con frutas frescas.', precio: 400, imagen: 'assets/img/productos/4.png' },
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
