import { AfterViewInit, Component, ComponentFactoryResolver, ComponentRef, Input, OnDestroy, OnInit, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { Tile } from './../../models/tile.model';

@Component({
  selector: 'app-dynamic-loader',
  templateUrl: 'dynamic-loader.component.html'
})
export class DynamicLoaderComponent
  implements OnInit, OnDestroy, AfterViewInit {
  @Input()
  tile: Tile;

  @ViewChild('templateContainer', { read: ViewContainerRef, static: true })
  container: ViewContainerRef;

  private componentRef: ComponentRef<any>;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    if (this.componentRef) {
      this.componentRef.destroy();
    }
  }

  ngAfterViewInit(): void {
    this.loadComponent();
  }

  loadComponent(): void {
    if (typeof this.tile.component === 'string') {
      const script = document.createElement('script');
      script.src = `assets/${this.tile.component}.bundle.js`;
      document.body.appendChild(script);

      const tile = document.createElement(this.tile.component);
      this.container.element.nativeElement.parentElement.appendChild(tile);
    } else {
      this.container.clear();
      const factory = this.componentFactoryResolver.resolveComponentFactory(
        this.tile.component as Type<any>
      );

      setTimeout(() => {
        this.componentRef = this.container.createComponent(factory);
      });
    }
  }
}
