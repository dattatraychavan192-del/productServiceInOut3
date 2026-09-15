import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { IProduct } from '../model/product';
import { NgForm } from '@angular/forms';
import { SnackbarServiceService } from '../../sercvice/snackbar-service.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnInit, OnChanges {
  @Input() patchData!: IProduct;
  editObj!: IProduct;

  @Output() submitdata: EventEmitter<IProduct> = new EventEmitter<IProduct>();

  @Output() updatedata: EventEmitter<IProduct> = new EventEmitter<IProduct>();

  @ViewChild('pdtForm') pdtForm!: NgForm;

  IsineditMode: boolean = false;
  constructor(private _snackbar: SnackbarServiceService) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    let patchPdt = changes['patchData']['currentValue'];
    if (patchPdt) {
      this.IsineditMode = true;
      this.editObj = patchPdt;
      this.pdtForm.form.patchValue(patchPdt);
    }
  }

  submitPdt() {
    if (this.pdtForm.valid) {
      let newObj: IProduct = {
        ...this.pdtForm.form.value,
        id: Date.now(),
      };
      this.submitdata.emit(newObj);
      this.pdtForm.reset();
    } else {
      this._snackbar.snackbar('Fill all required filldes');
    }
  }

  updateStd() {
    if (this.pdtForm.valid) {
      let updateObj: IProduct = {
        ...this.pdtForm.form.value,
        id: this.editObj.id,
      };
      this.updatedata.emit(updateObj);
      this.pdtForm.reset();
      this.IsineditMode = false;
    } else {
      this._snackbar.snackbar('Fill all required filldes');
    }
  }
}
