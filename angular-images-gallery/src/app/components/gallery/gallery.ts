import { Component, signal } from '@angular/core';
import { Image } from '../../interfaces/image-interface';
import { ImageItem } from '../image-item/image-item';

@Component({
  selector: 'app-gallery',
  imports: [ImageItem],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css',
})

export class Gallery {
  myGallery = signal<Image[]>([
    {
      id: '1',
      src: 'https://picsum.photos/id/237/200/300',
      alt: 'A picture of a black dog'
    },
    {
      id: '2',
      src: 'https://picsum.photos/id/22/200/300',
      alt: 'A lonely man crossing a street'
    },
    {
      id: '3',
      src: 'https://picsum.photos/id/120/200/300',
      alt: 'A picture of starry night sky'
    },
    {
      id: '4',
      src: 'https://picsum.photos/id/472/200/300',
      alt: 'A picture of a foggy forest'
    },
    {
      id: '5',
      src: 'https://picsum.photos/id/582/200/300',
      alt: 'A picture of a wolf'
    },
    {
      id: '6',
      src: 'https://picsum.photos/id/619/200/300',
      alt: 'A picture of a red phone cabin'
    },
    {
      id: '7',
      src: 'https://picsum.photos/id/655/200/300',
      alt: 'A picture of an old blue and white van'
    },
    {
      id: '8',
      src: 'https://picsum.photos/id/685/200/300',
      alt: 'A picture of a man sitting on a rock above the clouds'
    },
    {
      id: '9',
      src: 'https://picsum.photos/id/742/200/300',
      alt: 'A picture of the statue of liberty'
    },
    {
      id: '10',
      src: 'https://picsum.photos/id/832/200/300',
      alt: 'A picture of a woman reading'
    },
  ])

}

