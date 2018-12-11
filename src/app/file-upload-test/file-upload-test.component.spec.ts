import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileUploadTestComponent } from './file-upload-test.component';

describe('FileUploadTestComponent', () => {
  let component: FileUploadTestComponent;
  let fixture: ComponentFixture<FileUploadTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileUploadTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileUploadTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
