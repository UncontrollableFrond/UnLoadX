import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './components/app.component';
import { disableDeprecatedForms, provideForms } from '@angular/forms';

bootstrap(AppComponent, [
  disableDeprecatedForms(), // disable deprecated forms
  provideForms(), // enable new forms module
])
.catch(err => console.log(`Error bootstrapping App ${err}`));
