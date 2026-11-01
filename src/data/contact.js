// value: αυτό που εμφανίζεται, href: πού οδηγεί το link.
// Όσα έχουν value: null δεν εμφανίζονται στη σελίδα.
const email = 'philipos793@gmail.com'
const phone = '+30 694 242 4628'
const linkedin = 'linkedin.com/in/philippos-tsikouras'

export const contacts = [
  {
    id: 'email',
    label: 'Email',
    value: email,
    // Οδηγεί στη φόρμα της ίδιας σελίδας αντί για mailto:
    href: '#contact-form',
  },
  {
    id: 'phone',
    label: 'Phone',
    value: phone,
    // στο tel: τα κενά δεν επιτρέπονται
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
