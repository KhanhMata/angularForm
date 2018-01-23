import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { AppRoutingModule } from './/app-routing.module';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { QuestionControlService } from './question-control.service';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { DynamicFormQuestionComponent } from './dynamic-form-question/dynamic-form-question.component';
import { QuestionService } from './question.service';
import { CustomerDashboardModule } from './customer-dashboard/customer-dashboard.module';

@NgModule({
  declarations: [
    AppComponent,
    HeroFormComponent,
    HeroDetailComponent,
    DynamicFormComponent,
    DynamicFormQuestionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CustomerDashboardModule
  ],
  providers: [QuestionControlService, QuestionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
