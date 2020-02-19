import { norlizeColumns } from '@U/handle'
import { AttendanceStatusEnmu, RegisteredTimeEnmu } from './enmus'

const ColumnsMaps = new Map()

ColumnsMaps.set('w1', '患者名称')
ColumnsMaps.set('w2', '就诊状态')

class Outpatient {
  static get attendanceStatus() {
    return AttendanceStatusEnmu
  }

  static get registeredTime() {
    return RegisteredTimeEnmu
  }

  static get attendanceColumns() {
    return norlizeColumns(
      ['w1', 'w2'],
      ColumnsMaps
    )
  }
}

export default Outpatient
