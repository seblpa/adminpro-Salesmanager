import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';




@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  constructor() {

  this.subscription = this.regresaObservable()
.subscribe(
  numero => console.log( 'subs', numero ),
  error => console.log('Error en el obs', error),
  () => console.log('el observador terminó')
);

  }

  ngOnInit() {
  }

  ngOnDestroy() {
    console.log('la pagina se va a cerrar');
    this.subscription.unsubscribe();
  }


regresaObservable(): Observable<any> {

    // tslint:disable-next-line:prefer-const
return new Observable( (observer: Subscriber<any>)  => {

  let contador = 0;

  const intervalo = setInterval( () => {

  contador++;

  const salida = {
    valor: contador
  };

  observer.next( salida );

  // if (contador === 3) {
  //   clearInterval( intervalo );
  //   observer.complete();
  // }

  // if (contador === 2) {
  //   clearInterval( intervalo );
  //   observer.error('auxilio');
  // }

  }, 1000);

  }).pipe(
  map( resp => resp.valor ),
  filter( (valor, index) => {
    // console.log('filter', valor, index);

    if ( (valor % 2) === 1 ) {
      // impar
      return true;
    } else {
      // par
      return false;
    }
  })
);

  }

}
