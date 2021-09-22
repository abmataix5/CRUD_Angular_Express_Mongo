import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
//Reactive forms
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//Toastr, millorar amb notifications service
import { ToastrService } from 'ngx-toastr';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {


  productoForm: FormGroup;
  titulo = 'Crear producto';
  id: string | null;

  constructor(private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              private _productoService: ProductoService,
              private aRouter: ActivatedRoute) {
    this.productoForm = this.fb.group({
      tipo: ['', Validators.required],
      modelo: ['', Validators.required],
      estado: ['', Validators.required],
      precio: ['', Validators.required],
    })
    this.id = this.aRouter.snapshot.paramMap.get('id')
   }

  ngOnInit(): void {
    this.esEditar();
  }

  agregarProducto() {
    console.log('in');
    const PRODUCTO: Producto = {
      tipo: this.productoForm.get('tipo')?.value,
      modelo: this.productoForm.get('modelo')?.value,
      estado: this.productoForm.get('estado')?.value,
      precio: this.productoForm.get('precio')?.value
    }

    if(this.id !== null) {
      this._productoService.editarProducto(this.id, PRODUCTO).subscribe(data => {
        this.toastr.info('El dispositivo fue actualizado con éxito!', 'Dispositivo actualizado!');
        this.router.navigate(['/devices']);
      }, error => {
        console.log(error);
        this.productoForm.reset();
      })

    } else {
      console.log(PRODUCTO);
      this._productoService.guardarProducto(PRODUCTO).subscribe(data => {
        this.toastr.success('El dispositivo fue añadido con éxito!', 'Dispositivo añadido!');
        this.router.navigate(['/devices']);
      }, error => {
        console.log(error);
        this.productoForm.reset();
      })
    }

  }

  esEditar() {
    if(this.id !== null) {
      this.titulo = 'Editar producto';
      this._productoService.obtenerProducto(this.id).subscribe(data => {
        this.productoForm.setValue({
          tipo: data.tipo,
          modelo: data.modelo,
          estado: data.estado,
          precio: data.precio,
        })
      })
    }
  }


}
