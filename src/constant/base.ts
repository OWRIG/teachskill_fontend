const sessionList=[2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022].reverse()
export const SessionItems=sessionList.map(item => ({ label: String(item), value: item }))

export const SubjectList=[
  {label: '语文', value: 'chinese'},
  {label: '数学', value: 'math'},
  {label: '外语', value: 'foreign'},
  {label: '政治', value: 'politics'},
  {label: '历史', value: 'history'},
  {label: '地理', value: 'geography'},
  {label: '生物', value: 'biology'},
  {label: '信息', value: 'information'},
]
