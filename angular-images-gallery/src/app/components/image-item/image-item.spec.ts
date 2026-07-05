import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ImageItem } from './image-item';
import { Image } from '../../interfaces/image-interface';
import { CommonModule } from '@angular/common';

describe('ImageItem', () => {
  let component: ImageItem;
  let fixture: ComponentFixture<ImageItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageItem], 
    }).compileComponents();

    fixture = TestBed.createComponent(ImageItem);
    component = fixture.componentInstance;
    fixture.componentRef.setInput( 'imageData', {id: 'test-id', src: 'test.jpg', alt: 'Test Image'});
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the image with correct src and alt', () => {
    const imgElement: HTMLImageElement = fixture.nativeElement.querySelector('img');
    expect(imgElement.src).toContain('test.jpg');
    expect(imgElement.alt).toBe('Test Image');
  });

  it('should apply "featured" class when isFeatured input is true', () => {
    fixture.componentRef.setInput('isFeatured', true);
    fixture.detectChanges();
    const containerElement: HTMLDivElement = fixture.nativeElement.querySelector('.image-card');
    expect(containerElement.classList).toContain('featured');
  });

    it('should emit deleteImage event when delete button is clicked', () => {
    let emittedId: string | undefined;

    component.deleteImage.subscribe((id:string) => {
      emittedId = id;
    });

    const deleteButton: HTMLButtonElement = fixture.nativeElement.querySelector('button');
    deleteButton.click(); 

    expect(emittedId).toBe('test-id');
  });

  it('should stop event propagation on delete button click', () => {
    const deleteButton: HTMLButtonElement = fixture.nativeElement.querySelector('button');
    const event = new MouseEvent('click', { bubbles: true , cancelable: true});

    let stopPropagationCalled = false;
    event.stopPropagation = () => {
    stopPropagationCalled = true;
  };

    deleteButton.dispatchEvent(event);

    expect(stopPropagationCalled).toBe(true);
  });

});
