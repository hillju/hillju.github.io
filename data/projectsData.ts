interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
  technologies?: string[]
  responsibilities?: string[]
}

const projectsData: Project[] = [
  {
    title: 'OneView Analytics powered by Infosight',
    description: 'Analytics platform integrated with HPE OneView',
    technologies: ['Python', 'Java', 'Kubernetes', 'AWS', 'REST', 'JavaScript'],
    responsibilities: [
      'Led technical knowledge sharing and mentoring',
      'Mitigated remote execution vulnerability'
    ]
  },
  {
    title: 'HPE OneView',
    description: 'Infrastructure management platform for enterprise data centers',
    technologies: ['Java', 'Python', 'Jetty', 'Spring', 'JavaScript', 'VMware'],
    responsibilities: [
      'Modernized orchestration engine and UI components',
      'Reduced defects from thousands to under 100',
      'Created developer tools to speed up testing and development'
    ]
  },
  {
    title: 'Mantra',
    description: 'Compliance testing system focused on usability',
    technologies: ['Java', 'Spring', 'TestNG'],
    responsibilities: [
      'Prototyped compliance testing system for non-programmer usability',
      'Applied full TDD throughout development'
    ]
  },
  {
    title: 'HP CloudSystem',
    description: 'Enterprise cloud management system',
    technologies: ['Python', 'Flask', 'OpenStack', 'Java', 'KVM', 'VMware'],
    responsibilities: [
      'Created a standalone installer praised by field techs',
      'Improved patching and upgrade systems across multiple VMs',
      'Integrated foundational software for smoother releases'
    ]
  },
]

export default projectsData
