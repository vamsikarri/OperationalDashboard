import { Directive, HostBinding, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appDraggable]'
})
export class DraggableDirective {
 //adds the class draggable and binds to the element
  @HostBinding('class.draggable') draggable = true;
  @HostBinding('class.dragging') dragging = false;
  
  constructor() { }
  //variable to control the drag events
  //private dragging = true;

  @Output() dragStart = new EventEmitter<PointerEvent>();
  @Output() dragMove  = new EventEmitter<PointerEvent>();
  @Output() dragEnd = new EventEmitter<PointerEvent>();

  // pointer down => dragStart
  @HostListener('pointerdown',['$event']) onPointerDown(event: PointerEvent): void{
    this.dragging = true;
    event.stopPropagation();
    this.dragStart.emit(event);
  }
  // document:pointer move => dragMove
  @HostListener('document:pointermove',['$event']) onPointerMove(event: PointerEvent): void{
    if(!this.dragging){
      return;
    }
    this.dragMove.emit(event);
    }
  // pointer up  => dragEnd
  @HostListener('document:pointerup',['$event']) onPointerUp(event: PointerEvent): void{
    if(!this.dragging){
      return;
    }
    this.dragging = false;
    this.dragEnd.emit(event);
    }
}
