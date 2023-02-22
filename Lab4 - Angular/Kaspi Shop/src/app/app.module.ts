import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { CartComponent } from './cart/cart.component';

  @NgModule({
    imports: [
      BrowserModule,
      ReactiveFormsModule,
      RouterModule.forRoot([
        {path: '', component: ProductListComponent},
        {path: 'products/:productId', component: ProductDetailsComponent},
        {path: 'cart', component: CartComponent},
      ])
    ],
    declarations: [
      AppComponent,
      TopBarComponent,
      ProductListComponent,
      ProductAlertsComponent,
      ProductDetailsComponent,
      CartComponent,
    ],
  });

