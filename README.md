# Ionic Angular Data Table

App to show json data table, using [swimlane npm module 'ngx-datatable'](https://github.com/swimlane/ngx-datatable) and the [Ionic 5 framework](https://ionicframework.com/docs). This is another great Ionic Quick Win from [Simon Grimm IonicAcademy Youtube video 'Creating Ionic Datatable With ngx-datatable'](https://www.youtube.com/watch?v=Ji52_xdxkDg).

## Table of contents

* [General info](#general-info)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## General info

json data is displayed in a table that is very quickly created using the ngx-datatable module. Buttons are added to hange from Material to Bootstrap styles and also from light to dark mode. Another button changes the classes of the rows so male and female employees are shown in different colours.

## Screenshots

![screenshot](./img/bootstrap.png)
![screenshot](./img/categories.png)

## Technologies

* [Ionic v5.14.0](https://ionicframework.com/)
* [Ionic/angular v4.10.0](https://ionicframework.com/)
* [Angular v8.2.8](https://angular.io/)
* [swimlane npm module 'ngx-datatable' v16.0.2](http://swimlane.github.io/ngx-datatable/)

## Setup

* To start the server on _localhost://8100_ type: 'ionic serve'
* The Ionic DevApp was installed on an Android device from the Google Play app store.

## Code Examples

* template to specify data table format.

```html
  <ngx-datatable
  [rows]="companies"
  [ngClass]="tableStyle"
  [rowHeight]="'auto'"
  [headerHeight]="50"
  [columnMode]="'force'"
  [rowClass]="getRowClass.bind(this)">

  <ngx-datatable-column name="Name"></ngx-datatable-column>
  <ngx-datatable-column name="Gender"></ngx-datatable-column>
  <ngx-datatable-column name="Company"></ngx-datatable-column>

  <ngx-datatable-column name="Actions" [sortable]="false">
    <ng-template let-row="row" let-value="value" ngx-datatable-cell-template>
      <ion-button size="small" fill="outline" (click)="open(row)">Details</ion-button>
    </ng-template>
  </ngx-datatable-column>
  </ngx-datatable>
```

## Features

* Updated to latest ionic/angular versions. Dependencies updated and conflicts resolved (typescript must be v3.4.5 or it will not compile).

## Status & To-do list

* Status: Working.

* To-do: incorporate into one of my apps - e.g. Github API data table or repos.

## Inspiration

[Simon Grimm IonicAcademy Youtube video 'Creating Ionic Datatable With ngx-datatable'](https://www.youtube.com/watch?v=Ji52_xdxkDg)

## Contact

Repo created by [ABateman](https://www.andrewbateman.org) - feel free to contact me!
