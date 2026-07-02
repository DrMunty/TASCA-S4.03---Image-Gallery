import { Component, input, ChangeDetectionStrategy} from '@angular/core';
import { Image } from '../../interfaces/image-interface';
import { output } from '@angular/core';

@Component({
  selector: 'app-image-item',
  imports: [],
  templateUrl: './image-item.html',
  styleUrl: './image-item.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ImageItem {
  imageData = input.required<Image>();
  isFeatured = input<boolean>(false);
  deleteImage = output<string>();
  isSelected = input<boolean>(false);
  selectImage = output<string>();

  onImageClick(): void {
    this.selectImage.emit(this.imageData().id);
  }

  onDeleteClick(event: Event): void {
    event.stopPropagation();
    this.deleteImage.emit(this.imageData().id);
  }
}
