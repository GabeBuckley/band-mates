// tslint:disable-next-line: max-line-length
import {
  Component,
  OnInit,
  AfterViewInit,
  AfterViewChecked,
  ViewChild,
  ElementRef,
  ChangeDetectionStrategy,
  ChangeDetectorRef  } from '@angular/core';
import * as moment from 'moment';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit, AfterViewInit, AfterViewChecked {

  @ViewChild('calRoot', {static: true}) calRoot: ElementRef;
  @ViewChild('calendar', {static: false}) calendar: ElementRef;
  @ViewChild('dayView', {static: false}) dayView: ElementRef;


  selectedDate: string;

  constructor(private changeDetector: ChangeDetectorRef) { }

  ngOnInit() {
    this.selectedDate =  moment().format('YYYY-MM-DD');
  }

  ngAfterViewInit() {
    console.log(this);
    this.calRoot.nativeElement.querySelector('[aria-label="November 22, 2019"]').classList.add('gig_booked');
  }

  ngAfterViewChecked() {
    this.changeDetector.detectChanges();
  }

  handleDateSelected(selDate: any) {
    this.selectedDate = selDate.format('YYYY-MM-DD');
    this.dayView.nativeElement.classList.remove('hidden');
  }

  hideDayView() {
    this.dayView.nativeElement.classList.add('hidden');
  }
}
