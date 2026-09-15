import { IProduct } from './../model/product';
import { Component, OnInit } from '@angular/core';
import { PRODUCT_DATA } from '../../const/product';
import { SnackbarServiceService } from '../../sercvice/snackbar-service.service';
@Component({
  selector: 'app-product-dashbod',
  templateUrl: './product-dashbod.component.html',
  styleUrls: ['./product-dashbod.component.scss'],
})
export class ProductDashbodComponent implements OnInit {
  product: IProduct[] = PRODUCT_DATA;
  constructor(private _snackbar: SnackbarServiceService) {}

  editObj!: IProduct;
  ngOnInit(): void {}
  submit(pdt: IProduct) {
    this.product.unshift(pdt);
    this._snackbar.snackbar(
      `New Product Add Successfully with id ${pdt.id} !!`,
    );
  }

  editPdt(pdt: IProduct) {
    this.editObj = pdt;
  }

  onUpdate(pdt: IProduct) {
    let getIndex = this.product.findIndex((d) => d.id === pdt.id);

    this.product[getIndex] = pdt;
    this._snackbar.snackbar(`Product Update Successfully with id ${pdt.id} !!`);
  }

  onRemove(id: number) {
    let getIndex = this.product.findIndex((d) => d.id === id);
    this.product.splice(getIndex, 1);
    this._snackbar.snackbar(`Product Delete Successfully with id ${id} !!`);
  }
}
