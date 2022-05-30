import { IB_Preset } from '../config/common';

const data = [
	{
		'TextData': '장순연',
		'ComboData': '01',
		'ISO': 'AUD',
		'IntData': 0,
		'FloatData': 15.25,
		'DateData': '',
		'PassData': '123456',
		'RadioData': 'H:1',
		'CheckData': '1'
	},
	{
		'TextData': '김정호',
		'ComboData': '02',
		'ISO': 'ALL',
		'IntData': 0,
		'FloatData': 234,
		'DateData': '2010/01/20',
		'PassData': '75646',
		'RadioData': 'M:1',
		'CheckData': '0'
	},
	{
		'TextData': '정상호',
		'ComboData': '01',
		'ISO': 'DZD',
		'IntData': 65,
		'FloatData': 123,
		'DateData': '2002/08/15',
		'PassData': '4564',
		'RadioData': 'L:1',
		'CheckData': '1'
	},
	{
		'TextData': '안수현',
		'ComboData': '02',
		'ISO': 'ARS',
		'IntData': 190,
		'FloatData': 0,
		'DateData': '2011/05/26',
		'PassData': '123456',
		'RadioData': 'L:1',
		'CheckData': '1'
	},
	{
		'TextData': '박만우',
		'ComboData': '02',
		'ISO': 'AWG',
		'IntData': 1120,
		'FloatData': 115.25,
		'DateData': '2010/09/22',
		'PassData': '75646',
		'RadioData': 'M:1',
		'CheckData': '0'
	},
	{
		'TextData': '최호건',
		'ComboData': '01',
		'ISO': 'GBP',
		'IntData': 65,
		'FloatData': 154.36,
		'DateData': '',
		'PassData': '4564',
		'RadioData': 'H:1',
		'CheckData': '0'
	},
	{
		'TextData': '이민후',
		'ComboData': '01',
		'ISO': 'BSD',
		'IntData': 0,
		'FloatData': 0,
		'DateData': '',
		'PassData': '',
		'RadioData': 'H:1',
		'CheckData': '1'
	},
	{
		'TextData': '김호정',
		'ComboData': '02',
		'ISO': 'BHD',
		'IntData': 1120,
		'FloatData': 0,
		'DateData': '2010/09/22',
		'PassData': '75646',
		'RadioData': 'M:1',
		'CheckData': '0'
	},
	{
		'TextData': '김호수',
		'ComboData': '01',
		'ISO': 'BDT',
		'IntData': 65,
		'FloatData': 154.36,
		'DateData': '',
		'PassData': '4564',
		'RadioData': 'L:1',
		'CheckData': '1'
	},
	{
		'TextData': '오미려',
		'ComboData': '01',
		'ISO': 'BBD',
		'IntData': 190,
		'FloatData': 15.25,
		'DateData': '2011/05/26',
		'PassData': '123456',
		'RadioData': 'H:1',
		'CheckData': '1'
	},
	{
		'TextData': '차수식',
		'ComboData': '02',
		'ISO': 'BYR',
		'IntData': 1120,
		'FloatData': 115.25,
		'DateData': '2010/09/22',
		'PassData': '75646',
		'RadioData': 'L:1',
		'CheckData': '0'
	},
	{
		'TextData': '김호수',
		'ComboData': '01',
		'ISO': 'BDT',
		'IntData': 65,
		'FloatData': 154.36,
		'DateData': '',
		'PassData': '4564',
		'RadioData': 'L:1',
		'CheckData': '1'
	},
	{
		'TextData': '오미려',
		'ComboData': '01',
		'ISO': 'BBD',
		'IntData': 190,
		'FloatData': 15.25,
		'DateData': '2011/05/26',
		'PassData': '123456',
		'RadioData': 'H:1',
		'CheckData': '1'
	},
	{
		'TextData': '차수식',
		'ComboData': '02',
		'ISO': 'BYR',
		'IntData': 1120,
		'FloatData': 115.25,
		'DateData': '2010/09/22',
		'PassData': '75646',
		'RadioData': 'L:1',
		'CheckData': '0'
	},
	{
		'TextData': '김호수',
		'ComboData': '01',
		'ISO': 'BDT',
		'IntData': 65,
		'FloatData': 154.36,
		'DateData': '',
		'PassData': '4564',
		'RadioData': 'L:1',
		'CheckData': '1'
	},
	{
		'TextData': '오미려',
		'ComboData': '01',
		'ISO': 'BBD',
		'IntData': 190,
		'FloatData': 15.25,
		'DateData': '2011/05/26',
		'PassData': '123456',
		'RadioData': 'H:1',
		'CheckData': '1'
	},
	{
		'TextData': '차수식',
		'ComboData': '02',
		'ISO': 'BYR',
		'IntData': 1120,
		'FloatData': 115.25,
		'DateData': '2010/09/22',
		'PassData': '75646',
		'RadioData': 'L:1',
		'CheckData': '0'
	},
	{
		'TextData': '김호정',
		'ComboData': '02',
		'ISO': 'BHD',
		'IntData': 1120,
		'FloatData': 0,
		'DateData': '2010/09/22',
		'PassData': '75646',
		'RadioData': 'M:1',
		'CheckData': '0'
	},
	{
		'TextData': '김호수',
		'ComboData': '01',
		'ISO': 'BDT',
		'IntData': 65,
		'FloatData': 154.36,
		'DateData': '',
		'PassData': '4564',
		'RadioData': 'L:1',
		'CheckData': '1'
	},
	{
		'TextData': '맹인주',
		'ComboData': '01',
		'ISO': 'BZD',
		'IntData': 65,
		'FloatData': 154.36,
		'DateData': '',
		'PassData': '4564',
		'RadioData': 'H:1',
		'CheckData': '0'
	},
	{
		'TextData': '전명준',
		'ComboData': '01',
		'ISO': 'BMD',
		'IntData': 190,
		'FloatData': 15.25,
		'DateData': '2011/05/26',
		'PassData': '123456',
		'RadioData': 'M:1',
		'CheckData': '1'
	},
	{
		'TextData': '장순연',
		'ComboData': '01',
		'ISO': 'AUD',
		'IntData': 0,
		'FloatData': 15.25,
		'DateData': '',
		'PassData': '123456',
		'RadioData': 'H:1',
		'CheckData': '1'
	},
	{
		'TextData': '김정호',
		'ComboData': '02',
		'ISO': 'ALL',
		'IntData': 0,
		'FloatData': 234,
		'DateData': '2010/01/20',
		'PassData': '75646',
		'RadioData': 'M:1',
		'CheckData': '0'
	},
	{
		'TextData': '정상호',
		'ComboData': '01',
		'ISO': 'DZD',
		'IntData': 65,
		'FloatData': 123,
		'DateData': '2002/08/15',
		'PassData': '4564',
		'RadioData': 'L:1',
		'CheckData': '1'
	},
	{
		'TextData': '안수현',
		'ComboData': '02',
		'ISO': 'ARS',
		'IntData': 190,
		'FloatData': 0,
		'DateData': '2011/05/26',
		'PassData': '123456',
		'RadioData': 'L:1',
		'CheckData': '1'
	},
	{
		'TextData': '박만우',
		'ComboData': '02',
		'ISO': 'AWG',
		'IntData': 1120,
		'FloatData': 115.25,
		'DateData': '2010/09/22',
		'PassData': '75646',
		'RadioData': 'M:1',
		'CheckData': '0'
	},
	{
		'TextData': '최호건',
		'ComboData': '01',
		'ISO': 'GBP',
		'IntData': 65,
		'FloatData': 154.36,
		'DateData': '',
		'PassData': '4564',
		'RadioData': 'H:1',
		'CheckData': '0'
	},
	{
		'TextData': '이민후',
		'ComboData': '01',
		'ISO': 'BSD',
		'IntData': 0,
		'FloatData': 0,
		'DateData': '',
		'PassData': '',
		'RadioData': 'H:1',
		'CheckData': '1'
	},
	{
		'TextData': '김호정',
		'ComboData': '02',
		'ISO': 'BHD',
		'IntData': 1120,
		'FloatData': 0,
		'DateData': '2010/09/22',
		'PassData': '75646',
		'RadioData': 'M:1',
		'CheckData': '0'
	},
	{
		'TextData': '김호수',
		'ComboData': '01',
		'ISO': 'BDT',
		'IntData': 65,
		'FloatData': 154.36,
		'DateData': '',
		'PassData': '4564',
		'RadioData': 'L:1',
		'CheckData': '1'
	},
	{
		'TextData': '오미려',
		'ComboData': '01',
		'ISO': 'BBD',
		'IntData': 190,
		'FloatData': 15.25,
		'DateData': '2011/05/26',
		'PassData': '123456',
		'RadioData': 'H:1',
		'CheckData': '1'
	},
	{
		'TextData': '차수식',
		'ComboData': '02',
		'ISO': 'BYR',
		'IntData': 1120,
		'FloatData': 115.25,
		'DateData': '2010/09/22',
		'PassData': '75646',
		'RadioData': 'L:1',
		'CheckData': '0'
	},
	{
		'TextData': '차수식',
		'ComboData': '02',
		'ISO': 'BYR',
		'IntData': 1120,
		'FloatData': 115.25,
		'DateData': '2010/09/22',
		'PassData': '75646',
		'RadioData': 'L:1',
		'CheckData': '0'
	},
	{
		'TextData': '김호수',
		'ComboData': '01',
		'ISO': 'BDT',
		'IntData': 65,
		'FloatData': 154.36,
		'DateData': '',
		'PassData': '4564',
		'RadioData': 'L:1',
		'CheckData': '1'
	},
	{
		'TextData': '오미려',
		'ComboData': '01',
		'ISO': 'BBD',
		'IntData': 190,
		'FloatData': 15.25,
		'DateData': '2011/05/26',
		'PassData': '123456',
		'RadioData': 'H:1',
		'CheckData': '1'
	},
	{
		'TextData': '차수식',
		'ComboData': '02',
		'ISO': 'BYR',
		'IntData': 1120,
		'FloatData': 115.25,
		'DateData': '2010/09/22',
		'PassData': '75646',
		'RadioData': 'L:1',
		'CheckData': '0'
	},
	{
		'TextData': '차수식',
		'ComboData': '02',
		'ISO': 'BYR',
		'IntData': 1120,
		'FloatData': 115.25,
		'DateData': '2010/09/22',
		'PassData': '75646',
		'RadioData': 'L:1',
		'CheckData': '0'
	},
	{
		'TextData': '김호수',
		'ComboData': '01',
		'ISO': 'BDT',
		'IntData': 65,
		'FloatData': 154.36,
		'DateData': '',
		'PassData': '4564',
		'RadioData': 'L:1',
		'CheckData': '1'
	},
	{
		'TextData': '오미려',
		'ComboData': '01',
		'ISO': 'BBD',
		'IntData': 190,
		'FloatData': 15.25,
		'DateData': '2011/05/26',
		'PassData': '123456',
		'RadioData': 'H:1',
		'CheckData': '1'
	},
	{
		'TextData': '차수식',
		'ComboData': '02',
		'ISO': 'BYR',
		'IntData': 1120,
		'FloatData': 115.25,
		'DateData': '2010/09/22',
		'PassData': '75646',
		'RadioData': 'L:1',
		'CheckData': '0'
	},
	{
		'TextData': '김호정',
		'ComboData': '02',
		'ISO': 'BHD',
		'IntData': 1120,
		'FloatData': 0,
		'DateData': '2010/09/22',
		'PassData': '75646',
		'RadioData': 'M:1',
		'CheckData': '0'
	},
	{
		'TextData': '김호수',
		'ComboData': '01',
		'ISO': 'BDT',
		'IntData': 65,
		'FloatData': 154.36,
		'DateData': '',
		'PassData': '4564',
		'RadioData': 'L:1',
		'CheckData': '1'
	},
	{
		'TextData': '맹인주',
		'ComboData': '01',
		'ISO': 'BZD',
		'IntData': 65,
		'FloatData': 154.36,
		'DateData': '',
		'PassData': '4564',
		'RadioData': 'H:1',
		'CheckData': '0'
	},
	{
		'TextData': '김호수',
		'ComboData': '01',
		'ISO': 'BDT',
		'IntData': 65,
		'FloatData': 154.36,
		'DateData': '',
		'PassData': '4564',
		'RadioData': 'L:1',
		'CheckData': '1'
	},
	{
		'TextData': '오미려',
		'ComboData': '01',
		'ISO': 'BBD',
		'IntData': 190,
		'FloatData': 15.25,
		'DateData': '2011/05/26',
		'PassData': '123456',
		'RadioData': 'H:1',
		'CheckData': '1'
	},
	{
		'TextData': '차수식',
		'ComboData': '02',
		'ISO': 'BYR',
		'IntData': 1120,
		'FloatData': 115.25,
		'DateData': '2010/09/22',
		'PassData': '75646',
		'RadioData': 'L:1',
		'CheckData': '0'
	},
	{
		'TextData': '차수식',
		'ComboData': '02',
		'ISO': 'BYR',
		'IntData': 1120,
		'FloatData': 115.25,
		'DateData': '2010/09/22',
		'PassData': '75646',
		'RadioData': 'L:1',
		'CheckData': '0'
	}
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
          Type: 'Int',
          Name: 'SEQ'
        }
      ],
      Cols: [
        {
          Header: '문자열(Text)',
          Type: 'Text',
          Name: 'TextData',
          Width: 130,
          Align: 'Center',
        },
        {
          Header: '콤보(Enum)',
          Type: 'Enum',
          Name: 'ComboData',
          Width: 100,
          Align: 'Right',
          Enum: '|대기|진행중|완료',
          EnumKeys: '|01|02|03'
        },
        {
          Header: '버튼(Button)',
          Type: 'Button',
          Name: 'ISO',
          Width: 120,
          Align: 'Left',
          CanEdit: 0,
          Button: 'Button'
        },
        {
          Header: '정수(Int)',
          Type: 'Int',
          Name: 'IntData',
          Extend: IB_Preset.Integer
        },
        {
          Header: '실수(Float)',
          Type: 'Float',
          Name: 'FloatData',
          Extend: IB_Preset.Float,
        },
        {
          Header: '날짜(Date)',
          Type: 'Date',
          Name: 'DateData',
          Align: 'Center',
          Extend: IB_Preset.YMD,
        },
        {
          Header: '패스워드(Pass)',
          Type: 'Pass',
          Name: 'PassData',
          Align: 'Center',
          Width: 120
        },
        {
          Header: '라디오(Radio)',
          Type: 'Radio',
          Name: 'RadioData',
          Width: 140,
          Align: 'Center',
          CanEdit: 1,
          Enum: '|상|중|하',
          EnumKeys: '|H:1|M:1|L:1'
        },
        {
          Header: {
            Value: '체크(Bool)',
            HeaderCheck: 1
          },
          Type: 'Bool',
          Name: 'CheckData',
          Align: 'Center',
          CanEdit: 1,
          RelWidth: 1
        }
      ],
      Events: {
        onRenderFirstFinish: (evt: { sheet: { loadSearchData: (arg0: { TextData: string; ComboData: string; ISO: string; IntData: number; FloatData: number; DateData: string; PassData: string; RadioData: string; CheckData: string; }[]) => void; }; }) => {
          evt.sheet.loadSearchData(data);
        }
      }
    },
    sheetData: []
  }
];

export { options };
