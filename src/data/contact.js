// value: what is displayed, href: where the link goes.
// Entries with value: null are not shown on the page.
const email = 'philipos793@gmail.com'
const phone = '+30 694 242 4628'
const linkedin = 'linkedin.com/in/philippos-tsikouras'

export const contacts = [
  {
    id: 'email',
    label: 'Email',
    value: email,
    // Points to the form on the same page instead of mailto:
    href: '#contact-form',
  },
  {
    id: 'phone',
    label: 'Phone',
    value: phone,
    // tel: links must not contain spaces
    href: `tel:${phone?.replaceAll(' ', '')}`,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    value: linkedin,
    href: `https://${linkedin}`,
  },
  {
    id: 'github',
    label: 'GitHub',
    value: 'github.com/Philippos793',
    href: 'https://github.com/Philippos793',
  },
]
