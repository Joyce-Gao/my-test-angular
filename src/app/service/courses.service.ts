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

export interface CourseDetail {
  lessons: [
    {
      courseDescription: string,
      courseId: number,
      courseListIcon: string,
      description: string,
      duration: string,
      iconUrl: string,
      id: number,
      pro: boolean,
      seqNo: number,
      url: string,
      viewed: boolean
    }
  ],
  summary: {
    archived: boolean,
    comingSoon: boolean,
    couponCode: string,
    courseListIcon: string,
    description: string,
    iconUrl: string,
    id: number,
    isNew: boolean,
    isOngoing: boolean,
    longDescription: string,
    totalLessons: number,
    url: string,
    visibleFrom: string,
    }
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
getCourse(courseUrl:string) {
  return this.http.get<CourseDetail>(`/api/courses/${courseUrl}`)
}
}
