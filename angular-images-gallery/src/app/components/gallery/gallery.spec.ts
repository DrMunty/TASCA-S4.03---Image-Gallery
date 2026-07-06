import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Gallery } from './gallery';
import { By } from '@angular/platform-browser';

describe('Gallery', () => {
  let component: Gallery;
  let fixture: ComponentFixture<Gallery>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Gallery],
    }).compileComponents();

    fixture = TestBed.createComponent(Gallery);
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the correct number of image items and pass inputs correctly', () => {
  const imageElements = fixture.debugElement.queryAll(By.css('.image-card'));
  
  expect(imageElements.length).toBe(component.myGallery().length);

  const firstChildInstance = imageElements[0].componentInstance;
  const firstImageMock = component.myGallery()[0];

  expect(firstChildInstance.imageData()).toEqual(firstImageMock);
  expect(firstChildInstance.isFeatured()).toBe(true);
});

it('should remove an image from myGallery when deleteImage event is emitted', () => {
  const originalConfirm = window.confirm;
  window.confirm = () => true;

  const imageElements = fixture.debugElement.queryAll(By.css('app-image-item'));
  const firstChild = imageElements[0];
  const targetId = component.myGallery()[0].id;
  const initialLength = component.myGallery().length;

  firstChild.triggerEventHandler('deleteImage', targetId);
  fixture.detectChanges();

  expect(component.myGallery().length).toBe(initialLength - 1);
  const stillExists = component.myGallery().some(img => img.id === targetId);
  expect(stillExists).toBe(false);

  window.confirm = originalConfirm;
});
});
