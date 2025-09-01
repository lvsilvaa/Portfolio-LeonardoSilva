import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, BarChart3, PieChart, Car } from "lucide-react"

export function DashboardsSection() {
  const dashboards = [
    {
      title: "Sistema de Controle de Veículos",
      description:
        "Dashboard completo para locadora de veículos com controle de frota, clientes, faturamento e análise de performance por período.",
      tools: ["Power BI", "SQL", "Excel"],
      metrics: ["Faturamento Mensal", "Controle de Frota", "Análise de Clientes"],
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Controle%20de%20veiculos.jpg-gMFnf5irEaKNL5bjumDZ4GEugBBrde.jpeg",
      link: "#",
      icon: <Car className="w-5 h-5" />,
    },
    {
      title: "Dashboard de Controle de Clientes",
      description:
        "Sistema de gestão de clientes com análise de cadastros, controle de veículos por categoria e métricas de faturamento.",
      tools: ["Power BI", "SQL", "Excel"],
      metrics: ["Total de Clientes", "Controle de Cadastro", "Análise por Categoria"],
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Controle%20de%20Clientes.jpg-BZUBhGgab9zuTaRZtDIkHVWoJM70Cd.jpeg",
      link: "#",
      icon: <PieChart className="w-5 h-5" />,
    },
    {
      title: "Dashboard de RH - Acompanhamento",
      description:
        "Sistema completo de gestão de recursos humanos com análise de funcionários por gênero, idade, departamentos e controle salarial.",
      tools: ["Power BI", "SQL Server", "Excel"],
      metrics: ["Análise por Gênero", "Controle Salarial", "Gestão Departamental"],
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/projeto%20RH.jpg-DyC7kiU2g132UMIsMjWi3Cmg7iFooi.jpeg",
      link: "#",
      icon: <BarChart3 className="w-5 h-5" />,
    },
  ]

  return (
    <section id="dashboards" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Dashboards & Analytics</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Dashboards interativos e análises de dados que transformam informações em insights estratégicos para tomada
            de decisão
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dashboards.map((dashboard, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative overflow-hidden">
                <img
                  src={dashboard.image || "/placeholder.svg"}
                  alt={dashboard.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <div className="bg-accent/90 text-accent-foreground p-2 rounded-lg">{dashboard.icon}</div>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl text-foreground group-hover:text-accent transition-colors">
                  {dashboard.title}
                </CardTitle>
                <p className="text-muted-foreground text-sm leading-relaxed">{dashboard.description}</p>
              </CardHeader>

              <CardContent className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-2">Ferramentas Utilizadas:</h4>
                  <div className="flex flex-wrap gap-2">
                    {dashboard.tools.map((tool, toolIndex) => (
                      <Badge key={toolIndex} variant="outline" className="text-xs">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-2">Principais Métricas:</h4>
                  <div className="flex flex-wrap gap-2">
                    {dashboard.metrics.map((metric, metricIndex) => (
                      <Badge key={metricIndex} variant="secondary" className="text-xs bg-accent/10 text-accent">
                        {metric}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button
                  variant="outline"
                  className="w-full group-hover:bg-accent group-hover:text-accent-foreground transition-colors bg-transparent"
                  asChild
                >
                  <a href={dashboard.link} target="_blank" rel="noopener noreferrer">
                    Ver Dashboard
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">Apresentação de Projetos</h3>
            <p className="text-muted-foreground">Capas e apresentações profissionais dos sistemas desenvolvidos</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/capa%20controle%20de%20veiculos.jpg-a7B0iFmYN57X0bGgPCq1SaAHk6WFmC.jpeg"
                alt="Capa do Sistema de Controle de Locação de Veículos"
                className="w-full h-64 sm:h-80 object-cover"
              />
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold text-foreground mb-2">
                  Sistema de Controle de Locação de Veículos
                </h4>
                <p className="text-muted-foreground">
                  Apresentação profissional do sistema completo de gestão para locadoras, incluindo controle gerencial e
                  acompanhamento de performance.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Interessado em ver mais dashboards ou discutir um projeto de análise de dados?
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90">
            <a href="#contact">Entre em Contato</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
