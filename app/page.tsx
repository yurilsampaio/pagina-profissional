"use client"

import { useState, useEffect } from "react"
import {
  Moon,
  Sun,
  Mail,
  Phone,
  Github,
  Linkedin,
  Instagram,
  MessageCircle,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"

// Componente para carrossel individual de cada projeto
function ProjectImageCarousel({ images }: { images: string[] }) {
  const [currentImage, setCurrentImage] = useState(0)

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  }

  useEffect(() => {
    if (images.length > 1) {
      const interval = setInterval(nextImage, 4000)
      return () => clearInterval(interval)
    }
  }, [images, images.length])

  return (
    <div className="relative">
      <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
        <Image
          src={images[currentImage] || "/placeholder.svg"}
          alt={`Imagem ${currentImage + 1}`}
          fill
          className="object-cover"
        />
        {images.length > 1 && (
          <>
            <Button
              variant="outline"
              size="icon"
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm"
              onClick={prevImage}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm"
              onClick={nextImage}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentImage ? "bg-white" : "bg-white/50"
                  }`}
                  onClick={() => setCurrentImage(index)}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

// Componente para projeto individual
function ProjectCard({ project }: { project: any }) {
  return (
    <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        <div className="order-2 lg:order-1">
          <ProjectImageCarousel images={project.images} />
        </div>
        <div className="order-1 lg:order-2 p-6 lg:p-8 flex flex-col justify-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">{project.name}</h3>
          <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech: string) => (
              <Badge key={tech} variant="secondary" className="text-sm">
                {tech}
              </Badge>
            ))}
          </div>
          <div className="flex gap-3">
            <Button asChild className="flex-1">
              <Link href={project.link}>
                Ver Projeto <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            {project.demoLink && (
              <Button asChild variant="outline" className="flex-1 bg-transparent">
                <Link href={project.demoLink}>
                  Demo <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </Card>
  )
}

// Componente principal de projetos
function ProjectsSection() {
  const projects = [
    {
      id: 1,
      name: "Sistema de Gestão Empresarial",
      description:
        "Sistema completo para gestão de empresas desenvolvido em Delphi com integração a banco SQL Server e relatórios avançados. Inclui módulos de vendas, estoque, financeiro e recursos humanos com interface moderna e intuitiva.",
      technologies: ["Delphi", "SQL Server", "ReportBuilder", "FireDAC"],
      link: "#",
      demoLink: "#",
      images: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
    },
    {
      id: 2,
      name: "Dashboard Analytics",
      description:
        "Dashboard interativo para análise de dados em tempo real, desenvolvido com React JS e integração com APIs. Apresenta métricas de negócio, gráficos dinâmicos e relatórios personalizáveis com design responsivo.",
      technologies: ["React JS", "Next JS", "Node JS", "Chart.js"],
      link: "#",
      demoLink: "#",
      images: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
    },
    {
      id: 3,
      name: "Sistema de Mensageria",
      description:
        "Aplicação para processamento de mensagens em larga escala utilizando RabbitMQ e C# .NET. Sistema robusto para comunicação assíncrona entre microserviços com alta disponibilidade e performance.",
      technologies: ["C# .NET", "RabbitMQ", "SQL Server", "Docker"],
      link: "#",
      images: ["/placeholder.svg?height=400&width=600", "/placeholder.svg?height=400&width=600"],
    },
    {
      id: 4,
      name: "App Mobile E-commerce",
      description:
        "Aplicativo mobile para e-commerce desenvolvido em React Native com interface moderna e intuitiva. Inclui catálogo de produtos, carrinho de compras, pagamentos integrados e sistema de avaliações.",
      technologies: ["React Native", "Node JS", "Golang", "MongoDB"],
      link: "#",
      demoLink: "#",
      images: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
    },
  ]

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-12 md:mb-16">Projetos em Destaque</h2>
        <p className="text-center text-muted-foreground text-lg">
          Em breve, meus últimos projetos estarão disponíveis aqui...
        </p>
        {/* <div className="space-y-12 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div key={project.id} className={`${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div> */}
      </div>
    </section>
  )
}

// Componente para seção de contatos
function ContactSection({ title }: { title: string }) {
  const contacts = [
    {
      icon: Mail,
      label: "Email",
      value: "yurillsampaio@gmail.com",
      href: "mailto:yurillsampaio@gmail.com",
    },
    {
      icon: Phone,
      label: "Telefone",
      value: "(63) 99958-2478",
      href: "tel:+5563999582478",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "(63) 99958-2478",
      href: "https://wa.me/5563999582478",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "yurilsampaio",
      href: "https://github.com/yurilsampaio",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "yurilsampaio",
      href: "https://linkedin.com/in/yurilsampaio",
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@yurilimasampaio",
      href: "https://instagram.com/yurilimasampaio",
    },
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">{title}</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {contacts.map((contact) => (
            <Card key={contact.label} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-4 flex items-center justify-center">
                <Link
                  href={contact.href}
                  className="flex flex-col items-center text-center gap-2 group md:flex-row md:text-left md:gap-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <contact.icon className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                  </div>
                  <div className="flex-grow">
                    <p className="text-sm font-medium leading-tight">{contact.label}</p>
                    <p className="text-xs text-muted-foreground truncate">{contact.value}</p>
                  </div>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

// Componente principal
export default function Portfolio() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDark])

  const technologies = [
    "Delphi",
    "C# .NET",
    "React JS",
    "Next JS",
    "Blazor",
    "SQL Server",
    "ReportBuilder",
    "RabbitMQ",
    "Golang",
    "Node JS",
    "React Native",
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Yuri Sampaio</h1>
          <Button variant="outline" size="icon" onClick={() => setIsDark(!isDark)}>
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-8">
            <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary/20">
              <Image src="/yuri-photo.jpeg" alt="Yuri Sampaio" fill className="object-cover" priority />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Yuri Sampaio</h1>
            <p className="text-lg md:text-2xl text-muted-foreground mb-8">Desenvolvedor de Software</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
              Desenvolvedor de software, bacharel em Engenharia de Software e apaixonado por tecnologia.
              Atuo desde 2022 com experiência sólida em Delphi, além de já ter trabalhado com C# .NET, React JS, Next.js, Blazor, SQL Server, ReportBuilder, RabbitMQ, entre outras tecnologias.
              Tenho um interesse constante em aprimoramento, aplicando soluções com inteligência artificial para melhorar performance, agilidade e criatividade no desenvolvimento. Também já estudei Golang, Node.js, React Native e outras tecnologias modernas.
            </p>
          </div>
        </div>
      </section>

      {/* First Contact Section */}
      <ContactSection title="Contato" />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Technologies Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">Tecnologias</h2>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {technologies.map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="text-sm md:text-base px-4 py-2 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10">
        <div className="container mx-auto px-4 text-center">
          <blockquote className="text-lg md:text-2xl font-medium italic max-w-3xl mx-auto">
            "Acredito que a tecnologia muda vidas, e minha missão é criar soluções que impactem positivamente as pessoas
            e negócios."
          </blockquote>
          <cite className="block mt-4 text-muted-foreground">— Yuri Sampaio</cite>
        </div>
      </section>

      {/* Final Contact Section */}
      <ContactSection title="Contato" />

      {/* Footer */}
      <footer className="py-8 border-t bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Yuri Sampaio. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}
