const data = [
	{
		sName: '홍길동',
		sAge: 29,
		sPosi: '사원',
		sPrice: 3800000,
		sDepart: '개발팀'
	},
	{
		sName: '고길동',
		sAge: 32,
		sPosi: '주임',
		sPrice: 4200000,
		sDepart: '개발팀'
	},
	{
		sName: '김상아',
		sAge: 30,
		sPosi: '사원',
		sPrice: 3700000,
		sDepart: '개발팀'
	},
	{
		sName: '이상연',
		sAge: 27,
		sPosi: '사원',
		sPrice: 3000000,
		sDepart: '개발팀'
	},
	{
		sName: '임상영',
		sAge: 36,
		sPosi: '대리',
		sPrice: 5000000,
		sDepart: '개발팀'
	},
	{
		sName: '허성재',
		sAge: 38,
		sPosi: '과장',
		sPrice: 6200000,
		sDepart: '개발팀'
	},
	{
		sName: '이상현',
		sAge: 45,
		sPosi: '부장',
		sPrice: 7800000,
		sDepart: '개발팀'
	},
	{
		sName: '유승연',
		sAge: 29,
		sPosi: '사원',
		sPrice: 3300000,
		sDepart: '영업팀'
	},
	{
		sName: '임시환',
		sAge: 32,
		sPosi: '대리',
		sPrice: 3800000,
		sDepart: '영업팀'
	},
	{
		sName: '박재현',
		sAge: 39,
		sPosi: '과장',
		sPrice: 5100000,
		sDepart: '영업팀'
	},
	{
		sName: '임조영',
		sAge: 27,
		sPosi: '사원',
		sPrice: 3000000,
		sDepart: '지원팀'
	},
	{
		sName: '이재빈',
		sAge: 29,
		sPosi: '사원',
		sPrice: 3100000,
		sDepart: '지원팀'
	},
	{
		sName: '신재환',
		sAge: 33,
		sPosi: '대리',
		sPrice: 3800000,
		sDepart: '지원팀'
	},
	{
		sName: '박채민',
		sAge: 42,
		sPosi: '과장',
		sPrice: 5200000,
		sDepart: '지원팀'
	},
	{
		sName: '김청호',
		sAge: 28,
		sPosi: '사원',
		sPrice: 3300000,
		sDepart: '인사팀'
	},
	{
		sName: '민청하',
		sAge: 34,
		sPosi: '대리',
		sPrice: 3900000,
		sDepart: '인사팀'
	},
	{
		sName: '윤다헌',
		sAge: 39,
		sPosi: '과장',
		sPrice: 5200000,
		sDepart: '인사팀'
	},
	{
		sName: '김태연',
		sAge: 55,
		sPosi: '이사',
		sPrice: 7100000,
		sDepart: '인사팀'
	},
	{
		sName: '민대원',
		sAge: 33,
		sPosi: '대리',
		sPrice: 4000000,
		sDepart: '경영팀'
	},
	{
		sName: '류태율',
		sAge: 39,
		sPosi: '과장',
		sPrice: 5300000,
		sDepart: '경영팀'
	},
];

const options = [
  {
    sheetId: 'sheet',
    sheetEl: 'sheetDiv',
    sheetOptions: {
      Cfg: {
				SearchMode: 0,
				CustomScroll: 1
			},
			LeftCols: [
				{
					Header: 'No',
					Type: 'Int',
					Name: 'SEQ',
					Width: 80
				}
			],
			Cols: [
				{
					Header: '이름',
					Type: 'Text',
					MinWidth: 100,
					Name: 'sName'
				},
				{
					Header: '나이',
					Type: 'Int',
					MinWidth: 80,
					Name: 'sAge'
				},
				{
					Header: '직책',
					Type: 'Text',
					MinWidth: 100,
					Name: 'sPosi'
				},
				{
					Header: '월급',
					Type: 'Int',
					MinWidth: 100,
					Name: 'sPrice'
				},
				{
					Header: '부서',
					Type: 'Text',
					RelWidth: 1,
					Name: 'sDepart'
				}
			]
		},
		sheetData: data
  }
];

export { options };
