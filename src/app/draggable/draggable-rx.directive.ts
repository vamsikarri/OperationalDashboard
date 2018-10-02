import { Directive, HostBinding, Output, EventEmitter, OnInit, HostListener } from '@angular/core';
import { Subject } from '../../../node_modules/rxjs';
import { switchMap, takeUntil, repeat, take } from 'rxjs/operators';

@Directive({
  selector: '[appDraggableRx]'
})
export class DraggableRxDirective implements OnInit{
 //adds the class draggable and binds to the element
 @HostBinding('class.draggable') draggable = true;
 constructor() { }
 //variable to control the drag events
 private dragging = true;

 /**
  * Drag Start
  */
 @Output() dragStart = new EventEmitter<PointerEvent>();
 /**
  * Drag Move
  */
 @Output() dragMove  = new EventEmitter<PointerEvent>();
 /**
  * Drag End
  */
 @Output() dragEnd = new EventEmitter<PointerEvent>();


 private pointerDown = new Subject<PointerEvent>();
 private pointerMove = new Subject<PointerEvent>(); 
 private pointerUp = new Subject<PointerEvent>();
 
 @HostListener('pointerdown', ['$event']) onPointerDown(event: PointerEvent): void {
  this.pointerDown.next(event);
 } 
 @HostListener('document:pointermove', ['$event']) onPointerMove(event: PointerEvent): void {
  this.pointerMove.next(event);
 } 
 @HostListener('document:pointerup', ['$event']) onPointerUp(event: PointerEvent): void {
  this.pointerUp.next(event);
 } 
 ngOnInit(): void{
  //stream for dragstart
  this.pointerDown.asObservable().subscribe(event => this.dragStart.emit(event));
  //stream for drag move
  this.pointerDown.pipe(switchMap(()=> this.pointerMove), takeUntil(this.pointerUp), repeat()).subscribe(event => this.dragMove.emit(event));
  //stream for dragend
  this.pointerDown.pipe(switchMap(() => this.pointerUp),take(1),repeat()).subscribe(event => this.dragEnd.emit(event));

 }
}
