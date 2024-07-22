import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { PruebasService } from './pruebas.service';
import { City } from './interfaces/cities.interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  public value = 'Clear me';




  public mask =
    [
      {
        mask: '', // To hide % when entered digits are removed
      },
      {
        mask: '$num',
        lazy: false, // Make placeholder always visible
        blocks: {
          num: {
            mask: Number,
            thousandsSeparator: ',',
            scale: 2, // digits after decimal
            signed: true, // allow negative
            normalizeZeros: false, // appends or removes zeros at ends
            radix: '.', // fractional delimiter
            padFractionalZeros: false, // if true, then pads zeros at end to the length of scale
          },
        },
      },
    ];



  public curp = {
    mask: '',
    signed: false,
    scale: 5, // No decimal allowed
  };



  constructor(private PruebasService: PruebasService) { }






  // Atributos de clase

  public dropdownList: any = [];
  public selectedItems: any = [];
  public dropdownSettings: IDropdownSettings = {};


  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }


  ngOnInit() {

    this.dropdownList = [
      { item_id: 1, item_text: 'Mumbai' },
      { item_id: 2, item_text: 'Bangaluru' },
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' },
      { item_id: 5, item_text: 'New Delhi' },
      { item_id: 10, item_text: 'Prueba' }
    ];

    let temporalCities = []

    this.PruebasService.getCities().subscribe(resp => {
      console.log(resp)

      this.dropdownList = resp.cities



    }


    )
    // este seria el que estariamos mandando al back

    this.selectedItems = [
      //  { item_id: 3, item_text: 'Pune' }, //datos seleccionados por default 

    ];

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };


  }



  prueba() {
    console.log(this.value);

  }



















}
