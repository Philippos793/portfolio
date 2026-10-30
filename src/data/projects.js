import mfAdminDashboard from '../assets/projects/manageflow/admin-dashboard.png'
import mfEmployeeDirectory from '../assets/projects/manageflow/employee-directory.png'
import mfWorkHours from '../assets/projects/manageflow/work-hours-payroll.png'
import mfTaskManagement from '../assets/projects/manageflow/task-management.png'
import mfTaskDetails from '../assets/projects/manageflow/task-details-collaboration.png'
import mfEmployeeWorkspace from '../assets/projects/manageflow/employee-workspace.png'
import bsDashboard from '../assets/projects/bookstore/dashboard.png'
import bsLogin from '../assets/projects/bookstore/login.png'
import bsRegister from '../assets/projects/bookstore/register.png'

// Η πρώτη εικόνα του images είναι το εξώφυλλο της κάρτας
export const projects = [
  {
    id: 'manageflow',
    title: 'ManageFlow',
    context: 'Personal project',
    description:
      'Employee management and task collaboration app with JWT roles, work-shift tracking, monthly reports and in-app notifications.',
    tech: ['React', 'Spring Boot', 'PostgreSQL'],
    repo: 'https://github.com/Philippos793/ManageFlow',
    images: [
      { src: mfAdminDashboard, alt: 'Admin dashboard with operational summary cards' },
      { src: mfEmployeeDirectory, alt: 'Employee directory with management actions' },
      { src: mfWorkHours, alt: 'Work-hours calendar and payroll preparation' },
      { src: mfTaskManagement, alt: 'Task management with progress and workflow actions' },
      { src: mfTaskDetails, alt: 'Task details with collaboration information' },
      { src: mfEmployeeWorkspace, alt: 'Employee workspace with shift controls' },
    ],
  },
  {
    id: 'online-bookstore',
    title: 'Online Bookstore',
    context: 'University project',
    description:
      'Bookstore web app where users register, manage profiles, offer and search books. Secured with Spring Security.',
    tech: ['Java', 'Spring Boot', 'MySQL'],
    repo: 'https://github.com/Philippos793/Online-BookStore-Application',
    images: [
      { src: bsDashboard, alt: 'Bookstore dashboard' },
      { src: bsLogin, alt: 'Login page' },
      { src: bsRegister, alt: 'Registration page with preferred categories' },
    ],
  },
]
