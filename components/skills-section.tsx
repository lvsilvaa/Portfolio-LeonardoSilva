import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "React", level: 80 },
        { name: "TypeScript", level: 75 },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Python", level: 88 },
        { name: "PHP", level: 85 },
        { name: "Node.js", level: 80 },
        { name: "C#", level: 75 },
        { name: "Java", level: 70 },
      ],
    },
    {
      title: "Banco de Dados",
      skills: [
        { name: "MySQL", level: 90 },
        { name: "Modelagem de Dados", level: 85 },
        { name: "Administração BD", level: 80 },
        { name: "Otimização de Queries", level: 75 },
      ],
    },
    {
      title: "Análise de Dados",
      skills: [
        { name: "Power BI", level: 90 },
        { name: "Excel Avançado", level: 95 },
        { name: "SQL Analytics", level: 85 },
        { name: "Data Visualization", level: 88 },
      ],
    },
    {
      title: "Infraestrutura & DevOps",
      skills: [
        { name: "Linux", level: 85 },
        { name: "Windows Server", level: 80 },
        { name: "Docker", level: 70 },
        { name: "Redes", level: 85 },
        { name: "Segurança TI", level: 80 },
      ],
    },
  ]

  const technologies = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Python",
    "PHP",
    "Node.js",
    "C#",
    "Java",
    "Ruby",
    "MySQL",
    "Power BI",
    "Excel",
    "SQL Analytics",
    "Linux",
    "Windows Server",
    "Docker",
    "Git/GitHub",
    "Scrum",
    "Kanban",
    "ITIL v3",
    "Redes",
    "Segurança",
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Habilidades Técnicas</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Mais de 8 anos de experiência em desenvolvimento, análise de dados e infraestrutura de TI
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg text-center text-accent">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium text-card-foreground">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-accent h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-xl font-semibold text-foreground mb-6">Tecnologias & Metodologias</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="text-sm py-2 px-4 bg-accent/10 text-accent hover:bg-accent/20 transition-colors"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
