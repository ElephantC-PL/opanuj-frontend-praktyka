import { ComponentFixture, ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { DebugElement } from '@angular/core';
import {By} from '@angular/platform-browser';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let debug: DebugElement;
  let baseElement: HTMLElement;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [{provide: ComponentFixtureAutoDetect, useValue: true}],
    });
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;       
    debug = fixture.debugElement;    
  });

  it('should create the app', () => {    
    expect(component).toBeTruthy();
  });

  it(`should have the 'm2l2' title`, () => {
    expect(component.title).toEqual('library');
  });

  it('should chenge newTitle on input change', async ()=> {
    const input = debug.query(By.css('input')).nativeElement;  
    expect(component.newTitle).toEqual('');

    input.value = 'asasa';
    input.dispatchEvent(new Event('input'));
    await fixture.whenStable();
    expect(component.newTitle).toEqual('asasa');
  });  

  it('should add list element on add button click', async ()=> {
    const input = debug.query(By.css('input')).nativeElement;  
    const addButton =  debug.query(By.css('input + button')).nativeElement;       

    input.value = 'asasa';
    input.dispatchEvent(new Event('input'));
    addButton.dispatchEvent(new Event('click'));
    await fixture.whenStable();
    const list = debug.queryAll(By.css('li')); 
    expect(list).toHaveSize(3);
  })

  it('should render list with 2 elements at start', () => {    
    const list = debug.queryAll(By.css('li'));
    expect(list).toHaveSize(2);
  });

  it('should delete list item on delete button', async ()=> {
    const dellButton =  debug.query(By.css('li button')).nativeElement;           
    
    dellButton.dispatchEvent(new Event('click'));
    await fixture.whenStable();
    const list = debug.queryAll(By.css('li')); 
    expect(list).toHaveSize(1);
  });
});
