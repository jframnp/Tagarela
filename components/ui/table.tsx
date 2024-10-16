// components/ui/table.tsx
import React from 'react'

interface TableProps extends React.TableHTMLAttributes<HTMLTableElement> {}

export function Table({ children, className, ...props }: TableProps) {
  return (
    <div className="w-full overflow-x-auto">
      <table className={`min-w-full bg-white border border-gray-200 ${className}`} {...props}>
        {children}
      </table>
    </div>
  )
}


export function TableHeader({ children }: { children: React.ReactNode }) {
  return <thead className="bg-gray-100 border-b border-gray-200">{children}</thead>
}

export function TableBody({ children }: { children: React.ReactNode }) {
  return <tbody>{children}</tbody>
}

export function TableRow({ children }: { children: React.ReactNode }) {
  return <tr className="border-b border-gray-200">{children}</tr>
}

export function TableHead({ children }: { children: React.ReactNode }) {
  return <th className="px-4 py-2 text-left text-gray-600 font-semibold">{children}</th>
}

export function TableCell({ children }: { children: React.ReactNode }) {
  return <td className="px-4 py-2">{children}</td>
}
