import mfCover from '../assets/projects/manageflow/cover.webp'
import mfAdminDashboard from '../assets/projects/manageflow/admin-dashboard.png'
import mfEmployeeDirectory from '../assets/projects/manageflow/employee-directory.png'
import mfWorkHours from '../assets/projects/manageflow/work-hours-payroll.png'
import mfTaskManagement from '../assets/projects/manageflow/task-management.png'
import mfTaskDetails from '../assets/projects/manageflow/task-details-collaboration.png'
import mfEmployeeWorkspace from '../assets/projects/manageflow/employee-workspace.png'
import bsCover from '../assets/projects/bookstore/cover.webp'
import bsHome from '../assets/projects/bookstore/home.webp'
import bsDashboard from '../assets/projects/bookstore/dashboard.webp'
import bsBrowse from '../assets/projects/bookstore/browse.webp'
import bsAddBook from '../assets/projects/bookstore/add-book.webp'
import bsRequests from '../assets/projects/bookstore/requests.webp'
import bsLogin from '../assets/projects/bookstore/login.webp'
import bsRegister from '../assets/projects/bookstore/register.webp'

// Card image: cover if present, otherwise the first image in images
export const projects = [
  {
    id: 'manageflow',
    title: 'ManageFlow',
    context: 'Personal project',
    cover: mfCover,
    description:
      'Employee management and task collaboration app with JWT roles, work-shift tracking, monthly reports and in-app notifications.',
    tech: ['Java', 'Spring Boot', 'Spring Security', 'JWT', 'PostgreSQL', 'React', 'Docker'],
    features: [
      'Secure JWT login with ADMIN and EMPLOYEE roles',
      'Employee lifecycle management: create, edit, deactivate and reactivate while preserving history',
      'Registration requests approved by an administrator, and time-limited invitation links',
      'Email notifications for approvals, invitations and account reactivation',
      'Work-shift clock-in / clock-out with timezone-safe timestamps',
      'Monthly work-hours reports and payroll preparation',
      'Task management with assignment, deadlines, checklists, attachments and activity history',
      'Persistent in-app notifications for task updates',
    ],
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
    title: 'SocialBookstore',
    context: 'University project',
    cover: bsCover,
    description:
      "Book-sharing community where readers offer the books they've finished, search what others share and request the ones they want. Owners choose who gets each book and every requester is notified by email.",
    tech: ['Java', 'Spring Boot', 'Spring Security', 'MySQL', 'Thymeleaf', 'Bootstrap 5', 'Docker'],
    features: [
      'Registration and login secured with Spring Security',
      'Personal dashboard with stats, book offers and quick actions',
      'Offer books with authors, category and summary',
      'Search by title and author, with exact or approximate matching',
      'Request books and let owners choose who gets them, with email notifications',
      'Profile with favourite categories and authors',
      'Admin dashboard with community stats',
      'One-command setup with Docker Compose (MySQL and the app)',
    ],
    repo: 'https://github.com/Philippos793/Online-BookStore-Application',
    images: [
      { src: bsHome, alt: 'Landing page with community stats' },
      { src: bsDashboard, alt: 'User dashboard with book offers and quick actions' },
      { src: bsBrowse, alt: 'Search and recently added books' },
      { src: bsAddBook, alt: 'Offer a new book' },
      { src: bsRequests, alt: 'Choosing who gets a requested book' },
      { src: bsLogin, alt: 'Split-screen login page' },
      { src: bsRegister, alt: 'Registration with favourite categories and authors' },
    ],
  },
]
