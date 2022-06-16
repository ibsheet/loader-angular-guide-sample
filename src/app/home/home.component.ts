import { Component, OnInit } from '@angular/core';

interface itemInfo {
  type: string;
  val: string;
  url: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items: itemInfo[] = [
    {
      type: '컬럼 타입',
      val: '기본기능',
      url: '/type'
    },
    {
      type: '자동 머지',
      val: '기본기능',
      url: '/merge'
    },
    {
      type: '트리 기능',
      val: '기본기능',
      url: '/tree'
    },
    {
      type: '대용량 조회',
      val: '기본기능',
      url: '/dataload'
    },
    {
      type: '소계 기능',
      val: '고급기능',
      url: '/subsum'
    },
    {
      type: '포뮬러 기능',
      val: '고급기능',
      url: '/formula'
    },
    {
      type: '멀티레코드',
      val: '고급기능',
      url: '/multirecord'
    },
    {
      type: '서버 페이징',
      val: '고급기능',
      url: '/serverscrollpaging'
    },
    {
      type: 'Form 형태를 이용한 상세보기',
      val: '실무예제',
      url: '/form'
    },
    {
      type: '여러 개의 시트',
      val: '실무예제',
      url: '/multiple'
    },
    {
      type: '시트 + 다이얼로그',
      val: '실무예제',
      url: '/dialog'
    },
    {
      type: '마스터 디테일 구조',
      val: '실무예제',
      url: '/masterDetail'
    },
  ];


  constructor() { }

  ngOnInit(): void {
  }

  getImage(val: string): string {
    const str = '/assets/img' + val + '.png';
    return 'url(' + str + ')';
  }

  getColor(val: string): string {
    let color = '';

    switch(val) {
      case '기본기능':
        color = '#d04630';
        break;
      case '고급기능':
        color = '#009ecc';
        break;
      case '실무예제':
        color = '#4caf50';
        break;
    }

    return color;
  }

}
