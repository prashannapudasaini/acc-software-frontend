import React, { createContext, useContext, useState } from 'react';

const HRContext = createContext();
export const useHR = () => useContext(HRContext);

export const HRProvider = ({ children }) => {
  // 1. Employee Master Database
  const [employees, setEmployees] = useState([
    { id: 'EMP-001', name: 'Sarita Shakya', role: 'HR Manager', dept: 'Human Resources', salary: 85000, status: 'Active', joinDate: '2023-01-15' },
    { id: 'EMP-002', name: 'Ramesh Thapa', role: 'Software Engineer', dept: 'Engineering', salary: 120000, status: 'Active', joinDate: '2024-03-01' },
    { id: 'EMP-003', name: 'Bikash Tamang', role: 'Sales Executive', dept: 'Sales', salary: 65000, status: 'Active', joinDate: '2025-11-10' },
  ]);

  // 2. Attendance & Leave Records
  const [attendance, setAttendance] = useState([
    { id: 1, date: '2026-06-29', present: 140, absent: 2, onLeave: 0 }
  ]);
  
  const [leaves, setLeaves] = useState([
    { id: 'LV-001', empId: 'EMP-002', name: 'Ramesh Thapa', type: 'Annual', days: 3, status: 'Pending', date: '2026-07-10' }
  ]);

  // 3. Payroll Ledgers
  const [payslips, setPayslips] = useState([]);

  // Actions
  const addEmployee = (employeeData) => {
    const newId = `EMP-${String(employees.length + 1).padStart(3, '0')}`;
    setEmployees([{ ...employeeData, id: newId, status: 'Active' }, ...employees]);
  };

  const approveLeave = (leaveId) => {
    setLeaves(leaves.map(l => l.id === leaveId ? { ...l, status: 'Approved' } : l));
  };

  const generatePayroll = (month, year) => {
    // Prevent duplicate payroll runs
    if (payslips.some(p => p.month === month && p.year === year)) {
      throw new Error(`Payroll for ${month} ${year} has already been processed.`);
    }

    const newPayslips = employees.map(emp => {
      // Standard deductions (e.g., 1% SSF, 10% standard tax estimate for demo)
      const taxDeduction = emp.salary * 0.10;
      const ssfDeduction = emp.salary * 0.01;
      const netPay = emp.salary - taxDeduction - ssfDeduction;

      return {
        id: `PS-${year}${month}-${emp.id}`,
        empId: emp.id,
        name: emp.name,
        month,
        year,
        baseSalary: emp.salary,
        deductions: taxDeduction + ssfDeduction,
        netPay: netPay,
        status: 'Processed'
      };
    });

    setPayslips([...newPayslips, ...payslips]);
    return newPayslips;
  };

  return (
    <HRContext.Provider value={{ 
      employees, addEmployee, 
      attendance, 
      leaves, approveLeave, 
      payslips, generatePayroll 
    }}>
      {children}
    </HRContext.Provider>
  );
};