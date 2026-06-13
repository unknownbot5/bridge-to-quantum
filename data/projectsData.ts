interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Linear Algebra for Quantum I',
    description: `Need linear algebra for quantum computing, this is one of the places, where you would find it!`,
    imgSrc: '/static/images/time-machine.jpg',
    href: '/blog/linear-algebra-for-quantum-I',
  },
]

export default projectsData
