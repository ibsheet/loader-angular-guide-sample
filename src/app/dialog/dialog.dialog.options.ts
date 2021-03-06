const data = [
	{
		sArea: '서울시 강서구',
		sTheater: 20,
		sScreen: 100,
		sSeat: 20000,
		sNormal: 21,
		sDigital2: 103,
		sDigital3: 50,
		sDigital4: 3,
		sDigitalImax: 3
	},
	{
		sArea: '서울시 양천구',
		sTheater: 10,
		sScreen: 50,
		sSeat: 10000,
		sNormal: 10,
		sDigital2: 51,
		sDigital3: 24,
		sDigital4: 2,
		sDigitalImax: 2
	},
	{
		sArea: '서울시 구로구',
		sTheater: 4,
		sScreen: 25,
		sSeat: 5000,
		sNormal: 5,
		sDigital2: 27,
		sDigital3: 22,
		sDigital4: 2,
		sDigitalImax: 2
	},
	{
		sArea: '서울시 은평구',
		sTheater: 5,
		sScreen: 25,
		sSeat: 5010,
		sNormal: 82,
		sDigital2: 28,
		sDigital3: 23,
		sDigital4: 2,
		sDigitalImax: 2
	},
	{
		sArea: '서울시 서대문구',
		sTheater: 10,
		sScreen: 50,
		sSeat: 10040,
		sNormal: 160,
		sDigital2: 56,
		sDigital3: 46,
		sDigital4: 4,
		sDigitalImax: 4
	},
	{
		sArea: '서울시 마포구',
		sTheater: 10,
		sScreen: 50,
		sSeat: 10340,
		sNormal: 170,
		sDigital2: 60,
		sDigital3: 30,
		sDigital4: 5,
		sDigitalImax: 4
	},
	{
		sArea: '서울시 영등포구',
		sTheater: 3,
		sScreen: 20,
		sSeat: 4000,
		sNormal: 40,
		sDigital2: 50,
		sDigital3: 10,
		sDigital4: 15,
		sDigitalImax: 4
	},
	{
		sArea: '서울시 금천구',
		sTheater: 3,
		sScreen: 52,
		sSeat: 3500,
		sNormal: 35,
		sDigital2: 40,
		sDigital3: 10,
		sDigital4: 5,
		sDigitalImax: 4
	},
	{
		sArea: '서울시 용산구',
		sTheater: 3,
		sScreen: 51,
		sSeat: 4000,
		sNormal: 25,
		sDigital2: 30,
		sDigital3: 10,
		sDigital4: 3,
		sDigitalImax: 1
	},
	{
		sArea: '서울시 동작구',
		sTheater: 5,
		sScreen: 45,
		sSeat: 3000,
		sNormal: 25,
		sDigital2: 15,
		sDigital3: 10,
		sDigital4: 1,
		sDigitalImax: 1
	},
	{
		sArea: '서울시 관악구',
		sTheater: 7,
		sScreen: 60,
		sSeat: 5000,
		sNormal: 20,
		sDigital2: 11,
		sDigital3: 11,
		sDigital4: 1,
		sDigitalImax: 1
	},
	{
		sArea: '서울시 종로구',
		sTheater: 4,
		sScreen: 60,
		sSeat: 5000,
		sNormal: 20,
		sDigital2: 11,
		sDigital3: 1,
		sDigital4: 1,
		sDigitalImax: 1
	},
	{
		sArea: '서울시 중구',
		sTheater: 4,
		sScreen: 30,
		sSeat: 4555,
		sNormal: 35,
		sDigital2: 25,
		sDigital3: 7,
		sDigital4: 7,
		sDigitalImax: 1
	},
	{
		sArea: '서울시 서초구',
		sTheater: 6,
		sScreen: 45,
		sSeat: 5000,
		sNormal: 50,
		sDigital2: 30,
		sDigital3: 20,
		sDigital4: 4,
		sDigitalImax: 4
	},
	{
		sArea: '서울시 강남구',
		sTheater: 6,
		sScreen: 45,
		sSeat: 5554,
		sNormal: 50,
		sDigital2: 30,
		sDigital3: 20,
		sDigital4: 4,
		sDigitalImax: 4
	},
	{
		sArea: '서울시 송파구',
		sTheater: 6,
		sScreen: 42,
		sSeat: 4441,
		sNormal: 55,
		sDigital2: 14,
		sDigital3: 11,
		sDigital4: 3,
		sDigitalImax: 4
	},
	{
		sArea: '서울시 노원구',
		sTheater: 6,
		sScreen: 51,
		sSeat: 6570,
		sNormal: 50,
		sDigital2: 16,
		sDigital3: 14,
		sDigital4: 3,
		sDigitalImax: 4
	},
	{
		sArea: '서울시 동대문구',
		sTheater: 2,
		sScreen: 30,
		sSeat: 2850,
		sNormal: 25,
		sDigital2: 10,
		sDigital3: 5,
		sDigital4: 1,
		sDigitalImax: 1
	},
	{
		sArea: '서울시 성북구',
		sTheater: 3,
		sScreen: 40,
		sSeat: 3500,
		sNormal: 24,
		sDigital2: 10,
		sDigital3: 4,
		sDigital4: 2,
		sDigitalImax: 1
	},
	{
		sArea: '경기도',
		sTheater: 96,
		sScreen: 570,
		sSeat: 89065,
		sNormal: 26,
		sDigital2: 545,
		sDigital3: 191,
		sDigital4: 8,
		sDigitalImax: 4
	},
	{
		sArea: '강원도',
		sTheater: 15,
		sScreen: 76,
		sSeat: 12103,
		sNormal: 6,
		sDigital2: 71,
		sDigital3: 26,
		sDigital4: 0,
		sDigitalImax: 1
	},
	{
		sArea: '충청북도',
		sTheater: 11,
		sScreen: 84,
		sSeat: 14641,
		sNormal: 13,
		sDigital2: 80,
		sDigital3: 23,
		sDigital4: 1,
		sDigitalImax: 0
	},
	{
		sArea: '충청남도',
		sTheater: 19,
		sScreen: 102,
		sSeat: 13798,
		sNormal: 4,
		sDigital2: 92,
		sDigital3: 42,
		sDigital4: 1,
		sDigitalImax: 0
	},
	{
		sArea: '경상북도',
		sTheater: 19,
		sScreen: 100,
		sSeat: 16053,
		sNormal: 7,
		sDigital2: 85,
		sDigital3: 20,
		sDigital4: 0,
		sDigitalImax: 0
	},
	{
		sArea: '경상남도',
		sTheater: 25,
		sScreen: 141,
		sSeat: 23387,
		sNormal: 2,
		sDigital2: 129,
		sDigital3: 49,
		sDigital4: 2,
		sDigitalImax: 1
	},
	{
		sArea: '전라북도',
		sTheater: 23,
		sScreen: 107,
		sSeat: 15746,
		sNormal: 7,
		sDigital2: 104,
		sDigital3: 41,
		sDigital4: 1,
		sDigitalImax: 1
	},
	{
		sArea: '전라남도',
		sTheater: 13,
		sScreen: 74,
		sSeat: 10365,
		sNormal: 2,
		sDigital2: 73,
		sDigital3: 26,
		sDigital4: 0,
		sDigitalImax: 0
	},
	{
		sArea: '제주도',
		sTheater: 6,
		sScreen: 33,
		sSeat: 4468,
		sNormal: 1,
		sDigital2: 33,
		sDigital3: 9,
		sDigital4: 0,
		sDigitalImax: 0
	},
	{
		sArea: '부산시',
		sTheater: 31,
		sScreen: 197,
		sSeat: 37883,
		sNormal: 35,
		sDigital2: 189,
		sDigital3: 76,
		sDigital4: 3,
		sDigitalImax: 1
	},
	{
		sArea: '대구시',
		sTheater: 24,
		sScreen: 133,
		sSeat: 21465,
		sNormal: 7,
		sDigital2: 132,
		sDigital3: 55,
		sDigital4: 1,
		sDigitalImax: 1
	},
	{
		sArea: '대전시',
		sTheater: 12,
		sScreen: 73,
		sSeat: 13257,
		sNormal: 4,
		sDigital2: 73,
		sDigital3: 26,
		sDigital4: 2,
		sDigitalImax: 1
	},
	{
		sArea: '울산시',
		sTheater: 7,
		sScreen: 42,
		sSeat: 7727,
		sNormal: 8,
		sDigital2: 40,
		sDigital3: 17,
		sDigital4: 2,
		sDigitalImax: 1
	},
	{
		sArea: '인천시',
		sTheater: 22,
		sScreen: 133,
		sSeat: 21673,
		sNormal: 10,
		sDigital2: 119,
		sDigital3: 43,
		sDigital4: 1,
		sDigitalImax: 1
	},
	{
		sArea: '광주시',
		sTheater: 16,
		sScreen: 111,
		sSeat: 18893,
		sNormal: 9,
		sDigital2: 110,
		sDigital3: 34,
		sDigital4: 2,
		sDigitalImax: 1
	},
	{
		sArea: '세종시',
		sTheater: 3,
		sScreen: 14,
		sSeat: 1963,
		sNormal: 0,
		sDigital2: 14,
		sDigital3: 4,
		sDigital4: 0,
		sDigitalImax: 0
	}
];

const dialogoptions = [
  {
    sheetId: 'dialogSheet',
    sheetEl: 'dialogDiv',
    sheetOptions: {
      Def: {
				Row: {
					CanFormula: 1,
					CalcOrder: 'sTheaterColor,sSeatColor,sNormalColor,sDigital2Color,sDigital4TextColor,sDigital4Color,sNote'
				}
			},
			Cfg: {
				SearchMode: 0,
				CustomScroll: 1
			},
			LeftCols: [
				{
					Header: 'No',
					Type: 'Int',
					Name: 'SEQ'
				}
			],
			Cols: [
				{
					Header: '지역',
					Name: 'sArea',
					Type: 'Text',
					Align: 'Center',
					Width: 150
				},
				{
					Header: '영화상영관수',
					Name: 'sTheater',
					Type: 'Int',
					ColorFormula: 'Value < 10 ? \'Green\' : \'\'',
					Width: 100
				},
				{
					Header: '스크린수',
					Name: 'sScreen',
					Type: 'Int',
					Width: 100
				},
				{
					Header: '좌석수',
					Name: 'sSeat',
					Type: 'Int',
					ColorFormula: 'Value > 5000 ? \'Gray\' : \'\'',
					Width: 150
				},
				{
					Header: '일반',
					Name: 'sNormal',
					Type: 'Int',
					ColorFormula: 'Value > 10 ? \'Purple\' : \'\'',
					Width: 100
				},
				{
					Header: 'Digital 2D',
					Name: 'sDigital2',
					Type: 'Int',
					ColorFormula: 'Value > 100 ? \'Red\' : \'\'',
					Width: 100
				},
				{
					Header: 'Digital 3D',
					Name: 'sDigital3',
					Type: 'Int',
					Width: 100
				},
				{
					Header: 'Digital 4D',
					Name: 'sDigital4',
					Type: 'Int',
					ColorFormula: 'Value > 1 ? \'Black\' : \'\'',
					TextColorFormula: 'Value > 1 ? \'Yellow\' : \'\'',
					Width: 100
				},
				{
					Header: 'Digital IMAX',
					Name: 'sDigitalImax',
					Type: 'Int',
					Width: 100
				},
				{
					Header: '전체 합계',
					Name: 'sNote',
					Type: 'Text',
					RelWidth: 1,
					Formula: (fr: { Row: { sTheater: any; sScreen: any; sSeat: any; sNormal: any; sDigital2: any; sDigital3: any; sDigital4: any; sDigitalImax: any; }; }) => fr.Row.sTheater + fr.Row.sScreen + fr.Row.sSeat + fr.Row.sNormal + fr.Row.sDigital2 + fr.Row.sDigital3 + fr.Row.sDigital4 + fr.Row.sDigitalImax
				}
			],
			Events: {
				onRenderFirstFinish: (evt: { sheet: { loadSearchData: (arg0: { sArea: string; sTheater: number; sScreen: number; sSeat: number; sNormal: number; sDigital2: number; sDigital3: number; sDigital4: number; sDigitalImax: number; }[]) => void; }; }) => {
					evt.sheet.loadSearchData(data);
				}
			}
		},
    sheetData: []
  }
];

export { dialogoptions };
