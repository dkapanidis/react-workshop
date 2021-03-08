import React from 'react';

export interface NumberFieldProps {
  label: string,
  name: string,
  placeholder: string,
  description: string,
  value: number,
  onChange(name: number): void,
}

export default function NumberField({ label, name, placeholder, description, value, onChange }: NumberFieldProps) {
  return <>
    <label htmlFor={name} className="block text-sm font-medium text-gray-700">{label}</label>
    <input
      required
      name={name}
      value={value}
      type="number"
      placeholder={placeholder}
      className="w-80 mt-1 bg-gray-100 rounded-md px-2 py-1 text-sm"
      onChange={e => onChange(+e.target.value)}
    />
    <p className="mb-1 text-xs text-gray-500">{description}</p>
  </>
}