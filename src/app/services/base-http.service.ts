import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { ServiceResult } from '../models';

export class BaseHttpService<T> {
  public endPointUrl: string;
  constructor(public httpClient: HttpClient, public endPoint: string) {
    this.endPointUrl = `${environment.app.serviceUrl}/${endPoint}`;
  }

  public getAll(): Observable<ServiceResult<T[]>> {
    return this.httpClient.get<ServiceResult<T[]>>(this.endPointUrl);
  }
}
