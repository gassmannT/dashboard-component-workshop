import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Project } from 'src/app/models/project.model';
import { ProjectService } from 'src/app/services/project.service';
import { FilterCriteriaComponent } from '../../filter-criteria/filter-criteria.component';

@Component({
  selector: 'app-projects-tile',
  templateUrl: 'projects-tile.component.html'
})
export class ProjectsTileComponent implements OnInit, AfterViewInit {
  projects: Project[] = [];
  filteredProjects: Project[] = [];

  @ViewChild(FilterCriteriaComponent, {static: true})
  filterComponent: FilterCriteriaComponent;

    //   listFilter: string;

  // // valueChanges Observable way
  // // @ViewChild(NgModel) filterInput: NgModel;

  // //   ngModel simple way
  // //   // tslint:disable-next-line:variable-name
  // //   private _listFilter: string;
  // //   get listFilter(): string {
  // //     return this._listFilter;
  // //   }
  // //   set listFilter(v: string) {
  // //     this._listFilter = v;
  // //     this.performFilter(this.listFilter);
  // //   }

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.projectService.get().subscribe((list: Project[]) => {
      this.projects = list;
      this.performFilter(this.filterComponent.listFilter);
    });
  }

  ngAfterViewInit(): void {
    // // valueChanges Observable way
    // //     this.filterInput.valueChanges.subscribe(() => {
    // //       this.performFilter(this.listFilter);
    // //     });
  }

    onFilterChange(filter: string): void {
      this.performFilter(filter);
    }

  performFilter(filterBy?: string): void {
    filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
    if (filterBy) {
      this.filteredProjects = this.projects.filter(
        (p: Project) =>
          (p.name.toLocaleLowerCase() + p.customer.toLocaleLowerCase()).indexOf(
            filterBy
          ) !== -1
      );
    } else {
      this.filteredProjects = this.projects;
    }
  }
}
