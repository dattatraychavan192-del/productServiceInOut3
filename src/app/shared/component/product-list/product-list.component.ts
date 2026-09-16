import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IProduct } from '../model/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  @Input() getData!: IProduct[];
  @Output() editData: EventEmitter<IProduct> = new EventEmitter<IProduct>();
  @Input() IsinEditMode:boolean=false;
  editId!: number;
  @Output() removeData: EventEmitter<number> = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  editPdt(pdt: IProduct) {
    this.editData.emit(pdt);
    this.editId=pdt.id;
  }

  removePdt(id: number) {
    let getConfirm = confirm('Are you sure ? You want to remove it !!');
    if (getConfirm) {
      this.removeData.emit(id);
    }
  }
}
