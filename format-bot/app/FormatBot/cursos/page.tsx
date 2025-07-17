import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, Star, BookOpen } from "lucide-react"

const courses = [
  {
    id: "desenvolvimento-web",
    title: "Desenvolvimento Web Completo",
    description: "Aprenda HTML, CSS, JavaScript, React e Node.js neste curso completo de desenvolvimento web.",
    image: "/FormatBot/images/desWeb.png",
    duration: "40 horas",
    students: 1250,
    rating: 4.8,
    level: "Iniciante a Avançado",
    featured: true,
    price: "R$ 497,00",
    modules: 8,
  },
  {
    id: "inteligencia-artificial",
    title: "Inteligência Artificial para Negócios",
    description: "Descubra como implementar IA em seu negócio para aumentar produtividade e resultados.",
    image: "/FormatBot/images/analiseDeDados.png",
    duration: "30 horas",
    students: 980,
    rating: 4.7,
    level: "Intermediário",
    featured: false,
    price: "R$ 597,00",
    modules: 6,
  },
  {
    id: "cloud-computing",
    title: "Cloud Computing na Prática",
    description: "Domine as principais plataformas de cloud e aprenda a migrar sua infraestrutura para a nuvem.",
    image: "/FormatBot/images/cloud.png",
    duration: "35 horas",
    students: 850,
    rating: 4.9,
    level: "Intermediário a Avançado",
    featured: true,
    price: "R$ 647,00",
    modules: 7,
  },
  {
    id: "seguranca-digital",
    title: "Segurança Digital Essencial",
    description: "Proteja sua empresa contra ameaças cibernéticas com este curso completo de segurança.",
    image: "/placeholder.svg?height=400&width=600",
    duration: "25 horas",
    students: 720,
    rating: 4.6,
    level: "Todos os níveis",
    featured: false,
    price: "R$ 447,00",
    modules: 5,
  },
  {
    id: "desenvolvimento-chatbots",
    title: "Desenvolvimento de Chatbots",
    description: "Crie chatbots inteligentes para automatizar atendimento e melhorar a experiência do cliente.",
    image: "/placeholder.svg?height=400&width=600",
    duration: "20 horas",
    students: 650,
    rating: 4.7,
    level: "Intermediário",
    featured: false,
    price: "R$ 397,00",
    modules: 4,
  },
  {
    id: "analise-dados",
    title: "Análise de Dados para Gestores",
    description: "Aprenda a interpretar dados e tomar decisões estratégicas baseadas em informações concretas.",
    image: "/FormatBot/images/analiseDeDados.png",
    duration: "28 horas",
    students: 890,
    rating: 4.8,
    level: "Iniciante a Intermediário",
    featured: true,
    price: "R$ 547,00",
    modules: 6,
  },
]

export default function CursosPage() {
  return (
    <div className="bg-zinc-900 min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Nossos Cursos</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Capacite-se com cursos de alta qualidade ministrados por especialistas do mercado
          </p>
        </div>

        {/* Featured Courses */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
            <Star className="mr-2 h-6 w-6 text-yellow-400 fill-yellow-400" />
            Cursos em Destaque
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {courses
              .filter((course) => course.featured)
              .map((course) => (
                <Card key={course.id} className="bg-zinc-800 border-zinc-700 overflow-hidden">
                  <div className="relative h-48">
                    <Image src={course.image || "/placeholder.svg"} alt={course.title} fill className="object-cover" />
                    <div className="absolute top-2 right-2">
                      <Badge className="bg-yellow-500 hover:bg-yellow-600">Destaque</Badge>
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle className="text-white">{course.title}</CardTitle>
                    <CardDescription className="text-gray-400">{course.level}</CardDescription>
                  </CardHeader>

                  <CardContent>
                    <p className="text-gray-300 mb-4">{course.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                      <div className="flex items-center">
                        <Clock className="mr-1 h-4 w-4" />
                        {course.duration}
                      </div>
                      <div className="flex items-center">
                        <Users className="mr-1 h-4 w-4" />
                        {course.students} alunos
                      </div>
                      <div className="flex items-center">
                        <Star className="mr-1 h-4 w-4 text-yellow-400" />
                        {course.rating}
                      </div>
                      <div className="flex items-center">
                        <BookOpen className="mr-1 h-4 w-4" />
                        {course.modules} módulos
                      </div>
                    </div>
                  </CardContent>

                  <CardFooter className="flex justify-between items-center border-t border-zinc-700 pt-4">
                    <div className="text-xl font-bold text-white">{course.price}</div>
                    <Link href={`/FormatBot/cursos/${course.id}`}>
                      <Button>Saiba Mais</Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </div>

        {/* All Courses */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-8">Todos os Cursos</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <Card key={course.id} className="bg-zinc-800 border-zinc-700">
                <CardHeader>
                  <CardTitle className="text-white">{course.title}</CardTitle>
                  <CardDescription className="text-gray-400">{course.level}</CardDescription>
                </CardHeader>

                <CardContent>
                  <p className="text-gray-300 mb-4">{course.description}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                    <div className="flex items-center">
                      <Clock className="mr-1 h-4 w-4" />
                      {course.duration}
                    </div>
                    <div className="flex items-center">
                      <Star className="mr-1 h-4 w-4 text-yellow-400" />
                      {course.rating}
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="flex justify-between items-center border-t border-zinc-700 pt-4">
                  <div className="text-xl font-bold text-white">{course.price}</div>
                  <Link href={`/FormatBot/cursos/${course.id}`}>
                    <Button variant="outline">Ver Detalhes</Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Quer um treinamento personalizado?</h2>
          <p className="text-white text-lg mb-6 max-w-2xl mx-auto">
            Oferecemos cursos e treinamentos personalizados para equipes e empresas. Entre em contato para saber mais.
          </p>
          <Link href="/FormatBot/contato">
            <Button variant="secondary" size="lg">
              Solicitar Proposta
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
