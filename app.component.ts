import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'DSB_ReconUI';
  pickupForm!: FormGroup;
  constructor(private modalService: NgbModal, private fb: FormBuilder){

  }

  ngOnInit(): void {
    this.initializeForm();
  }

  openModal(content: any) {
    this.initializeForm();
    this.modalService.open(content, { fullscreen: true });
    
  }

  initializeForm() {
    this.pickupForm = this.fb.group({
      pickupDetails: this.fb.array([this.createPickupDetailGroup()]),
      depositDetails: this.fb.array([this.createDepositDetailGroup()])
    });
  }

  createPickupDetailGroup(): FormGroup {
    return this.fb.group({
      utrNumber: [''],
      poaCode: [''],
      pickupDate: [''],
      pickupPointCode: [''],
      customerName: [''],
      fullPickupAddress: [''],
      depositSlipNumber: [''],
      PSCardNum: [''],
      scratchCardNo: [''],
      totalAmount: [''],
      routeNumber: [''],
      serviceNumber: ['']
    });
  }

  createDepositDetailGroup(): FormGroup {
    return this.fb.group({
      depositDate: [''],
      depositType: [''],
      DepositAmount: [''],
      DepositDifference: [''],
      depositBank1: [''],
      DepositLocation: [''],
      AccountNumber: [''],
      TransactionNumber: [''],
      Remarks: [''],
      Status: ['']
    });
  }

   // Getter for pickup details form array
   get pickupDetails(): FormArray {
    return this.pickupForm.get('pickupDetails') as FormArray;
  }

  // Getter for deposit details form array
  get depositDetails(): FormArray {
    return this.pickupForm.get('depositDetails') as FormArray;
  }

  // Add a new row to the deposit details table
  addDepositDetail(): void {
    this.depositDetails.push(this.createDepositDetailGroup());
  }

  saveData(): void {
    console.log(this.pickupForm.value);
    // Here, you can send the data to your backend or perform other actions
  }

}
