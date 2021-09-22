import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http: HttpClient) {}

    getProductos(): Observable<any> {
      return this.http.get(environment.url);
    }

    eliminarProducto(id: string):Observable<any> {
      return this.http.delete(environment.url + id);
    }

    guardarProducto(producto: Producto):Observable<any> {
      return this.http.post(environment.url, producto);
    }

    obtenerProducto(id: string):Observable<any> {
      return this.http.get(environment.url + id);
    }

    editarProducto(id: string, producto: Producto):Observable<any> {
      return this.http.put(environment.url + id, producto);
    }

  }
