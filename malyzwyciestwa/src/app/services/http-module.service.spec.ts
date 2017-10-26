import { TestBed, inject } from '@angular/core/testing';

import { HttpModuleService } from './http-module.service';

describe('HttpModuleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpModuleService]
    });
  });

  it('should be created', inject([HttpModuleService], (service: HttpModuleService) => {
    expect(service).toBeTruthy();
  }));
});
