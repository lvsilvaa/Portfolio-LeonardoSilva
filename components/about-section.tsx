import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, Globe, Server, BarChart3, Shield } from "lucide-react"

export function AboutSection() {
  const highlights = [
    {
      icon: Globe,
      title: "Frontend",
      description: "HTML5, CSS3, JavaScript, React, Next.js",
    },
    {
      icon: Server,
      title: "Backend",
      description: "Python, PHP, Node.js, C#, Java",
    },
    {
      icon: Database,
      title: "Banco de Dados",
      description: "MySQL, modelagem e administração",
    },
    {
      icon: BarChart3,
      title: "Análise de Dados",
      description: "Power BI, Excel avançado, SQL Analytics",
    },
    {
      icon: Shield,
      title: "Infraestrutura",
      description: "Linux, Windows Server, redes, segurança",
    },
    {
      icon: Code,
      title: "Metodologias",
      description: "Git/GitHub, Docker, Scrum, ITIL v3",
    },
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Sobre Mim</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Profissional de TI com 8+ anos de experiência e graduando em Sistemas de Informação
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Atualmente trabalho como Programador Júnior na Hostnet, desenvolvendo e mantendo sistemas internos em
              Python e MySQL. Paralelamente, atuo como Técnico de TI no Exército Brasileiro há 8 anos, onde administro
              servidores, redes e segurança da informação para mais de 100 usuários.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Graduando em Sistemas de Informação pela Estácio de Sá (previsão 2026) e cursando certificação ITIL
              Foundation v3. Tenho experiência sólida em desenvolvimento Full Stack, análise de dados e infraestrutura
              de TI, sempre focado em soluções escaláveis e inovadoras.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Possuo forte comunicação, capacidade de resolução de problemas e trabalho em equipe. Estou sempre em busca
              de novos desafios e oportunidades para aplicar minha experiência em projetos que façam a diferença.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <item.icon className="h-8 w-8 text-accent mx-auto mb-3" />
                  <h3 className="font-semibold text-card-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
