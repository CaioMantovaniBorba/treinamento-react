import React from 'react';
import { MdDelete } from 'react-icons/md';

export default function SpecialtyItem({ item, onDelete }) {
  return (
    <>
      <li>
        {item}
        <span onClick={onDelete}><MdDelete /></span>
      </li>
    </>
  )
}