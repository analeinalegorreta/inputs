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


  public dropdownConsulta: any = [];
  public selectedItemsConsulta: any = [];
  public dropdownSettingsConsulta: IDropdownSettings = {};


  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }


  ngOnInit() {



    this.PruebasService.getCities().subscribe(resp => {
      resp.cities.forEach((elem) => {
        this.dropdownList.push({
          label: elem.id + ' - ' + elem.name,
          value: elem.id
        })
      })

    })

    this.PruebasService.getProd().subscribe(resp => {
      console.log(resp);
      
      resp.forEach((elem) => {
        this.dropdownConsulta.push({
          label: elem.cClaveProdServ + ' - ' + elem.descripcion,
          value: elem.id
        })
      })
      console.log( this.dropdownConsulta);
      
    })
    // este seria el que estariamos mandando al back

    this.selectedItems = [
        //  { item_id: 3, item_text: 'Pune' }, //datos seleccionados por default 

      ];

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'value',
      textField: 'label',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };


    this.dropdownSettingsConsulta = {
      singleSelection: true,
      idField: 'value',
      textField: 'label',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',

      allowSearchFilter: true,

      closeDropDownOnSelection:false

    };


  }



  prueba() {
    console.log(this.value);

  }



















}
