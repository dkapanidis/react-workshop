import React from 'react'
import { useHistory } from 'react-router-dom'

export interface Props { columns: string[], items: any[], to: string }
function Table({ columns, items, to }: Props) {
  const history = useHistory()
  const viewItem = (id: number) => {
    history.push(`${to}/${id}`)
  }

  return (
    <table className="rounded-t-md bg-gray-200 table text-left w-full">
      <thead className="table-header-group col-span-full w-full">
        <tr className="text-left">
          {columns.map(col => <th className="px-2" key={col}>{col}</th>)}
        </tr>
      </thead>
      <tbody className="bg-white">
        {items && items.map((item: any) => (
          <tr className="cursor-pointer hover:bg-gray-100" key={item.id} onClick={() => viewItem(item.id)}>
            {columns.map((column: string) => (
              <td className="px-2">{item[column]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table