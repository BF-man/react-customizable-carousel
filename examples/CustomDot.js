import React from 'react'
import FaEmpire from 'react-icons/lib/fa/empire'

export const CustomDot = ({ current }) => <span style={current ? { color: 'red' } : {}}><FaEmpire /></span>
