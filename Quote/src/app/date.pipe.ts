import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'date'
})
export class DatePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let date:Date =new Date();
    let updateDate:any= new Date(date.getFullYear(),date.getMonth(),date. getDate());
    let dateDifference=Math.abs(updateDate.value);
    const secondsInDay=86400;
    let dateDifferenceInSeconds=dateDifference*0.001;
    let dateCount=dateDifferenceInSeconds/secondsInDay;

    if(dateCount>0.5){
      return Math.ceil(dateCount)+ " "+"days ago";
    }
    else{
    return null;
  }
  }
}
