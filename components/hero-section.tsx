"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { useEffect, useState } from "react"
import Image from "next/image"

export function HeroSection() {
  const [text, setText] = useState("")
  const fullText = "Desenvolvedor Front-end e Analista de dados"

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      setText(fullText.slice(0, index))
      index++
      if (index > fullText.length) {
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Coluna da foto */}
          <div className="flex justify-center lg:justify-end order-2 lg:order-1">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-accent shadow-2xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%201%20de%20set.%20de%202025%2C%2014_31_47-go07baYiD5j9N76SsfPRKs8caN32h2.png"
                  alt="Leonardo Silva - Desenvolvedor Front-end React"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              {/* Elemento decorativo */}
              <div className="absolute -z-10 top-4 left-4 w-80 h-80 rounded-full bg-accent/20"></div>
            </div>
          </div>

          {/* Coluna do conteúdo */}
          <div className="text-center lg:text-left order-1 lg:order-2">
            <div className="mb-8">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4 text-balance">
                Olá, eu sou
                <span className="block text-accent mt-2">Leonardo Silva</span>
              </h1>
              <div className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-8 h-8">
                {text}
                <span className="animate-pulse">|</span>
              </div>
            </div>

            <p className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto lg:mx-0 text-pretty">
               Especializado em criar experiências digitais modernas e análises de dados impactantes. 
                Com mais de 8 anos de experiência em TI, transformo ideias em soluções tecnológicas eficientes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-16">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Mail className="mr-2 h-4 w-4" />
                Entre em Contato
              </Button>
              <div className="flex gap-4">
                <Button variant="outline" size="lg" asChild>
                  <a href="https://github.com/lvsilvaa" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a
                    href="https://www.linkedin.com/in/leonardosilva-826083231/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="mr-2 h-4 w-4" />
                    LinkedIn
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Botão de scroll centralizado */}
        <div className="text-center mt-8">
          <Button variant="ghost" size="lg" onClick={scrollToAbout} className="animate-bounce">
            <ArrowDown className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  )
}
