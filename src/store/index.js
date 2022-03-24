import { createStore } from 'vuex'

import Avatar from '../assets/avatar-1.jpg'

const store = createStore({
  state: {
    employees: [
      {
        id: 1,
        name: 'Mahmud1',
        img: Avatar,
        work: 'Arun Prater Torun Dol',
        e_id: 'CLT-0001',
        email: 'mahmud@gmail.com',
        j_date: '30 Dec 2021',
        salary: '$0000',
        b_salary: '1000',
        da: '10',
        hra: '12',
        conveyance: '13',
        allowance: '14',
        m_allowance: '15',
        tds: '16',
        esi: '17',
        pf: '18',
        leave: '19',
        tax: '20',
        welfare: '21',
        payslips: [
          {
            basic_salary: '2000',
            house_rent: '75',
            conveyance: '65',
            other_allowance: '61',
            tax_deducted: '3',
            provident_fund: '5',
            esi: '8',
            loan: '70',
            total_earning: ""
          }
        ]
      },
      {
        id: 2,
        name: 'Mahmud2',
        img: Avatar,
        work: 'Arun Prater Torun Dol',
        e_id: 'CLT-0002',
        email: 'mahmud@gmail.com',
        j_date: '30 Dec 2021',
        salary: '$0000',
        b_salary: '1000',
        da: '10',
        hra: '12',
        conveyance: '13',
        allowance: '14',
        m_allowance: '15',
        tds: '16',
        esi: '17',
        pf: '18',
        leave: '19',
        tax: '20',
        welfare: '21',
        payslips: [
          {
            basic_salary: '3000',
            house_rent: '35',
            conveyance: '25',
            other_allowance: '69',
            tax_deducted: '7',
            provident_fund: '4',
            esi: '5',
            loan: '80',
            total_earning: ""
          }
        ]
      },
      {
        id: 3,
        name: 'Mahmud3',
        img: Avatar,
        work: 'Arun Prater Torun Dol',
        e_id: 'CLT-0003',
        email: 'mahmud@gmail.com',
        j_date: '30 Dec 2021',
        salary: '$0000',
        b_salary: '1000',
        da: '10',
        hra: '12',
        conveyance: '13',
        allowance: '14',
        m_allowance: '15',
        tds: '16',
        esi: '17',
        pf: '18',
        leave: '19',
        tax: '20',
        welfare: '21',
        payslips: [
          {
            basic_salary: '5000',
            house_rent: '57',
            conveyance: '47',
            other_allowance: '46',
            tax_deducted: '7',
            provident_fund: '3',
            esi: '9',
            loan: '20',
            total_earning: ""
          }
        ]
      }
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
    ],


    employees_temp: [
      {
        id: 1,
        name: 'Mahmud1',
        img: Avatar,
        work: 'Arun Prater Torun Dol',
        post: 'GS',
        e_id: 'CLT-0001',
        phone: '01700112233',
        email: 'mahmud@gmail.com',
        birthday: '21 September',
        address: '21/21 Airport road',
        gender: 'Male',
        j_date: '30 Dec 2021',
        role: 'Web Developer',
        salary: '$0000',
        projects: [
          {title: 'Office Management',
          open_task: '1',
          com_task: '9',
          text: 'lakjdshfalsdjfh',
          deadline: '20 mach 2020',
          leader: 'me',
          team: 'we',
          img: Avatar
          },
          {title: 'Club Management',
          open_task: '2',
          com_task: '6',
          text: 'Unity is Strength',
          deadline: '20 mach 2020',
          leader: 'me',
          team: 'we',
          img: Avatar
          },
          {title: 'School Management',
          open_task: '3',
          com_task: '10',
          text: 'lakjdshfalsdjfh',
          deadline: '20 mach 2020',
          leader: 'me',
          team: 'we',
          img: Avatar
          },
          {title: 'Store Management',
          open_task: '6',
          com_task: '5',
          text: 'lakjdshfalsdjfh',
          deadline: '20 mach 2020',
          leader: 'me',
          team: 'we',
          img: Avatar
          },
        ],
        payslips: [
          {
            basic_salary: '5000',
            house_rent: '55',
            conveyance: '55',
            other_allowance: '66',
            tax_deducted: '2',
            provident_fund: '1',
            esi: '2',
            loan: '50'
          }
        ]
      },
      {
        id: 2,
        name: 'Mahmud2',
        img: Avatar,
        work: 'Arun Prater Torun Dol',
        post: 'GS',
        e_id: 'CLT-0002',
        phone: '01711225544',
        email: 'mahmud@gmail.com',
        birthday: '17 September',
        address: '21/21 Airport road',
        gender: 'Male',
        j_date: '03 Jan 2021',
        role: 'Web Designer',
        salary: '$0000',
        projects: [
          {title: 'Office Management',
          open_task: '3',
          com_task: '7',
          text: 'Unity is Strength',
          deadline: '20 mach 2020',
          leader: 'me',
          team: 'we',
          img: Avatar
          },
          {title: 'Club Management',
          open_task: '1',
          com_task: '5',
          text: 'lakjdshfalsdjfh',
          deadline: '20 mach 2020',
          leader: 'me',
          team: 'we',
          img: Avatar
          },
          {title: 'School Management',
          open_task: '3',
          com_task: '10',
          text: 'lakjdshfalsdjfh',
          deadline: '20 mach 2020',
          leader: 'me',
          team: 'we',
          img: Avatar
          },
          {title: 'Store Management',
          open_task: '6',
          com_task: '5',
          text: 'lakjdshfalsdjfh',
          deadline: '20 mach 2020',
          leader: 'me',
          team: 'we',
          img: Avatar
          },
        ],
        payslips: [
          {
            basic_salary: '4000',
            house_rent: '75',
            conveyance: '35',
            other_allowance: '96',
            tax_deducted: '8',
            provident_fund: '2',
            esi: '6',
            loan: '30'
          }
        ]
      },
      {
        id: 3,
        name: 'Mahmud3',
        img: Avatar,
        work: 'Arun Prater Torun Dol',
        post: 'GS',
        e_id: 'CLT-0003',
        phone: '01700112233',
        email: 'mahmud@gmail.com',
        birthday: '21 September',
        address: '21/21 Airport road',
        gender: 'Male',
        j_date: '10 Dec 2000',
        role: 'Web Developer',
        salary: '$0000',
        projects: [
          {title: 'Office Management',
          open_task: '1',
          com_task: '9',
          text: 'lakjdshfalsdjfh',
          deadline: '20 mach 2020',
          leader: 'me',
          team: 'we',
          img: Avatar
          },
          {title: 'Club Management',
          open_task: '2',
          com_task: '6',
          text: 'lakjdshfalsdjfh',
          deadline: '20 mach 2020',
          leader: 'me',
          team: 'we',
          img: Avatar
          },
          {title: 'School Management',
          open_task: '3',
          com_task: '10',
          text: 'lakjdshfalsdjfh',
          deadline: '20 mach 2020',
          leader: 'me',
          team: 'we',
          img: Avatar
          },
          {title: 'Store Management',
          open_task: '6',
          com_task: '5',
          text: 'lakjdshfalsdjfh',
          deadline: '20 mach 2020',
          leader: 'me',
          team: 'we',
          img: Avatar
          },
        ]
      },
      {
        id: 4,
        name: 'Mahmud4',
        img: Avatar,
        work: 'Arun Prater Torun Dol',
        post: 'GS',
        e_id: 'CLT-0004',
        phone: '01700112233',
        email: 'mahmud@gmail.com',
        birthday: '21 September',
        address: '21/21 Airport road',
        gender: 'Male',
        j_date: '15 Dec 2021',
        role: 'IOS Developer',
        salary: '$0000',
        projects: [
          {title: 'Office Management',
          open_task: '1',
          com_task: '9',
          text: 'lakjdshfalsdjfh',
          deadline: '20 mach 2020',
          leader: 'me',
          team: 'we',
          img: Avatar
          },
          {title: 'Club Management',
          open_task: '2',
          com_task: '6',
          text: 'lakjdshfalsdjfh',
          deadline: '20 mach 2020',
          leader: 'me',
          team: 'we',
          img: Avatar
          },
          {title: 'School Management',
          open_task: '3',
          com_task: '10',
          text: 'lakjdshfalsdjfh',
          deadline: '20 mach 2020',
          leader: 'me',
          team: 'we',
          img: Avatar
          },
          {title: 'Store Management',
          open_task: '6',
          com_task: '5',
          text: 'lakjdshfalsdjfh',
          deadline: '20 mach 2020',
          leader: 'me',
          team: 'we',
          img: Avatar
          },
        ]
      },
      {
        id: 5,
        name: 'Mahmud5',
        img: Avatar,
        work: 'Arun Prater Torun Dol',
        post: 'GS',
        e_id: 'CLT-0005',
        phone: '01700112233',
        email: 'mahmud@gmail.com',
        birthday: '21 September',
        address: '21/21 Airport road',
        gender: 'Male',
        j_date: '05 Dec 2021',
        role: 'Web Developer',
        salary: '$0000',
        projects: [
          {title: 'Office Management',
          open_task: '1',
          com_task: '9',
          text: 'lakjdshfalsdjfh',
          deadline: '20 mach 2020',
          leader: 'me',
          team: 'we',
          img: Avatar
          },
          {title: 'Club Management',
          open_task: '2',
          com_task: '6',
          text: 'lakjdshfalsdjfh',
          deadline: '20 mach 2020',
          leader: 'me',
          team: 'we',
          img: Avatar
          },
          {title: 'School Management',
          open_task: '3',
          com_task: '10',
          text: 'lakjdshfalsdjfh',
          deadline: '20 mach 2020',
          leader: 'me',
          team: 'we',
          img: Avatar
          },
          {title: 'Store Management',
          open_task: '6',
          com_task: '5',
          text: 'lakjdshfalsdjfh',
          deadline: '20 mach 2020',
          leader: 'me',
          team: 'we',
          img: Avatar
          },
        ]
      },
      {
        id: 6,
        name: 'Mahmud6',
        img: Avatar,
        work: 'Arun Prater Torun Dol',
        post: 'GS',
        e_id: 'CLT-0006',
        phone: '01700112233',
        email: 'mahmud@gmail.com',
        birthday: '21 September',
        address: '21/21 Airport road',
        gender: 'Male',
        j_date: '30 Jan 2021',
        role: 'Web Developer',
        salary: '$0000',
        projects: [
          {title: 'Office Management',
          open_task: '1',
          com_task: '9',
          text: 'lakjdshfalsdjfh',
          deadline: '20 mach 2020',
          leader: 'me',
          team: 'we',
          img: Avatar
          },
          {title: 'Club Management',
          open_task: '2',
          com_task: '6',
          text: 'lakjdshfalsdjfh',
          deadline: '20 mach 2020',
          leader: 'me',
          team: 'we',
          img: Avatar
          },
          {title: 'School Management',
          open_task: '3',
          com_task: '10',
          text: 'lakjdshfalsdjfh',
          deadline: '20 mach 2020',
          leader: 'me',
          team: 'we',
          img: Avatar
          },
          {title: 'Store Management',
          open_task: '6',
          com_task: '5',
          text: 'lakjdshfalsdjfh',
          deadline: '20 mach 2020',
          leader: 'me',
          team: 'we',
          img: Avatar
          },
        ]
      },
      {
        id: 7,
        name: 'Mahmud7',
        img: Avatar,
        work: 'Arun Prater Torun Dol',
        post: 'GS',
        e_id: 'CLT-0007',
        phone: '01700112233',
        email: 'mahmud@gmail.com',
        birthday: '21 September',
        address: '21/21 Airport road',
        gender: 'Male',
        j_date: '30 Feb 2021',
        role: 'Web Developer',
        salary: '$0000',
        projects: [
          {title: 'Office Management',
          open_task: '1',
          com_task: '9',
          text: 'lakjdshfalsdjfh',
          deadline: '20 mach 2020',
          leader: 'me',
          team: 'we',
          img: Avatar
          },
          {title: 'Club Management',
          open_task: '2',
          com_task: '6',
          text: 'lakjdshfalsdjfh',
          deadline: '20 mach 2020',
          leader: 'me',
          team: 'we',
          img: Avatar
          },
          {title: 'School Management',
          open_task: '3',
          com_task: '10',
          text: 'lakjdshfalsdjfh',
          deadline: '20 mach 2020',
          leader: 'me',
          team: 'we',
          img: Avatar
          },
          {title: 'Store Management',
          open_task: '6',
          com_task: '5',
          text: 'lakjdshfalsdjfh',
          deadline: '20 mach 2020',
          leader: 'me',
          team: 'we',
          img: Avatar
          },
        ]
      },
      {
        id: 8,
        name: 'Mahmud8',
        img: Avatar,
        work: 'Arun Prater Torun Dol',
        post: 'GS',
        e_id: 'CLT-0008',
        phone: '01700112233',
        email: 'mahmud@gmail.com',
        birthday: '21 September',
        address: '21/21 Airport road',
        gender: 'Male',
        j_date: '30 Apr 2021',
        role: 'Web Developer',
        salary: '$0000',
        projects: [
          {title: 'Office Management',
          open_task: '1',
          com_task: '9',
          text: 'lakjdshfalsdjfh',
          deadline: '20 mach 2020',
          leader: 'me',
          team: 'we',
          img: Avatar
          },
          {title: 'Club Management',
          open_task: '2',
          com_task: '6',
          text: 'lakjdshfalsdjfh',
          deadline: '20 mach 2020',
          leader: 'me',
          team: 'we',
          img: Avatar
          },
          {title: 'School Management',
          open_task: '3',
          com_task: '10',
          text: 'lakjdshfalsdjfh',
          deadline: '20 mach 2020',
          leader: 'me',
          team: 'we',
          img: Avatar
          },
          {title: 'Store Management',
          open_task: '6',
          com_task: '5',
          text: 'lakjdshfalsdjfh',
          deadline: '20 mach 2020',
          leader: 'me',
          team: 'we',
          img: Avatar
          },
        ]
      },
    ],
  },

  getters: {
    employees: state => {
      return state.employees;
    },
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