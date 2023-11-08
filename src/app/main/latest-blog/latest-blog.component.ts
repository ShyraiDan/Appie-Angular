import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-latest-blog',
  templateUrl: './latest-blog.component.html',
  styleUrls: ['./latest-blog.component.css'],
})
export class LatestBlogComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  comments = [
    {
      img: '../../../assets/i/blog-4.jpg',
      title: 'How to Improve Your App Store Position',
    },
    {
      img: '../../../assets/i/blog-5.jpg',
      title: 'Introducing New App Design for our iOS App',
    },
    {
      img: '../../../assets/i/blog-6.jpg',
      title: 'Engineering job is Becoming More interesting.',
    },
    {
      img: '../../../assets/i/blog-7.jpg',
      title: '20 Myths About Mobile Applications',
    },
  ];
}
