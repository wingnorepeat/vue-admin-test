import { norlizeColumns } from '@U/handle'
import * as e from './enmus'

const ColumnsMaps = new Map()

ColumnsMaps.set('w1', '患者名称')
ColumnsMaps.set('w2', '就诊状态')

class Outpatient {
  static get attendanceStatus() {
    return e.AttendanceStatusEnmu
  }

  static get registeredTime() {
    return e.RegisteredTimeEnmu
  }

  static get healthTeachRecipe() {
    return e.HealthTeachRecipeEnmu
  }

  static get attendanceColumns() {
    return norlizeColumns(
      ['w1', 'w2'],
      ColumnsMaps
    )
  }

  static get caseHistoryTmplType() {
    return e.CaseHistoryTmplRadio
  }
}

export default Outpatient
