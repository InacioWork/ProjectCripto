import { Component, ViewChild, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-juros',
  templateUrl: './juros.component.html',
  styleUrls: ['./juros.component.css']
})
export class JurosComponent {
  principal!: number;
  interestRate!: number;
  timePeriod!: number;
  result!: number;
  modalRef!: BsModalRef;

  @ViewChild('modalTemplate') modalTemplate!: TemplateRef<any>;

  constructor(private modalService: BsModalService) {}

  calculateCompoundInterest(template: TemplateRef<any>) {
    if (this.principal && this.interestRate && this.timePeriod) {
      const amount = this.principal * Math.pow(1 + this.interestRate / 100, this.timePeriod);
      this.result = amount - this.principal;
      this.modalRef = this.modalService.show(template);
    }
  }

  closeModal() {
    this.modalRef.hide();
  }
}
