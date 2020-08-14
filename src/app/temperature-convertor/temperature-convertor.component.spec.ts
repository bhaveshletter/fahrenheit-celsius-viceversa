import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { TemperatureConvertorComponent } from './temperature-convertor.component'
import { FormsModule } from '@angular/forms'
import { TwoDecimalNumberDirective } from '../two-decimal-number.directive'
// import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'

describe('TemperatureConvertorComponent', () => {
	let component: TemperatureConvertorComponent,
		fixture: ComponentFixture<TemperatureConvertorComponent>

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [TemperatureConvertorComponent, TwoDecimalNumberDirective],
			imports: [FormsModule],
			providers: [],
			// schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
		}).compileComponents()
	}))

	beforeEach(() => {
		fixture = TestBed.createComponent(TemperatureConvertorComponent)
		component = fixture.componentInstance
		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})

	it('should get 33.8 fahrenheit on entering of 1 celsius', () => {
		component._cel = '1'
		// console.log('++++++++++++++++++++++++++++++++++++++++++++++++\n')
		expect(component._fah).toEqual('33.8')
	})

	// it('should get 1.0 celsius on entering 33.8 fahrenheit.', () => {
	// 	component._fah = '33.8'
	// 	expect(component._cel).toEqual('1.0')
	// })
})
