import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  public mask=
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



  public curp= {
    mask: '',
    signed: false,
    scale: 5, // No decimal allowed
  };







}
