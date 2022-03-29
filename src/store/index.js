import { createStore } from 'vuex'

import Avatar from '../assets/avatar-1.jpg'

const store = createStore({
  state: {
    clients: [
      {
        id: 1,
        name: 'Client - 01',
        img: Avatar,
        work: 'Global Technologies',
        post: 'CEO',
        c_id: 'CLT-0001',
        phone: '01700112233',
        email: 'client1@gmail.com',
        birthday: '20 Jan 1990',
        address: '21/21 Airport road',
        gender: 'Male',
        projects: [
          {title: 'Office Management',
          open_task: '1',
          com_task: '9',
          text: 'Be the best, Do the best.',
          deadline: '20 mach 2020',
          img: Avatar
          },
          {title: 'Club Management',
          open_task: '2',
          com_task: '6',
          text: 'Unity is Strength',
          deadline: '20 mach 2020',
          img: Avatar
          },
          {title: 'School Management',
          open_task: '3',
          com_task: '10',
          text: 'Lorem Ipsum is simply dummy text of the printing',
          deadline: '20 mach 2020',
          img: Avatar
          },
          {title: 'Store Management',
          open_task: '6',
          com_task: '5',
          text: 'Lorem Ipsum is simply dummy text of the printing',
          deadline: '20 mach 2020',
          img: Avatar
          },
        ],
      },
      {
        id: 2,
        name: 'Client - 02',
        img: Avatar,
        work: 'Delta Infotech',
        post: 'HR',
        c_id: 'CLT-0002',
        phone: '01700114444',
        email: 'client2@gmail.com',
        birthday: '20 Feb 1990',
        address: '21/21 Nikunjo',
        gender: 'Female',
        projects: [
          {title: 'Office Management',
          open_task: '1',
          com_task: '9',
          text: 'Be the best, Do the best.',
          deadline: '20 mach 2020',
          img: Avatar
          },
          {title: 'Video Calling App',
          open_task: '3',
          com_task: '7',
          text: 'Unity is Strength',
          deadline: '20 Mar 2020',
          img: Avatar
          },
          {title: 'School Management',
          open_task: '4',
          com_task: '12',
          text: 'Lorem Ipsum is simply dummy',
          deadline: '20 April 2020',
          img: Avatar
          },
          {title: 'Store Management',
          open_task: '4',
          com_task: '2',
          text: 'Lorem Ipsum is simply dummy text of the printing',
          deadline: '20 mach 2020',
          img: Avatar
          },
        ],
      },
      {
        id: 3,
        name: 'Client - 03',
        img: Avatar,
        work: 'Global Technologies',
        post: 'HR',
        c_id: 'CLT-0003',
        phone: '01700112255',
        email: 'client3@gmail.com',
        birthday: '12 Jan 1990',
        address: '21/21 Airport road',
        gender: 'Male',
        projects: [
          {title: 'Office Management',
          open_task: '3',
          com_task: '4',
          text: 'Be the best, Do the best.',
          deadline: '10 mach 2020',
          img: Avatar
          },
          {title: 'Club Management',
          open_task: '3',
          com_task: '1',
          text: 'Unity is Strength',
          deadline: '20 Apr 2020',
          img: Avatar
          },
          {title: 'School Management',
          open_task: '2',
          com_task: '3',
          text: 'Lorem Ipsum is simply dummy text of the printing',
          deadline: '20 mach 2020',
          img: Avatar
          },
          {title: 'Store Management',
          open_task: '6',
          com_task: '5',
          text: 'Lorem Ipsum is simply dummy text of the printing',
          deadline: '20 mach 2020',
          img: Avatar
          },
        ],
      },
      {
        id: 4,
        name: 'Client - 04',
        img: Avatar,
        work: 'Global Technologies',
        post: 'GS',
        c_id: 'CLT-0004',
        phone: '01700112233',
        email: 'client4@gmail.com',
        birthday: '12 Feb 1996',
        address: '21/21 Airport road',
        gender: 'Male',
        projects: [
          {title: 'Office Management',
          open_task: '3',
          com_task: '4',
          text: 'Be the best, Do the best.',
          deadline: '20 May 2020',
          img: Avatar
          },
          {title: 'Club Management',
          open_task: '4',
          com_task: '3',
          text: 'Unity is Strength',
          deadline: '20 mach 2020',
          img: Avatar
          },
          {title: 'School Management',
          open_task: '3',
          com_task: '10',
          text: 'Lorem Ipsum is simply dummy text of the printing',
          deadline: '20 mach 2020',
          img: Avatar
          },
          {title: 'Store Management',
          open_task: '6',
          com_task: '5',
          text: 'Lorem Ipsum is simply dummy text of the printing',
          deadline: '20 mach 2020',
          img: Avatar
          },
        ],
      },
      {
        id: 5,
        name: 'Client - 05',
        img: Avatar,
        work: 'Global Technologies',
        post: 'GS',
        c_id: 'CLT-0005',
        phone: '01700119999',
        email: 'client5@gmail.com',
        birthday: '20 Dec 1990',
        address: '21/21 Airport road',
        gender: 'Male',
        projects: [
          {title: 'Hospital Administration',
          open_task: '2',
          com_task: '2',
          text: 'Be the best, Do the best.',
          deadline: '20 mach 2020',
          img: Avatar
          },
          {title: 'Club Management',
          open_task: '2',
          com_task: '6',
          text: 'Unity is Strength',
          deadline: '20 mach 2020',
          img: Avatar
          },
          {title: 'School Management',
          open_task: '3',
          com_task: '10',
          text: 'Lorem Ipsum is simply dummy text of the printing',
          deadline: '20 mach 2020',
          img: Avatar
          },
          {title: 'Store Management',
          open_task: '6',
          com_task: '5',
          text: 'Lorem Ipsum is simply dummy text of the printing',
          deadline: '20 mach 2020',
          img: Avatar
          },
        ],
      }
    ],

    employees: [
      {
        id: 1,
        name: 'Employee1',
        img: Avatar,
        work: 'Vision tec',
        e_id: 'EMP-0001',
        email: 'employee1@gmail.com',
        joining_date: '30 Dec 2021',
        role: 'Web Developer',
        salary: '$0011',
        basic_salary: '1000',
        da: '10',
        hra: '12',
        conveyance: '13',
        allowance: '14',
        medicl_allowance: '15',
        tds: '16',
        esi: '17',
        pf: '18',
        leave: '19',
        tax: '20',
        welfare: '21',
        house_rent: '75',
        other_allowance: '61',
        tax_deducted: '3',
        loan: '70',
        total_earning: ""
      },
      {
        id: 2,
        name: 'Employee2',
        img: Avatar,
        work: 'Vision tec',
        e_id: 'EMP-0002',
        email: 'employee2@gmail.com',
        joining_date: '30 Jan 2021',
        role: 'Web Developer',
        salary: '$0012',
        basic_salary: '2000',
        da: '11',
        hra: '12',
        conveyance: '14',
        allowance: '16',
        medicl_allowance: '25',
        tds: '96',
        esi: '17',
        pf: '18',
        leave: '19',
        tax: '20',
        welfare: '21',
        house_rent: '75',
        other_allowance: '61',
        tax_deducted: '3',
        loan: '70',
        total_earning: ""
      },
      {
        id: 3,
        name: 'Employee3',
        img: Avatar,
        work: 'Vision tec',
        e_id: 'EMP-0003',
        email: 'employee3@gmail.com',
        joining_date: '10 Feb 2021',
        role: 'Web Developer',
        salary: '$0013',
        basic_salary: '1003',
        da: '18',
        hra: '12',
        conveyance: '13',
        allowance: '14',
        medicl_allowance: '13',
        tds: '17',
        esi: '19',
        pf: '17',
        leave: '14',
        tax: '20',
        welfare: '21',
        house_rent: '75',
        other_allowance: '61',
        tax_deducted: '3',
        loan: '70',
        total_earning: ""
      },
      {
        id: 1,
        name: 'Employee4',
        img: Avatar,
        work: 'Vision tec',
        e_id: 'EMP-0004',
        email: 'employee4@gmail.com',
        joining_date: '15 Dec 2021',
        role: 'Web Developer',
        salary: '$0019',
        basic_salary: '1050',
        da: '10',
        hra: '22',
        conveyance: '16',
        allowance: '18',
        medicl_allowance: '15',
        tds: '16',
        esi: '17',
        pf: '18',
        leave: '19',
        tax: '20',
        welfare: '21',
        house_rent: '65',
        other_allowance: '67',
        tax_deducted: '7',
        loan: '70',
        total_earning: ""
      },
      {
        id: 5,
        name: 'Employee5',
        img: Avatar,
        work: 'Vision tec',
        e_id: 'EMP-0005',
        email: 'employee5@gmail.com',
        joining_date: '55 Oct 2021',
        role: 'Web Developer',
        salary: '$0011',
        basic_salary: '1000',
        da: '10',
        hra: '12',
        conveyance: '13',
        allowance: '14',
        medicl_allowance: '14',
        tds: '16',
        esi: '17',
        pf: '14',
        leave: '19',
        tax: '20',
        welfare: '21',
        house_rent: '75',
        other_allowance: '67',
        tax_deducted: '7',
        loan: '72',
        total_earning: ""
      },
    ],

    additions: [
      {
        id: 1,
        name: 'Leave balance amount',
        category: 'Monthly remuneration',
        u_amount: '500',
      },
      {
        id: 2,
        name: 'Arrears of salary',
        category: 'Additional remuneration',
        u_amount: '400',
      },
      {
        id: 3,
        name: 'Gratuity',
        category: 'Monthly remuneration',
        u_amount: '300',
      },
    ],
    overtimes: [
      {
        id: 1,
        name: 'Normal day',
        r_type: 'Hourly',
        rate: '10',
      },
      {
        id: 2,
        name: 'Public holiday',
        r_type: 'Hourly',
        rate: '20',
      },
      {
        id: 3,
        name: 'Rest day',
        r_type: 'Hourly',
        rate: '30',
      },
    ],
    deductions: [
      {
        id: 1,
        name: 'Absent amount',
        u_amount: '12',
      },
      {
        id: 2,
        name: 'Advance',
        u_amount: '13',
      },
      {
        id: 3,
        name: 'Unpaid leave',
        u_amount: '14',
      },
    ]
  },

  getters: {
    clients: state => {
      return state.clients;
    },
    // Clients Single Profile
    client: state => c_id => {
      return state.clients.find(client => client.c_id === c_id);
    },

    employees: state => {
      return state.employees;
    },
    // Employees Single Profile
    employee: state => e_id => {
      return state.employees.find(employee => employee.e_id === e_id);
    },

    additions: state => {
      return state.additions;
    },
    overtimes: state => {
      return state.overtimes;
    },
    deductions: state => {
      return state.deductions;
    },

    totalEarning: state => e_id => {
      return state.employees.find(employee => {
        if(employee.e_id === e_id) {
          employee.payslips.total_earning = employee.payslips.basic_salary + employee.payslips.house_rent;
          return total_earning;
        }
      });
    },
    
  },
  
  actions: {
    // Employee Details
    editEmp({commit}, payload) {
      commit("saveEmployee", payload);
    },
    deleteEmp({commit}, payload) {
      commit("removeEmployee", payload);
    },

    // Payroll items Additions
    editAdd({commit}, payload) {
      commit("saveAdd", payload);
    },
    deleteAdd({commit}, payload) {
      commit("removeAddition", payload);
    },

    // Payroll items Overtime
    editOver({commit}, payload) {
      commit("saveOver", payload);
    },

    deleteOver({commit}, payload) {
      commit("removeOvertime", payload);
    },

    // Payroll items Deduction
    editDed({commit}, payload) {
      commit("saveDed", payload);
    },

    deleteDed({commit}, payload) {
      commit("removeDeduction", payload);
    },
  },

  mutations: {
    // Employee Details
    saveEmployee(state, payload) {
      state.employees.map((employee) => {
        if(employee.id == payload.id) {
          employee.salary = payload.salary;
          employee.b_salary = payload.b_salary;
          employee.da = payload.da;
          employee.hra = payload.hra;
          employee.conveyance = payload.conveyance;
          employee.allowance = payload.allowance;
          employee.m_allowance = payload.m_allowance;
          employee.tds = payload.tds;
          employee.esi = payload.esi;
          employee.pf = payload.pf;
          employee.leave = payload.leave;
          employee.tax = payload.tax;
          employee.welfare = payload.welfare;
          
          return employee;
        }
        return employee
      })
    },
    removeEmployee: (state, payload) => {
      const index = state.employees.indexOf(payload);
      state.employees.splice(index, 1);
    },

    // Payroll items Additions
    saveAdd(state, payload) {
      state.additions.map((addition) => {
        if(addition.id == payload.id) {
          addition.name = payload.name;
          addition.category = payload.category;
          addition.u_amount = payload.u_amount;
          return addition;
        }
        return addition
      })
    },
    removeAddition: (state, payload) => {
      const index = state.additions.indexOf(payload);
      state.additions.splice(index, 1);
    },

    // Payroll items Overtime
    saveOver(state, payload) {
      state.overtimes.map((overtime) => {
        if(overtime.id == payload.id) {
          overtime.name = payload.name;
          overtime.r_type = payload.r_type;
          overtime.rate = payload.rate;
          return overtime;
        }
        return overtime
      })
    },
    removeOvertime: (state, payload) => {
      const index = state.overtimes.indexOf(payload);
      state.overtimes.splice(index, 1);
    },

    // Payroll items Deduction
    saveDed(state, payload) {
      state.deductions.map((deduction) => {
        if(deduction.id == payload.id) {
          deduction.name = payload.name;
          deduction.u_amount = payload.u_amount;
          return deduction;
        }
        return deduction
      })
    },
    removeDeduction: (state, payload) => {
      const index = state.deductions.indexOf(payload);
      state.deductions.splice(index, 1);
    }
  }
})

export default store