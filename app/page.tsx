'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ArrowUpRight, Github, Linkedin, Mail, ExternalLink } from 'lucide-react'

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false)

  const projects = [
    {
      title: 'Load-Balanced Auto-Scaling Architecture',
      description: 'Developed a modular Terraform project to provision a scalable AWS infrastructure with ALB, Auto Scaling Group, EC2 instances, and secure networking across multiple availability zones.',
      tags: ['Terraform', 'AWS', 'Infrastructure as Code'],
      link: 'https://github.com/GitAzeem/terraform-alb-asg.git',
      year: '2024'
    },
    {
      title: 'InfraSecure-CostOps CI Pipeline',
      description: 'Integrated TFSEC and TFLint security scans into CI pipeline with Infracost for early cost visibility, automating setup of all required tools on build agents.',
      tags: ['CI/CD', 'Security', 'Azure DevOps'],
      link: 'https://github.com/GitAzeem/InfraSecure-CostOps.git',
      year: '2024'
    },
    {
      title: 'CI-Pipeline for Spring3Hibernate',
      description: 'Implemented robust CI pipeline using Azure DevOps with self-hosted AWS agent to automate build, packaging, and artifact publishing of Java Spring3Hibernate web application.',
      tags: ['Azure DevOps', 'Java', 'CI/CD'],
      link: 'https://github.com/getAzeem/CI-Pipeline-for-Spring3Hibernate.git',
      year: '2024'
    },
    {
      title: 'Automated CI/CD Pipeline for Azure Static Content',
      description: 'Architected full CI/CD pipeline in Azure DevOps using YAML to automate Terraform lifecycle, with integrated service principal authentication and remote backend state management.',
      tags: ['Azure', 'Terraform', 'DevOps'],
      link: 'https://github.com/getAzeem/Azure-static-hosting.git',
      year: '2024'
    },
    {
      title: 'Azure Sentinel Scale',
      description: 'Developed automated Terraform-based solution to deploy secure, cost-optimized Azure VM Scale Set with auto-scaling, security scanning, and real-time cost estimation.',
      tags: ['Azure', 'Terraform', 'Security'],
      link: 'https://github.com/getAzeem/azure-sentinel-scale.git',
      year: '2024'
    },
    {
      title: 'VM Project Terraform',
      description: 'Developed Terraform code to automate deployment of Azure infrastructure components, including virtual machines, networking, and storage with integrated remote state management.',
      tags: ['Terraform', 'Azure', 'Infrastructure'],
      link: 'https://github.com/GitAzeem/VM-project-terraform',
      year: '2024'
    }
  ]

  const skills = {
    'DevOps & Tools': ['Azure DevOps', 'Terraform', 'Azure', 'AWS', 'Docker', 'Jenkins', 'Ansible', 'Linux', 'Bash scripting', 'Git', 'Vagrant'],
    'Languages': ['Python', 'JavaScript', 'Java', 'HTML', 'CSS', 'C++', 'Spring Boot'],
    'Databases': ['MongoDB', 'MySQL']
  }

  const certifications = [
    'Solutions Architecture Job Simulation @AWS',
    'Operating Systems and You: Becoming a Power User - Google',
    'Software Engineering Job Simulation @Electronic Arts (EA)',
    'Fundamentals of Ansible - Red Hat'
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-border bg-background/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-primary">Abdul Azeem</div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8">
              <a href="#about" className="text-sm hover:text-primary transition-colors">About</a>
              <a href="#experience" className="text-sm hover:text-primary transition-colors">Experience</a>
              <a href="#projects" className="text-sm hover:text-primary transition-colors">Projects</a>
              <a href="#contact" className="text-sm hover:text-primary transition-colors">Contact</a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="md:hidden pb-4 flex flex-col gap-3">
              <a href="#about" className="text-sm hover:text-primary transition-colors block">About</a>
              <a href="#experience" className="text-sm hover:text-primary transition-colors block">Experience</a>
              <a href="#projects" className="text-sm hover:text-primary transition-colors block">Projects</a>
              <a href="#contact" className="text-sm hover:text-primary transition-colors block">Contact</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
              DevOps 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent"> Engineering</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Specialized in infrastructure automation, CI/CD pipelines, and scalable cloud infrastructure. Transforming complex DevOps challenges into elegant, maintainable solutions.
            </p>
            <div className="flex gap-4 mb-8">
              <Link 
                href="#contact"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center gap-2"
              >
                Get In Touch <ArrowUpRight size={18} />
              </Link>
              <a 
                href="https://github.com/GitAzeem"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary/10 transition-colors"
              >
                View GitHub
              </a>
            </div>
            <div className="flex gap-4">
              <a href="https://github.com/GitAzeem" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:coffeewithazim@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-8 border border-primary/20">
              <div className="space-y-4 font-mono text-sm">
                <div className="text-muted-foreground">$ <span className="text-primary">whoami</span></div>
                <div className="text-accent">Abdul Azeem</div>
                <div className="text-muted-foreground">$ <span className="text-primary">cat</span> skills.txt</div>
                <div className="text-foreground space-y-1">
                  <div>→ Terraform | AWS | Azure | Docker</div>
                  <div>→ Jenkins | Ansible | CI/CD Pipelines</div>
                  <div>→ Infrastructure as Code</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Role Section */}
      <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8 bg-card border-y border-border">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Currently</h2>
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-xl p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                <div className="w-6 h-6 rounded-full bg-primary"></div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-accent mb-2">DevOps Intern</h3>
                <p className="text-lg text-primary font-medium mb-3">
                  <a href="https://www.trinix.org.in/" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-2">
                    Trinix Private Limited <ExternalLink size={16} />
                  </a>
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Working as a DevOps intern, gaining hands-on experience with infrastructure automation, deployment pipelines, and cloud infrastructure management. Contributing to the team's DevOps initiatives and learning industry best practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="bg-card border border-border rounded-xl p-6">
                <h3 className="text-xl font-bold text-primary mb-4">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map(skill => (
                    <span key={skill} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm border border-primary/20">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-card border-y border-border">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, idx) => (
              <a
                key={idx}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-background border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:bg-background/80"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors flex-1">{project.title}</h3>
                  <ArrowUpRight className="text-muted-foreground group-hover:text-accent transition-colors flex-shrink-0" size={20} />
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded border border-primary/20">
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert, idx) => (
              <div key={idx} className="flex items-start gap-3 p-4 bg-card border border-border rounded-lg">
                <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                <p className="text-foreground">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card border-t border-border">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Education</h2>
          <div className="bg-background border border-border rounded-xl p-8">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-bold text-primary">Bachelor of Technology</h3>
              <span className="text-muted-foreground text-sm">Aug 2023 - May 2027</span>
            </div>
            <p className="text-foreground mb-1">Computer Science and Engineering</p>
            <p className="text-accent">Bennett University, Greater Noida, Uttar Pradesh</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Interested in discussing DevOps solutions or infrastructure projects? Feel free to reach out!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:coffeewithazim@gmail.com"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              <Mail size={20} /> Email Me
            </a>
            <a 
              href="tel:+917800626083"
              className="px-8 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary/10 transition-colors"
            >
              +91-7800626083
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">© 2025 Abdul Azeem. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="https://github.com/GitAzeem" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                GitHub
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                LinkedIn
              </a>
              <a href="mailto:coffeewithazim@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                Email
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
