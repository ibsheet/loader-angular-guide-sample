const data = [
	{
		Sol: '솔루션팀',
		Y202101: '',
		Y202102: '',
		Y202103: '',
		Y202104: '',
		Y202105: '',
		Items: [
			{
				Sol: '개발팀',
				Y202101: 100,
				Y202102: 95,
				Y202103: 78,
				Y202104: 80,
				Y202105: 89,
				Items: [
					{
						Sol: '제품개발팀',
						Y202101: 75,
						Y202102: 92,
						Y202103: 88,
						Y202104: 94,
						Y202105: 98,
						Items: [
							{
								Sol: '화면개발팀',
								Y202101: 80,
								Y202102: 81,
								Y202103: 72,
								Y202104: 67,
								Y202105: 55,
							},
							{
								Sol: '디비개발팀',
								Y202101: 67,
								Y202102: 77,
								Y202103: 55,
								Y202104: 99,
								Y202105: 100,
							},
							{
								Sol: '디자인팀',
								Y202101: 85,
								Y202102: 99,
								Y202103: 94,
								Y202104: 92,
								Y202105: 75,
							},
						]
					},
					{
						Sol: '신제품개발팀',
						Y202101: 80,
						Y202102: 91,
						Y202103: 84,
						Y202104: 92,
						Y202105: 91,
						Items: [
							{
								Sol: '화면개발팀',
								Y202101: 80,
								Y202102: 77,
								Y202103: 11,
								Y202104: 67,
								Y202105: 70,
							},
							{
								Sol: '디비개발팀',
								Y202101: 67,
								Y202102: 75,
								Y202103: 55,
								Y202104: 70,
								Y202105: 80,
							},
							{
								Sol: '디자인팀',
								Y202101: 85,
								Y202102: 99,
								Y202103: 94,
								Y202104: 92,
								Y202105: 74,
							}
						]
					},
				]
			},
			{
				Sol: '지원팀',
				Y202101: 94,
				Y202102: 91,
				Y202103: 89,
				Y202104: 75,
				Y202105: 86,
				Items: [
					{
						Sol: '기술지원1팀',
							Y202101: 88,
							Y202102: 87,
							Y202103: 82,
							Y202104: 81,
							Y202105: 80,
					},
					{
						Sol: '기술지원2팀',
							Y202101: 92,
							Y202102: 91,
							Y202103: 11,
							Y202104: 81,
							Y202105: 80,
					},
					{
						Sol: '개발지원1팀',
							Y202101: 35,
							Y202102: 70,
							Y202103: 43,
							Y202104: 74,
							Y202105: 78,
					},
					{
						Sol: '개발지원2팀',
							Y202101: 66,
							Y202102: 72,
							Y202103: 91,
							Y202104: 60,
							Y202105: 71,
					},
					{
						Sol: '개발지원3팀',
							Y202101: 55,
							Y202102: 71,
							Y202103: 88,
							Y202104: 70,
							Y202105: 76,
					},
				]
			},
			{
				Sol: '영업팀',
				Y202101: 50,
				Y202102: 91,
				Y202103: 78,
				Y202104: 68,
				Y202105: 99,
			},
			{
				Sol: '테스트팀1',
				Y202101: 70,
				Y202102: 70,
				Y202103: 71,
				Y202104: 73,
				Y202105: 67,
			},
			{
				Sol: '테스트팀2',
				Y202101: 68,
				Y202102: 61,
				Y202103: 72,
				Y202104: 80,
				Y202105: 99,
			},
			{
				Sol: '테스트팀3',
				Y202101: 49,
				Y202102: 89,
				Y202103: 74,
				Y202104: 66,
				Y202105: 99,
			},
			{
				Sol: '기획팀',
				Y202101: 88,
				Y202102: 87,
				Y202103: 75,
				Y202104: 45,
				Y202105: 98,
				Items: [
					{
						Sol: '개발기획1팀',
						Y202101: 75,
						Y202102: 52,
						Y202103: 35,
						Y202104: 45,
						Y202105: 15,
					},
					{
						Sol: '개발기획2팀',
						Y202101: 72,
						Y202102: 68,
						Y202103: 45,
						Y202104: 60,
						Y202105: 35,
					},
					{
						Sol: '개발기획3팀',
						Y202101: 70,
						Y202102: 61,
						Y202103: 40,
						Y202104: 50,
						Y202105: 20,
					},
					{
						Sol: '개발기획4팀',
						Y202101: 88,
						Y202102: 78,
						Y202103: 65,
						Y202104: 64,
						Y202105: 50,
					},
					{
						Sol: '개발기획5팀',
						Y202101: 88,
						Y202102: 78,
						Y202103: 65,
						Y202104: 64,
						Y202105: 50,
					},
					{
						Sol: '개발기획6팀',
						Y202101: 88,
						Y202102: 89,
						Y202103: 77,
						Y202104: 22,
						Y202105: 11,
					},
				]
			}
		]
	}
];

const options = [
  {
    sheetId: 'sheet',
    sheetEl: 'sheetDiv',
    sheetOptions: {
      Cfg: {
				SearchMode: 0,
				HeaderMerge: 3,
				CustomScroll: 1,
				MainCol: 'Sol'
			},
			LeftCols: [
				{
					Type: 'Int',
					Width: 50,
					Align: 'Center',
					Name: 'SEQ'
				}
			],
			Cols: [
				{
					Header: '솔루션 팀',
					Type: 'Text',
					Name: 'Sol',
					MinWidth: '200',
					Align: 'Left',
					RelWidth: 1,
				},
				{
					Header: '2021/1',
					Type: 'Int',
					Name: 'Y202101',
					Width: '80',
					Align: 'Right',
					FormulaRow: 'Sum',
					RelWidth: 1,
					CanEdit: 0
				},
				{
					Header: '2021/2',
					Type: 'Int',
					Name: 'Y202102',
					Width: '80',
					Align: 'Right',
					FormulaRow: 'Sum',
					RelWidth: 1,
					CanEdit: 0
				},
				{
					Header: '2021/3',
					Type: 'Int',
					Name: 'Y202103',
					Width: '80',
					Align: 'Right',
					FormulaRow: 'Sum',
					RelWidth: 1,
					CanEdit: 0
				},
				{
					Header: '2021/4',
					Type: 'Int',
					Name: 'Y202104',
					Width: '80',
					Align: 'Right',
					FormulaRow: 'Sum',
					RelWidth: 1,
					CanEdit: 0
				},
				{
					Header: '2021/5',
					Type: 'Int',
					Name: 'Y202105',
					Width: '80',
					Align: 'Right',
					FormulaRow: 'Sum',
					RelWidth: 1,
					CanEdit: 0
				}
			],
      Events: {
        onRenderFirstFinish: (evt: { sheet: { loadSearchData: (arg0: { Sol: string; Y202101: string; Y202102: string; Y202103: string; Y202104: string; Y202105: string; Items: ({ Sol: string; Y202101: number; Y202102: number; Y202103: number; Y202104: number; Y202105: number; Items: { Sol: string; Y202101: number; Y202102: number; Y202103: number; Y202104: number; Y202105: number; Items: { Sol: string; Y202101: number; Y202102: number; Y202103: number; Y202104: number; Y202105: number; }[]; }[]; } | { Sol: string; Y202101: number; Y202102: number; Y202103: number; Y202104: number; Y202105: number; Items: { Sol: string; Y202101: number; Y202102: number; Y202103: number; Y202104: number; Y202105: number; }[]; } | { Sol: string; Y202101: number; Y202102: number; Y202103: number; Y202104: number; Y202105: number; Items?: undefined; })[]; }[]) => void; }; }) => {
          evt.sheet.loadSearchData(data);
        }
      }
    },
    sheetData: []
  }
];

export { options };
