import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { ParamService } from './../../services/param.service';

@Component({
  selector: 'app-filter-criteria',
  templateUrl: 'filter-criteria.component.html'
})
export class FilterCriteriaComponent
  implements OnInit, OnChanges, AfterViewInit {
  // tslint:disable-next-line:variable-name
  private _hitCount: number;
  get hitCount(): number {
    return this._hitCount;
  }
  @Input()
  set hitCount(v: number) {
    this._hitCount = v;
    // Getter / Setter Way
    if (this._hitCount === 0) {
      this.hitCountMessage = 'no projects found.';
    } else {
      this.hitCountMessage = `${this._hitCount} hits`;
    }
  }

  @Output()
  valueChange: EventEmitter<string> = new EventEmitter<string>();

  @ViewChild('searchInput')
  input: ElementRef;

  hitCountMessage: string;

  public get listFilter(): string {
    return this.paramService.keyword;
  }
  public set listFilter(v: string) {
    this.paramService.keyword = v;
    this.valueChange.emit(v);
  }

  constructor(private paramService: ParamService) {}

  ngOnInit(): void {}

  // ngOnChanges Way
  ngOnChanges(changes: SimpleChanges): void {
    //     if (changes['hitCount']) {
    //       if (this._hitCount === 0) {
    //         this.hitCountMessage = 'no projects found.';
    //       } else {
    //         this.hitCountMessage = `${this._hitCount} hits`;
    //       }
    //     }
  }

  ngAfterViewInit(): void {
    this.input.nativeElement.focus();
  }
}
