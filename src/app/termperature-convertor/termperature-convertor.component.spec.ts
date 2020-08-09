import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TermperatureConvertorComponent } from './termperature-convertor.component';

describe('TermperatureConvertorComponent', () => {
  let component: TermperatureConvertorComponent;
  let fixture: ComponentFixture<TermperatureConvertorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TermperatureConvertorComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermperatureConvertorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get 33.8 fahrenheit on entering of 1 celsius', () => {
    component._cel = '1';
    expect(component._fah).toEqual('33.8');
  });
});
