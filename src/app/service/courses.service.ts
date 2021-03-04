import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'

export interface Course {
  id: number,
  url: string,
  description: string,
  longDescription: string,
  totalLessons: number,
  comingSoon: boolean,
  isNew: boolean,
  isOngoing: boolean,
  visibleFrom: string,
  iconUrl: string,
  courseListIcon: string,
  couponCode: string,
  archived: boolean
}



@Injectable({
  providedIn: 'root'
})
export class CoursesService {

constructor(private http: HttpClient) { }
getCourseList(){
  //use mock API
  // return this.http.get<{data:Course[]}>('/mock/courses');
  //use online API
  return this.http.get<{data:Course[]}>('/api/courses')
}

}
