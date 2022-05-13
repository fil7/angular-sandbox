import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LazyImgDirective } from './core/directives';
import { AppAsyncPipe } from './core/pipes';
import { UserViewComponent } from './core/components';

@NgModule({
  declarations: [
    AppComponent,
    LazyImgDirective,
    AppAsyncPipe,
    UserViewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
