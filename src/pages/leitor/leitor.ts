import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { TextToSpeech } from '@ionic-native/text-to-speech'

@IonicPage()
@Component({
  selector: 'page-leitor',
  templateUrl: 'leitor.html',
})
export class LeitorPage {
  //export class HomePage {
    qrData = null;
    createdCode = null;
    scannedCode = null;
    text: string; //texto seria o qrData
    constructor(private barcodeScanner: BarcodeScanner, private tts: TextToSpeech) { }
   
    createCode() {
      this.createdCode = this.qrData;  //qrData => variavel de texto pra enviar pro qr code
    }
    async sayText(): Promise<any>{
      try{
        await this.tts.speak({
          text : this.scannedCode,//text
          locale: 'pt-BR'//adicionando local brasil pra voz
        }); 
        console.log("falou" + this.scannedCode); //text
      }
      catch(e){
        console.log(e);
      }
    }
    scanCode() {
      this.barcodeScanner.scan().then(barcodeData => {
        this.scannedCode = barcodeData.text; //texto scanneado  barcodeData.text => texto do qr code
        this.sayText();
      }, (err) => {
          console.log('Error: ', err);
      });
  
    }
  }