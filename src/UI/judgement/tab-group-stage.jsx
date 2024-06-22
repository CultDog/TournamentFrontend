import { Tabs } from 'antd'
import TableGroupStage from './table-group-stage'
import MatchGroupStage from './matches-group-stage'

const items = [
  {
    key: '1',
    label: 'Таблица',
    children: <TableGroupStage />,
  },

  {
    key: '2',
    label: 'Матчи',
    children: <MatchGroupStage />,
  },
  {
    key: '3',
    label: 'Плей-офф',
    children: 'Content Tab3',
    disabled: true,
  },
]
export default function GroupTab(group) {
  return (
    <>
      <div
        style={{
          marginTop: 10,
        }}
      >
        Группа {group.number}
      </div>
      <Tabs className="Tabs" defaultActiveKey="1" items={items} />
    </>
  )
}
