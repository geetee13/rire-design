import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatCardModule } from "@angular/material/card";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material/icon";
import { MatDividerModule } from "@angular/material/divider";
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatListModule} from '@angular/material/list';
import { FlexLayoutModule } from "@angular/flex-layout";
import { ResponsiveToolbarComponent } from './responsive-toolbar/responsive-toolbar.component';
import { UserSelectComponent } from "./user-select/user-select.component";
import { PilotDashboardWeekComponent } from "./pilot-dashboard-week/pilot-dashboard-week.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    FlexLayoutModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatListModule,
  ],
  declarations: [AppComponent, UserSelectComponent, PilotDashboardWeekComponent, ResponsiveToolbarComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
