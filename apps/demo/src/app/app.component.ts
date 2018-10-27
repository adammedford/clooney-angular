import { Component } from '@angular/core';
import { ClooneyService } from '@clooney-angular/clooney-angular';

class TestActor {
  getSomething(a, b) {
    return a + b;
  }
}

@Component({
  selector: 'clooney-angular-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';

  constructor(private cloon: ClooneyService) {

  }



  ngOnInit()  {
    this.cloon.getInstance(this.cloon.getRoundRobinStrategy(), TestActor).subscribe(val => {
      console.log('val', val);
    });
  }
}
