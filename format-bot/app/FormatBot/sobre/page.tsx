import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { CheckCircle, Award, Users, TrendingUp, Clock, Heart } from "lucide-react"

const timeline = [
  {
    year: "2012",
    title: "Fundação",
    description: "A Format Soluções foi fundada com foco em serviços de manutenção de computadores e suporte técnico.",
  },
  {
    year: "2014",
    title: "Expansão de Serviços",
    description: "Ampliamos nossa atuação para incluir desenvolvimento de software e soluções web.",
  },
  {
    year: "2016",
    title: "Novo Escritório",
    description: "Mudamos para um escritório maior para acomodar nossa equipe em crescimento.",
  },
  {
    year: "2018",
    title: "Certificações",
    description: "Obtivemos certificações importantes em tecnologias Microsoft, AWS e Google Cloud.",
  },
  {
    year: "2020",
    title: "Soluções em Cloud",
    description: "Lançamos nossa divisão especializada em soluções de cloud computing e migração para a nuvem.",
  },
  {
    year: "2022",
    title: "Inteligência Artificial",
    description: "Começamos a oferecer soluções baseadas em IA para automação e análise de dados.",
  },
  {
    year: "2023",
    title: "Expansão Nacional",
    description: "Iniciamos atendimento em todo o território nacional com equipes remotas e parceiros locais.",
  },
]

export default function SobrePage() {
  return (
    <div className="bg-zinc-900 min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Sobre a Format Soluções</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Conheça nossa história, missão e valores que nos guiam na jornada de transformar negócios através da
            tecnologia
          </p>
        </div>

        {/* About Us Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Quem Somos</h2>
            <p className="text-gray-300 text-lg mb-4">
              A Format Soluções é uma empresa de tecnologia fundada em 2012 com a missão de tornar a tecnologia
              acessível e eficiente para empresas de todos os portes.
            </p>
            <p className="text-gray-300 text-lg mb-4">
              Ao longo dos anos, evoluímos de uma pequena empresa de suporte técnico para um provedor completo de
              soluções tecnológicas, abrangendo desenvolvimento de software, infraestrutura, cloud computing, segurança
              digital e consultoria em TI.
            </p>
            <p className="text-gray-300 text-lg mb-6">
              Nossa equipe é formada por profissionais altamente qualificados e apaixonados por tecnologia, sempre em
              busca das melhores soluções para os desafios dos nossos clientes.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-zinc-800 p-4 rounded-lg text-center">
                <h3 className="text-3xl font-bold text-purple-500 mb-2">10+</h3>
                <p className="text-gray-300">Anos de experiência</p>
              </div>
              <div className="bg-zinc-800 p-4 rounded-lg text-center">
                <h3 className="text-3xl font-bold text-purple-500 mb-2">500+</h3>
                <p className="text-gray-300">Projetos entregues</p>
              </div>
              <div className="bg-zinc-800 p-4 rounded-lg text-center">
                <h3 className="text-3xl font-bold text-purple-500 mb-2">50+</h3>
                <p className="text-gray-300">Profissionais</p>
              </div>
              <div className="bg-zinc-800 p-4 rounded-lg text-center">
                <h3 className="text-3xl font-bold text-purple-500 mb-2">300+</h3>
                <p className="text-gray-300">Clientes satisfeitos</p>
              </div>
            </div>
          </div>
          <div className="relative h-[500px] rounded-lg overflow-hidden">
            <Image
              src="/FormatBot/images/empresas.jpg"
              alt="Equipe Format Soluções"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent opacity-60"></div>
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="mb-16">
          <Tabs defaultValue="missao" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 bg-zinc-800">
              <TabsTrigger value="missao" className="data-[state=active]:bg-purple-600">
                Missão
              </TabsTrigger>
              <TabsTrigger value="visao" className="data-[state=active]:bg-purple-600">
                Visão
              </TabsTrigger>
              <TabsTrigger value="valores" className="data-[state=active]:bg-purple-600">
                Valores
              </TabsTrigger>
            </TabsList>
            <TabsContent value="missao" className="bg-zinc-800 p-6 rounded-lg mt-4">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="md:w-1/3 flex justify-center">
                  <div className="bg-purple-500/10 p-6 rounded-full">
                    <Award className="h-24 w-24 text-purple-500" />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold text-white mb-4">Nossa Missão</h3>
                  <p className="text-gray-300 text-lg">
                    Fornecer soluções tecnológicas inovadoras e de qualidade, contribuindo para o sucesso e crescimento
                    de nossos clientes através de um atendimento personalizado e excelência técnica.
                  </p>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="visao" className="bg-zinc-800 p-6 rounded-lg mt-4">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="md:w-1/3 flex justify-center">
                  <div className="bg-purple-500/10 p-6 rounded-full">
                    <TrendingUp className="h-24 w-24 text-purple-500" />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold text-white mb-4">Nossa Visão</h3>
                  <p className="text-gray-300 text-lg">
                    Ser reconhecida como referência em soluções tecnológicas no Brasil, destacando-se pela inovação,
                    qualidade e compromisso com a satisfação dos clientes.
                  </p>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="valores" className="bg-zinc-800 p-6 rounded-lg mt-4">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="md:w-1/3 flex justify-center">
                  <div className="bg-purple-500/10 p-6 rounded-full">
                    <Heart className="h-24 w-24 text-purple-500" />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold text-white mb-4">Nossos Valores</h3>
                  <ul className="text-gray-300 text-lg space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-purple-500 flex-shrink-0 mr-2" />
                      <span>Ética e transparência em todas as relações</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-purple-500 flex-shrink-0 mr-2" />
                      <span>Compromisso com a qualidade e excelência</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-purple-500 flex-shrink-0 mr-2" />
                      <span>Valorização das pessoas e do trabalho em equipe</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-purple-500 flex-shrink-0 mr-2" />
                      <span>Inovação e melhoria contínua</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-purple-500 flex-shrink-0 mr-2" />
                      <span>Responsabilidade social e ambiental</span>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Nossa Trajetória</h2>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-600 to-pink-500"></div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-12 text-right" : "pl-12"}`}>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-300">{item.description}</p>
                  </div>

                  <div className="z-10 flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center text-white font-bold">
                      {item.year}
                    </div>
                  </div>

                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Por que escolher a Format Soluções?</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-zinc-800 border-zinc-700">
              <CardContent className="pt-6">
                <div className="bg-purple-500/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Award className="h-8 w-8 text-purple-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Expertise Técnica</h3>
                <p className="text-gray-300">
                  Nossa equipe é formada por especialistas certificados nas principais tecnologias do mercado,
                  garantindo soluções de alta qualidade.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-zinc-800 border-zinc-700">
              <CardContent className="pt-6">
                <div className="bg-purple-500/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-purple-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Atendimento Personalizado</h3>
                <p className="text-gray-300">
                  Entendemos as necessidades específicas de cada cliente para oferecer soluções sob medida que realmente
                  resolvem seus desafios.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-zinc-800 border-zinc-700">
              <CardContent className="pt-6">
                <div className="bg-purple-500/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Clock className="h-8 w-8 text-purple-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Agilidade e Eficiência</h3>
                <p className="text-gray-300">
                  Utilizamos metodologias ágeis para entregar projetos com rapidez e qualidade, sem abrir mão da
                  excelência.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Pronto para transformar seu negócio?</h2>
          <p className="text-white text-lg mb-6 max-w-2xl mx-auto">
            Entre em contato conosco hoje mesmo e descubra como podemos ajudar sua empresa a alcançar novos patamares
            com nossas soluções tecnológicas.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/FormatBot/contato">
              <Button variant="secondary" size="lg">
                Fale Conosco
              </Button>
            </Link>
            <Link href="/FormatBot/servicos">
              <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white/20">
                Conheça Nossos Serviços
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
