import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ToastrService } from 'ngx-toastr';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class DevicesComponent implements OnInit {
  
  listProductos: Producto[] = [];
  constructor(private _productoService: ProductoService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.obtenerProductos();
  }


//GET
  obtenerProductos() {
    this._productoService.getProductos().subscribe(data => {
      console.log(data + 'datos servidor');
      this.listProductos = data;
    }, error => {
      console.log(error);
    })
  }


//DELETE
  eliminarProducto(id: any) {
    this._productoService.eliminarProducto(id).subscribe(data =>{
      this.toastr.error('El Dispositivos fue eliminado con éxito', 'Dispositivos eliminado');
      this.obtenerProductos();
    }, error => {
      console.log(error);
    })
  }

}
