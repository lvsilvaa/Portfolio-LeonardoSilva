import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, Calendar, MapPin } from "lucide-react"

export function ExperienceSection() {
  const experiences = [
    {
      title: "Programador Júnior",
      company: "Hostnet",
      location: "Rio de Janeiro, RJ",
      period: "Nov 2023 - Atual",
      description:
        "Desenvolvimento e manutenção de sistemas internos em Python e MySQL. Suporte e manutenção de sites hospedados, implementação de melhorias em funcionalidades e desempenho de aplicações.",
      technologies: ["Python", "MySQL", "PHP", "JavaScript"],
    },
    {
      title: "Técnico de TI",
      company: "Exército Brasileiro",
      location: "Rio de Janeiro, RJ",
      period: "Fev 2017 - Fev 2025",
      description:
        "Atendimento remoto e presencial a mais de 100 usuários. Administração de servidores, redes e segurança da informação. Treinamento de usuários em boas práticas e uso de sistemas corporativos.",
      technologies: ["Linux", "Windows Server", "Redes", "Segurança", "ITIL"],
    },
    {
      title: "Programador Júnior",
      company: "GeoHub",
      location: "Rio de Janeiro, RJ",
      period: "Abr 2013 - Mar 2014",
      description:
        "Desenvolvimento de sistemas internos em PHP, JavaScript e SQL, com criação de scripts para automação de processos e relatórios.",
      technologies: ["PHP", "JavaScript", "SQL", "Automação"],
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Experiência Profissional</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Mais de 8 anos de experiência em desenvolvimento e infraestrutura de TI
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl text-card-foreground">{exp.title}</CardTitle>
                    <div className="flex items-center gap-2 text-muted-foreground mt-2">
                      <Building2 className="h-4 w-4" />
                      <span className="font-medium">{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex flex-col sm:items-end gap-2">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary">
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
