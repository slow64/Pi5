import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, ArrowRight, Code, Server, Shield, Database, Globe, Smartphone } from "lucide-react"

const services = [
  {
    id: "desenvolvimento",
    title: "Desenvolvimento de Software",
    description:
      "Criamos soluções personalizadas para seu negócio, desde aplicativos web até sistemas completos de gestão empresarial.",
    icon: Code,
    category: "software",
    features: [
      "Desenvolvimento web e mobile",
      "Sistemas de gestão empresarial",
      "E-commerce e plataformas digitais",
      "Integrações com APIs e sistemas",
      "Manutenção e suporte contínuo",
    ],
    image: "/placeholder.svg?height=400&width=600",
    cta: "Transforme suas ideias em soluções digitais",
  },
  {
    id: "infraestrutura",
    title: "Infraestrutura de TI",
    description:
      "Projetamos e implementamos infraestruturas robustas e escaláveis para suportar as operações da sua empresa.",
    icon: Server,
    category: "infraestrutura",
    features: [
      "Servidores e redes",
      "Virtualização",
      "Backup e recuperação de dados",
      "Monitoramento e manutenção",
      "Suporte técnico especializado",
    ],
    image: "/placeholder.svg?height=400&width=600",
    cta: "Garanta a estabilidade e segurança da sua operação",
  },
  {
    id: "seguranca",
    title: "Segurança Digital",
    description:
      "Protegemos seu negócio contra ameaças cibernéticas com soluções avançadas de segurança da informação.",
    icon: Shield,
    category: "seguranca",
    features: [
      "Análise de vulnerabilidades",
      "Implementação de firewalls e antivírus",
      "Políticas de segurança",
      "Treinamento de equipes",
      "Resposta a incidentes",
    ],
    image: "/placeholder.svg?height=400&width=600",
    cta: "Proteja seus dados e sua reputação",
  },
  {
    id: "cloud",
    title: "Soluções em Cloud",
    description:
      "Migre para a nuvem e aproveite todos os benefícios de escalabilidade, flexibilidade e redução de custos.",
    icon: Globe,
    category: "infraestrutura",
    features: [
      "Migração para a nuvem",
      "AWS, Azure e Google Cloud",
      "Arquitetura de soluções cloud",
      "Otimização de custos",
      "Gestão de ambientes cloud",
    ],
    image: "/placeholder.svg?height=400&width=600",
    cta: "Leve seu negócio para a nuvem",
  },
  {
    id: "dados",
    title: "Gestão de Dados",
    description:
      "Soluções para armazenamento, processamento e análise de dados, transformando informações em insights valiosos.",
    icon: Database,
    category: "dados",
    features: [
      "Business Intelligence",
      "Big Data",
      "Análise de dados",
      "Dashboards e relatórios",
      "Integração de fontes de dados",
    ],
    image: "/placeholder.svg?height=400&width=600",
    cta: "Transforme dados em decisões estratégicas",
  },
  {
    id: "mobile",
    title: "Mobilidade Empresarial",
    description:
      "Estratégias e ferramentas para garantir produtividade e segurança em ambientes de trabalho móveis e remotos.",
    icon: Smartphone,
    category: "software",
    features: [
      "Aplicativos mobile corporativos",
      "Gestão de dispositivos móveis",
      "Acesso remoto seguro",
      "Colaboração em tempo real",
      "Integração com sistemas existentes",
    ],
    image: "/placeholder.svg?height=400&width=600",
    cta: "Mobilize sua equipe com segurança",
  },
]

const categories = ["Todos", "Software", "Infraestrutura", "Segurança", "Dados"]

export default function ServicosPage() {
  return (
    <div className="bg-zinc-900 min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Nossos Serviços</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Soluções completas em tecnologia para impulsionar o crescimento e a eficiência do seu negócio
          </p>
        </div>

        {/* Services Tabs */}
        <Tabs defaultValue="Todos" className="mb-16">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-zinc-800">
              {categories.map((category) => (
                <TabsTrigger key={category} value={category} className="data-[state=active]:bg-purple-600">
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {categories.map((category) => (
            <TabsContent key={category} value={category}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services
                  .filter(
                    (service) => category === "Todos" || service.category.toLowerCase() === category.toLowerCase(),
                  )
                  .map((service) => (
                    <Card
                      key={service.id}
                      className="bg-zinc-800 border-zinc-700 overflow-hidden hover:shadow-lg hover:shadow-purple-500/10 transition-all"
                    >
                      <div className="p-6 flex items-center gap-4">
                        <div className="bg-purple-500/10 p-3 rounded-full">
                          <service.icon className="h-6 w-6 text-purple-500" />
                        </div>
                        <h3 className="text-xl font-bold text-white">{service.title}</h3>
                      </div>

                      <CardContent>
                        <p className="text-gray-300 mb-6">{service.description}</p>

                        <h4 className="text-sm font-semibold text-gray-400 mb-3">Recursos inclusos:</h4>
                        <ul className="space-y-2 mb-6">
                          {service.features.map((feature, index) => (
                            <li key={index} className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-purple-500 flex-shrink-0 mr-2" />
                              <span className="text-gray-300">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>

                      <CardFooter className="border-t border-zinc-700 pt-4">
                        <Link href={`/FormatBot/servicos/${service.id}`} className="w-full">
                          <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-500">
                            Saiba mais <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Featured Service */}
        <div className="mb-16">
          <div className="bg-zinc-800 rounded-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <Badge className="w-fit mb-4 bg-purple-500 hover:bg-purple-600">Em destaque</Badge>
                <h2 className="text-3xl font-bold text-white mb-4">Transformação Digital Completa</h2>
                <p className="text-gray-300 mb-6">
                  Combinamos todos os nossos serviços em uma solução integrada para transformar completamente a forma
                  como sua empresa utiliza a tecnologia. Da infraestrutura ao desenvolvimento de software, passando por
                  segurança e análise de dados.
                </p>
                <ul className="space-y-2 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-500 flex-shrink-0 mr-2" />
                    <span className="text-gray-300">Diagnóstico completo da maturidade digital</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-500 flex-shrink-0 mr-2" />
                    <span className="text-gray-300">Plano estratégico personalizado</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-purple-500 flex-shrink-0 mr-2" />
                    <span className="text-gray-300">Implementação faseada e acompanhamento contínuo</span>
                  </li>
                </ul>
                <Link href="/FormatBot/contato">
                  <Button className="bg-gradient-to-r from-purple-600 to-pink-500">
                    Solicitar consultoria gratuita
                  </Button>
                </Link>
              </div>
              <div className="relative h-[300px] lg:h-auto">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Transformação Digital"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Process */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">Como Trabalhamos</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-zinc-800 p-6 rounded-lg relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center text-white font-bold">
                1
              </div>
              <h3 className="text-xl font-bold text-white mb-3 mt-2">Diagnóstico</h3>
              <p className="text-gray-300">
                Analisamos suas necessidades e objetivos para entender completamente os desafios do seu negócio.
              </p>
            </div>

            <div className="bg-zinc-800 p-6 rounded-lg relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center text-white font-bold">
                2
              </div>
              <h3 className="text-xl font-bold text-white mb-3 mt-2">Planejamento</h3>
              <p className="text-gray-300">
                Desenvolvemos uma estratégia personalizada com soluções específicas para suas necessidades.
              </p>
            </div>

            <div className="bg-zinc-800 p-6 rounded-lg relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center text-white font-bold">
                3
              </div>
              <h3 className="text-xl font-bold text-white mb-3 mt-2">Implementação</h3>
              <p className="text-gray-300">
                Executamos o projeto com metodologias ágeis, garantindo qualidade e cumprimento de prazos.
              </p>
            </div>

            <div className="bg-zinc-800 p-6 rounded-lg relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center text-white font-bold">
                4
              </div>
              <h3 className="text-xl font-bold text-white mb-3 mt-2">Suporte Contínuo</h3>
              <p className="text-gray-300">
                Oferecemos suporte e manutenção contínuos para garantir o funcionamento ideal das soluções.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Pronto para transformar seu negócio?</h2>
          <p className="text-white text-lg mb-6 max-w-2xl mx-auto">
            Entre em contato conosco hoje mesmo e descubra como nossas soluções podem impulsionar o crescimento da sua
            empresa.
          </p>
          <Link href="/FormatBot/contato">
            <Button variant="secondary" size="lg">
              Fale com um especialista
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
