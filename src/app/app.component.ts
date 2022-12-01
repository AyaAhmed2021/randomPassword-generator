import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'randomPassword-Generator';
  password;
  symbol = false;

  checkSymbol() {
    console.log('symbol');
    this.symbol =!this.symbol;
    console.log(this.symbol);

  }

  generatePassword() {
    if (this.symbol) {
      this.password = Array(10)
        .fill(
          '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz~!@-#$'
        )
        .map(function (x) {
          return x[Math.floor(Math.random() * x.length)];
        })
        .join('');
      console.log('second');

      console.log(this.password);
    } else {
      this.password = Math.random().toString(36).slice(-8);
      console.log('first');
      console.log(this.password);
    }
  }

  copyPassword(){
    navigator.clipboard.writeText(this.password).then().catch(e => console.error(e));
  }
}
