import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByPostType'
})
export class FilterByPostTypePipe implements PipeTransform {
  transform(posts: any[], postType: Number): any[] {
    return posts.filter(post => post.postType === postType);
  }
}
