import {NgModule,Component,ElementRef,AfterViewInit,DoCheck,OnDestroy,Input,Output,IterableDiffers,ViewChild} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Message} from 'primeng/primeng';
import {DomHandler} from './domHandler';

@Component({
    selector: 'p-growl',
    template: `
        <div #container class="ui-growl ui-widget" [style.zIndex]="zIndex">
            <div #msgel *ngFor="let msg of value; let i=index;" class="ui-growl-item-container ui-state-highlight ui-corner-all ui-shadow" aria-live="polite"
                [ngClass]="{'ui-growl-message-info':msg.severity == 'info','ui-growl-message-warn':msg.severity == 'warn',
                    'ui-growl-message-error':msg.severity == 'error','ui-growl-message-success':msg.severity == 'success'}">
                <div class="ui-growl-item">
                     <div class="ui-growl-icon-close fa fa-close" (click)="remove(msg,msgel, i)"></div>
                     <span class="ui-growl-image fa fa-2x"
                        [ngClass]="{'fa-info-circle':msg.severity == 'info','fa-warning':msg.severity == 'warn',
                                'fa-close':msg.severity == 'error','fa-check':msg.severity == 'success'}"></span>
                     <div class="ui-growl-message">
                        <span class="ui-growl-title">{{msg.summary}}</span>
                        <p [innerHTML]="msg.detail"></p>
                     </div>
                     <div style="clear: both;"></div>
                </div>
            </div>
        </div>
    `,
    providers: [DomHandler]
})
export class Growl implements AfterViewInit,DoCheck,OnDestroy {

    @Input() sticky: boolean = false;

    @Input() life: number = 3000;

    @Input() value: Message[];
    
    @ViewChild('container') containerViewChild: ElementRef;
        
    differ: any;
    
    zIndex: number;
    
    container: HTMLDivElement;
    
    stopDoCheckPropagation: boolean;
    
    timeout: any;
        
    constructor(public el: ElementRef, public domHandler: DomHandler, differs: IterableDiffers) {
        this.differ = differs.find([]).create(null);
        this.zIndex = DomHandler.zindex;
    }

    ngAfterViewInit() {
        this.container = <HTMLDivElement> this.containerViewChild.nativeElement;
    }
    
    ngDoCheck() {
        let changes = this.differ.diff(this.value);
        if(changes && this.container) {
            if(this.stopDoCheckPropagation) {
                this.stopDoCheckPropagation = false;
            }
            else if(this.value && this.value.length) {
                this.zIndex = ++DomHandler.zindex;
                this.domHandler.fadeIn(this.container, 250);
                
                if(!this.sticky) {
                    if(this.timeout) {
                        clearTimeout(this.timeout);
                    }
                    this.timeout = setTimeout(() => {
                        this.removeAll();
                    }, this.life);
                }
            }
        }
    }
    
    remove(msg: Message, msgel: any, i: number) {
        this.stopDoCheckPropagation = true;
        
        this.domHandler.fadeOut(msgel, 250);
        
        setTimeout(() => {
            this.value = [...this.value.slice(0, i), ...this.value.slice(i+1)];
        }, 250);
        
    }
    
    removeAll() {
        if(this.value && this.value.length) {
            this.stopDoCheckPropagation = true;
            
            this.domHandler.fadeOut(this.container, 250);
            
            setTimeout(() => {
                this.value = [...this.value.slice(0, 0)];
            }, 250);
        }
    }

    ngOnDestroy() {
        if(!this.sticky) {
            clearTimeout(this.timeout);
        }
    }

}

@NgModule({
    imports: [CommonModule],
    exports: [Growl],
    declarations: [Growl]
})
export class GrowlModule { }