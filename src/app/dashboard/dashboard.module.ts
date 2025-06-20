import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './components/main/main.component';
import { WrapperComponent } from './components/layout/wrapper/wrapper.component';
import { NavigationComponent } from './components/layout/navigation/navigation.component';
import { TopbarComponent } from './components/layout/topbar/topbar.component';
import { UsersListComponent } from './components/users/users-list/users-list.component';
import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { DialogConfirmComponent } from './components/shared/dialogs/dialog-confirm/dialog-confirm.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { UsersCreateComponent } from './components/users/users-create/users-create.component';
import { UsersUpdateComponent } from './components/users/users-update/users-update.component';
import { UsersDetailComponent } from './components/users/users-detail/users-detail.component';
import { CommonModule } from '@angular/common';
import { SkelletonUserInfoComponent } from './components/shared/skelletons/skelleton-user-info/skelleton-user-info.component';
import { SkelletonFormComponent } from './components/shared/skelletons/skelleton-form/skelleton-form.component';
import { SkelletonIconComponent } from './components/shared/skelletons/skelleton-icon/skelleton-icon.component';
import { SkelletonTableComponent } from './components/shared/skelletons/skelleton-table/skelleton-table.component';
import { CompanyLogoComponent } from './components/shared/icons/company-logo/company-logo.component';
import { ServicesListComponent } from './components/services/services-list/services-list.component';
import { ServicesCreateComponent } from './components/services/services-create/services-create.component';
import { ServicesUpdateComponent } from './components/services/services-update/services-update.component';
import { ServicesDetailComponent } from './components/services/services-detail/services-detail.component';
import { SuppliersListComponent } from './components/suppliers/suppliers-list/suppliers-list.component';
import { SuppliersCreateComponent } from './components/suppliers/suppliers-create/suppliers-create.component';
import { SuppliersUpdateComponent } from './components/suppliers/suppliers-update/suppliers-update.component';
import { SuppliersDetailComponent } from './components/suppliers/suppliers-detail/suppliers-detail.component';
import { CategoriesListComponent } from './components/categories/categories-list/categories-list.component';
import { CategoriesCreateComponent } from './components/categories/categories-create/categories-create.component';
import { CategoriesUpdateComponent } from './components/categories/categories-update/categories-update.component';
import { CategoriesDetailComponent } from './components/categories/categories-detail/categories-detail.component';
import { CompaniesListComponent } from './components/companies/companies-list/companies-list.component';
import { CompaniesCreateComponent } from './components/companies/companies-create/companies-create.component';
import { CompaniesUpdateComponent } from './components/companies/companies-update/companies-update.component';
import { CompaniesDetailComponent } from './components/companies/companies-detail/companies-detail.component';
import { BookingsCalendarComponent } from './components/booking/bookings-calendar/bookings-calendar.component';
import { CalendarDailyComponent } from './components/booking/bookingsCalendar/calendar-daily/calendar-daily.component';
import { CalendarWeeklyComponent } from './components/booking/bookingsCalendar/calendar-weekly/calendar-weekly.component';
import { CalendarMonthlyComponent } from './components/booking/bookingsCalendar/calendar-monthly/calendar-monthly.component';


const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { 
        path: 'users',
        children: [
          { path: '', component: UsersListComponent, pathMatch: 'full' },
          { path: 'create', component: UsersCreateComponent },
          { path: ':id/update', component: UsersUpdateComponent },
          { path: ':id/detail', component: UsersDetailComponent },
          { path: '**', redirectTo: '' }
        ]
      },
      {
        path: 'services',
        children: [
          { path: '', component: ServicesListComponent, pathMatch: 'full' },
          { path: 'create', component: ServicesCreateComponent },
          { path: ':id/update', component: ServicesUpdateComponent },
          { path: ':id/detail', component: ServicesDetailComponent },
          { path: '**', redirectTo: '' }
        ]
      },
      {
        path: 'suppliers',
        children: [
          { path: '', component: SuppliersListComponent, pathMatch: 'full' },
          { path: 'create', component: SuppliersCreateComponent },
          { path: ':id/update', component: SuppliersUpdateComponent },
          { path: ':id/detail', component: SuppliersDetailComponent },
          { path: '**', redirectTo: '' }
        ]
      },
      {
        path: 'categories',
        children: [
          { path: '', component: CategoriesListComponent, pathMatch: 'full' },
          { path: 'create', component: CategoriesCreateComponent },
          { path: ':id/update', component: CategoriesUpdateComponent },
          { path: ':id/detail', component: CategoriesDetailComponent },
          { path: '**', redirectTo: '' }
        ]
      },
      {
        path: 'companies',
        children: [
          { path: '', component: CompaniesListComponent, pathMatch: 'full' },
          { path: 'create', component: CompaniesCreateComponent },
          { path: ':id/update', component: CompaniesUpdateComponent },
          { path: ':id/detail', component: CompaniesDetailComponent },
          { path: '**', redirectTo: '' }
        ]
      },
      {
        path: 'bookings',
        children: [
          { path: '', component: BookingsCalendarComponent, pathMatch: 'full' },
          { path: 'daily', component: CalendarDailyComponent },
          { path: 'weekly', component: CalendarWeeklyComponent },
          { path: 'monthly', component: CalendarMonthlyComponent },
          { path: '**', redirectTo: '' }
        ]
      }
    ]
  }
];



@NgModule({
  declarations: [
    MainComponent,
    WrapperComponent,
    TopbarComponent,
    NavigationComponent,
    UsersListComponent,
    UsersCreateComponent,
    UsersUpdateComponent,
    UsersDetailComponent,
    DialogConfirmComponent,
    SkelletonUserInfoComponent,
    SkelletonFormComponent,
    SkelletonIconComponent,
    SkelletonTableComponent,
    CompanyLogoComponent,
    ServicesListComponent,
    ServicesCreateComponent,
    ServicesUpdateComponent,
    ServicesDetailComponent,
    SuppliersListComponent,
    SuppliersCreateComponent,
    SuppliersUpdateComponent,
    SuppliersDetailComponent,
    CategoriesListComponent,
    CategoriesCreateComponent,
    CategoriesUpdateComponent,
    CategoriesDetailComponent,
    CompaniesListComponent,
    CompaniesCreateComponent,
    CompaniesUpdateComponent,
    CompaniesDetailComponent,
    BookingsCalendarComponent,
    CalendarDailyComponent,
    CalendarWeeklyComponent,
    CalendarMonthlyComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSliderModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatProgressBarModule,
    MatPaginatorModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatBadgeModule,
    MatSnackBarModule,
    NgxSkeletonLoaderModule,
  ]
})
export class DashboardModule { }
