import { Component, signal } from '@angular/core';
import { Image } from '../../interfaces/image-interface';
import { ImageItem } from '../image-item/image-item';
import { CdkDrag, CdkDropList, CdkDropListGroup, moveItemInArray, CdkDragDrop } from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-gallery',
  imports: [ImageItem, CdkDrag, CdkDropList, CdkDropListGroup],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css',
})

export class Gallery {
  myGallery = signal<Image[]>([
    {
      id: '1',
      src: 'https://picsum.photos/id/237/500/600',
      alt: 'A picture of a black dog',
    },

    {
      id: '2',
      src: 'https://picsum.photos/id/22/500/600',
      alt: 'A lonely man crossing a street'
    },

    {
      id: '3',
      src: 'https://picsum.photos/id/120/500/600',
      alt: 'A picture of starry night sky'
    },

    {
      id: '4',
      src: 'https://picsum.photos/id/472/500/600',
      alt: 'A picture of a foggy forest'
    },

    {
      id: '5',
      src: 'https://picsum.photos/id/582/500/600',
      alt: 'A picture of a wolf'
    },

    {
      id: '6',
      src: 'https://picsum.photos/id/619/500/600',
      alt: 'A picture of a red phone cabin'
    },

    {
      id: '7',
      src: 'https://picsum.photos/id/655/500/600',
      alt: 'A picture of an old blue and white van'
    },

    {
      id: '8',
      src: 'https://picsum.photos/id/685/500/600',
      alt: 'A picture of a man sitting on a rock above the clouds'
    },

    {
      id: '9',
      src: 'https://picsum.photos/id/742/500/600',
      alt: 'A picture of the statue of liberty'
    },

    {
      id: '10',
      src: 'https://picsum.photos/id/832/500/600',
      alt: 'A picture of a woman reading'
    },
  ])

  featuredImageId = signal<string>(this.myGallery()[0]?.id || "");

  removeImage(id: string): void {
    if (window.confirm("Are you sure you want to delete this picture?" + ' ' + 'Number ' + id)){
      this.myGallery.update(currentImages => currentImages.filter(image => image.id !== id))
    }
    this.featuredImageId.set(this.myGallery()[0]?.id || '');
  };

  drop(event: CdkDragDrop<Image[]>){
    this.myGallery.update(currentImages => {moveItemInArray(currentImages, event.previousIndex, event.currentIndex);
      return [...currentImages];
    });
    this.featuredImageId.set(this.myGallery()[0]?.id || '');
  };

  selectedImageIds = signal <Set<string>>(new Set ());

  toggleSelection(id:string) {
    this.selectedImageIds.update(currentIds => {
      const newSet = new Set(currentIds);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  deleteSelectedImages(): void {
    if (window.confirm('Are you sure you want to delete all selected images?')){
      this.myGallery.update(currentImages => 
      currentImages.filter(image => !this.selectedImageIds().has(image.id))
    );

    this.selectedImageIds.update(set => {
      set.clear();
      return new Set(set);
    });

    this.featuredImageId.set(this.myGallery()[0]?.id || '');
  }
    }
};

