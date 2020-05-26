import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadCertifcateComponent } from './upload-certifcate.component';

describe('UploadCertifcateComponent', () => {
  let component: UploadCertifcateComponent;
  let fixture: ComponentFixture<UploadCertifcateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadCertifcateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadCertifcateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
