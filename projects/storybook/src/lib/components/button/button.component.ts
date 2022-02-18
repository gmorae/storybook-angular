import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'btn-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  
  @Input() variant: 'blue-100' | 'blue-200' | 'blue-300' | 'blue-400' | 'blue-500' = 'blue-300';

  @Input() label = 'Hi there!';

  @Input() loading = false;

  @Output() onClick = new EventEmitter<any>();

  public get classes(): string[] {
    const modeLoading = this.loading ? 'btn-loading' : ''
    
    return ['btn', `btn-${this.variant}`, modeLoading];
  }

}
