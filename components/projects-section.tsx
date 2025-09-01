"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Filter } from "lucide-react"

export function ProjectsSection() {
  const [filter, setFilter] = useState("all")

  const projects = [
    {
      id: 1,
      title: "Landing Page Fanta",
      description:
        "Landing page interativa com animações GSAP avançadas e ScrollTrigger, featuring elementos flutuantes sincronizados com scroll, gradientes dinâmicos e design responsivo. Implementa animações complexas de rotação, posicionamento e escala para criar uma experiência imersiva.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fanta%20page.gif-4WX5J4pFCsSC4pKyMJ2fjV8sgfqz6J.jpeg",
      technologies: ["HTML", "CSS", "JavaScript", "GSAP", "ScrollTrigger"],
      category: "frontend",
      github: "#",
      demo: "#",
    },
    {
      id: 2,
      title: "Sistema de Login Espacial",
      description:
        "Interface de login elegante com tema espacial, utilizando efeitos glassmorphism e gradientes, desenvolvida com foco na experiência do usuário e design moderno.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/login%20page-eSTzzHbF8h6IH2AlVAB9hpgwztFc5C.png",
      technologies: ["HTML", "CSS", "JavaScript"],
      category: "frontend",
      github: "#",
      demo: "#",
    },
    {
      id: 3,
      title: "Chronos - Timer Pomodoro",
      description:
        "Aplicativo de produtividade baseado na técnica Pomodoro, com interface minimalista, gerenciamento de tarefas e design responsivo para foco e concentração.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pomodoro-7Z78YHaDhUbiaCHg7dlrFEQbM4Ku7U.png",
      technologies: ["HTML", "CSS", "JavaScript"],
      category: "frontend",
      github: "#",
      demo: "#",
    },
    {
      id: 4,
      title: "Lista de Afazeres Avançada",
      description:
        "Aplicação completa de gerenciamento de tarefas com LocalStorage, filtros avançados, funcionalidades de export e interface intuitiva para organização pessoal.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/to-do%20list.jpg-aBbf9MoeWTxYKQitCYd24QANEV7Ggv.jpeg",
      technologies: ["HTML", "CSS", "JavaScript", "LocalStorage"],
      category: "frontend",
      github: "#",
      demo: "#",
    },
    {
      id: 5,
      title: "Inversor de Texto Interativo",
      description:
        "Ferramenta web simples e funcional para inversão de texto com alternância de temas, demonstrando manipulação de DOM e interatividade com JavaScript puro.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/inverter%20texto.jpg-Ypn9MqXz92hv7AkXK7ZpN4LZM8MtM3.jpeg",
      technologies: ["HTML", "CSS", "JavaScript"],
      category: "frontend",
      github: "#",
      demo: "#",
    },
  ]

  const categories = [
    { id: "all", label: "Todos" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "fullstack", label: "Full Stack" },
  ]

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter)

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Meus Projetos</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Alguns dos projetos que desenvolvi, demonstrando minhas habilidades técnicas
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={filter === category.id ? "default" : "outline"}
              onClick={() => setFilter(category.id)}
              className={filter === category.id ? "bg-accent hover:bg-accent/90" : ""}
            >
              <Filter className="mr-2 h-4 w-4" />
              {category.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <Button size="sm" variant="secondary" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Código
                    </a>
                  </Button>
                  <Button size="sm" variant="secondary" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl text-card-foreground">{project.title}</CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <Badge key={index} variant="secondary" className="text-xs bg-accent/10 text-accent">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
