import {FlexLayoutModule} from '@angular/flex-layout';
import {NgModule} from '@angular/core';
import {
  MatIconModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatCheckboxModule, MatSidenavModule,
  MatToolbarModule, MatButtonModule, MatCardModule, MatDividerModule, MatListModule, MatTabsModule,
} from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatIconModule , MatFormFieldModule , MatInputModule , MatDatepickerModule, MatNativeDateModule ,
    MatCheckboxModule, MatSidenavModule, MatToolbarModule, MatCardModule, MatDividerModule, MatListModule, FlexLayoutModule,
    MatTabsModule,
  ],
  exports: [MatButtonModule, MatIconModule , MatFormFieldModule , MatInputModule , MatDatepickerModule , MatNativeDateModule ,
    MatCheckboxModule, MatSidenavModule, MatToolbarModule, MatCardModule, MatDividerModule,  MatListModule, FlexLayoutModule,
    MatTabsModule,
  ]
})

export  class MaterialModule {
}
