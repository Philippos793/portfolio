import {
  siApachemaven,
  siC,
  siCss,
  siDocker,
  siGit,
  siGithub,
  siHibernate,
  siHtml5,
  siJavascript,
  siLinux,
  siMysql,
  siOpenjdk,
  siPhp,
  siPostgresql,
  siPython,
  siReact,
  siSpringboot,
  siSpringsecurity,
} from 'simple-icons'

// Same categories and content as the CV.
// icon: logo from simple-icons (no icon → name only)
// color: overrides the brand colour when it is not visible on a dark background
export const skillGroups = [
  {
    title: 'Programming Languages',
    skills: [
      // simple-icons has no Java logo: use OpenJDK with the Java colour
      { name: 'Java', icon: siOpenjdk, color: '#ED8B00' },
      { name: 'JavaScript', icon: siJavascript },
      { name: 'Python', icon: siPython },
      { name: 'C', icon: siC },
      { name: 'PHP', icon: siPhp },
    ],
  },
  {
    title: 'Frameworks & Web Technologies',
    skills: [
      { name: 'Spring Boot', icon: siSpringboot },
      { name: 'React', icon: siReact },
      { name: 'HTML5', icon: siHtml5 },
      { name: 'CSS3', icon: siCss },
    ],
  },
  {
    title: 'Databases',
    skills: [
      { name: 'SQL' },
      // Lighter shades of their blue, so they are visible on a dark background
      { name: 'MySQL', icon: siMysql, color: '#5DADE2' },
      { name: 'PostgreSQL', icon: siPostgresql, color: '#6C9BF5' },
    ],
  },
  {
    title: 'Tools & Technologies',
    skills: [
      { name: 'Git', icon: siGit },
      { name: 'GitHub', icon: siGithub, color: 'currentColor' },
      { name: 'Maven', icon: siApachemaven },
      { name: 'Hibernate / JPA', icon: siHibernate, color: 'currentColor' },
      { name: 'Spring Security', icon: siSpringsecurity },
      { name: 'REST APIs' },
      { name: 'Docker', icon: siDocker },
      { name: 'Linux', icon: siLinux },
    ],
  },
]

export const languages = [
  { name: 'Greek', level: 'Native' },
  { name: 'English', level: 'B2 – Independent User' },
]

// Technologies I'm currently learning. While empty, the line is hidden
export const learning = []
