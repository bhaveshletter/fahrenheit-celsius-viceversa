import { Directive, ElementRef, HostListener } from '@angular/core'

@Directive({
	selector: '[appTwoDecimalNumber]',
})
export class TwoDecimalNumberDirective {
	allowKeys: string[] = [
		'0',
		'1',
		'2',
		'3',
		'4',
		'5',
		'6',
		'7',
		'8',
		'9',
		'.',
		'Backspace',
		'Tab',
		'End',
		'Home',
		'ArrowLeft',
		'ArrowRight',
		'Del',
		'Delete',
	]

	constructor(private ele: ElementRef) {}

	@HostListener('keydown', ['$event']) onKeyDown(event: KeyboardEvent) {
		let value: string = this.ele.nativeElement.value
		// Allowing only allowKeys or tot allowing for more than 1 decimal digit
		if (
			!this.allowKeys.includes(event.key) ||
			(value.includes('.') &&
				(event.key === '.' ||
					(!['Backspace', 'Delete', 'Del'].includes(event.key) &&
						value.split('.')[1].length == 1)))
		) {
			event.preventDefault()
		}
	}
}
