"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarDays, Clock, User, ArrowRight, Search, Tag } from "lucide-react"

const blogPosts = [
  {
    id: "inteligencia-artificial-negocios",
    title: "Como a Inteligência Artificial está transformando o atendimento ao cliente",
    excerpt:
      "Descubra como chatbots e assistentes virtuais estão revolucionando a forma como as empresas se comunicam com seus clientes.",
    image: "/FormatBot/images/blog.jpg",
    date: "10 Mai 2023",
    author: "Ana Silva",
    authorImage: "/FormatBot/images/AnaSilva.png",
    readTime: "5 min",
    category: "Inteligência Artificial",
    featured: true,
    tags: ["IA", "Chatbots", "Atendimento", "Automação"],
  },
  {
    id: "tendencias-desenvolvimento-web",
    title: "5 tendências de desenvolvimento web para ficar de olho em 2023",
    excerpt:
      "Conheça as principais tecnologias e práticas que estão moldando o futuro do desenvolvimento web neste ano.",
    image: "/FormatBot/images/blog.jpg",
    date: "28 Abr 2023",
    author: "Rafael Oliveira",
    authorImage: "/FormatBot/images/Rafael.png",
    readTime: "7 min",
    category: "Desenvolvimento Web",
    featured: false,
    tags: ["Web", "Frontend", "Tendências", "JavaScript"],
  },
  {
    id: "seguranca-digital-empresas",
    title: "Segurança digital: como proteger sua empresa contra ataques cibernéticos",
    excerpt:
      "Aprenda as melhores práticas para garantir a segurança dos dados e sistemas da sua empresa no ambiente digital.",
    image: "/FormatBot/images/blog.jpg",
    date: "15 Abr 2023",
    author: "Carlos Mendes",
    authorImage: "/FormatBot/images/CarlosMendes.png",
    readTime: "6 min",
    category: "Segurança Digital",
    featured: true,
    tags: ["Segurança", "Cibersegurança", "Proteção de Dados", "Firewall"],
  },
  {
    id: "cloud-computing-vantagens",
    title: "Cloud Computing: vantagens e desafios da migração para a nuvem",
    excerpt: "Entenda os benefícios e os desafios de migrar a infraestrutura da sua empresa para a nuvem.",
    image: "/FormatBot/images/blog.jpg",
    date: "02 Abr 2023",
    author: "Pedro Alves",
    authorImage: "/FormatBot/images/Pedro.png",
    readTime: "8 min",
    category: "Cloud Computing",
    featured: false,
    tags: ["Cloud", "AWS", "Azure", "Migração"],
  },
  {
    id: "data-science-insights",
    title: "Data Science: como transformar dados em insights valiosos para seu negócio",
    excerpt:
      "Descubra como a análise de dados pode ajudar sua empresa a tomar decisões mais inteligentes e estratégicas.",
    image: "/FormatBot/images/blog.jpg",
    date: "25 Mar 2023",
    author: "Lucas Ferreira",
    authorImage: "/FormatBot/images/LucasFerreira.png",
    readTime: "6 min",
    category: "Análise de Dados",
    featured: false,
    tags: ["Data Science", "Big Data", "Analytics", "Business Intelligence"],
  },
  {
    id: "desenvolvimento-mobile-abordagens",
    title: "Desenvolvimento mobile: nativo, híbrido ou PWA?",
    excerpt:
      "Conheça as diferenças entre as principais abordagens de desenvolvimento mobile e descubra qual é a melhor para o seu projeto.",
    image: "/FormatBot/images/blog.jpg",
    date: "18 Mar 2023",
    author: "Mariana Santos",
    authorImage: "/FormatBot/images/Mariana.png",
    readTime: "7 min",
    category: "Desenvolvimento Mobile",
    featured: false,
    tags: ["Mobile", "Android", "iOS", "React Native", "PWA"],
  },
]

const categories = [
  "Todos",
  "Inteligência Artificial",
  "Desenvolvimento Web",
  "Segurança Digital",
  "Cloud Computing",
  "Análise de Dados",
  "Desenvolvimento Mobile",
]

const popularTags = ["IA", "Cloud", "Segurança", "Web", "Mobile", "Data Science", "DevOps", "UX/UI"]

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState("Todos")

  const filteredPosts = blogPosts.filter((post) => {
    // Filter by category
    const categoryMatch = activeCategory === "Todos" || post.category === activeCategory

    // Filter by search query
    const searchMatch =
      searchQuery === "" ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))

    return categoryMatch && searchMatch
  })

  const featuredPosts = blogPosts.filter((post) => post.featured)

  return (
    <div className="bg-zinc-900 min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Blog Format Soluções</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Artigos, tutoriais e novidades sobre tecnologia e inovação
          </p>
        </div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8">Artigos em Destaque</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.slice(0, 2).map((post) => (
                <Card key={post.id} className="bg-zinc-800 border-zinc-700 overflow-hidden">
                  <div className="relative h-64">
                    <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-purple-600 hover:bg-purple-700">{post.category}</Badge>
                    </div>
                  </div>

                  <CardHeader>
                    <div className="flex items-center gap-4 mb-2">
                      <div className="relative w-8 h-8 rounded-full overflow-hidden">
                        <Image
                          src={post.authorImage || "/placeholder.svg"}
                          alt={post.author}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex items-center text-sm text-gray-400">
                        <span className="mr-2">{post.author}</span>
                        <span className="flex items-center">
                          <CalendarDays className="h-3 w-3 mr-1" />
                          {post.date}
                        </span>
                        <span className="flex items-center ml-2">
                          <Clock className="h-3 w-3 mr-1" />
                          {post.readTime}
                        </span>
                      </div>
                    </div>
                    <CardTitle className="text-2xl text-white hover:text-purple-400 transition-colors">
                      <Link href={`/FormatBot/blog/${post.id}`}>{post.title}</Link>
                    </CardTitle>
                  </CardHeader>

                  <CardContent>
                    <p className="text-gray-300 mb-4">{post.excerpt}</p>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.slice(0, 3).map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-gray-300 border-gray-600">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>

                  <CardFooter>
                    <Link
                      href={`/FormatBot/blog/${post.id}`}
                      className="text-purple-400 flex items-center hover:text-purple-300 transition-colors"
                    >
                      Ler artigo completo <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Search and Categories */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full md:w-auto">
              <TabsList className="bg-zinc-800 h-auto flex flex-wrap">
                {categories.map((category) => (
                  <TabsTrigger key={category} value={category} className="data-[state=active]:bg-purple-600">
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>

            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Buscar artigos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-zinc-800 border-zinc-700 pl-10"
              />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Blog Posts */}
          <div className="lg:col-span-2">
            {filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredPosts.map((post) => (
                  <Card key={post.id} className="bg-zinc-800 border-zinc-700 overflow-hidden">
                    <div className="relative h-48">
                      <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                      <div className="absolute top-2 right-2">
                        <Badge className="bg-zinc-900/80 hover:bg-zinc-900 backdrop-blur-sm">{post.category}</Badge>
                      </div>
                    </div>

                    <CardHeader className="pb-2">
                      <div className="flex items-center text-sm text-gray-400 mb-2">
                        <User className="h-3 w-3 mr-1" />
                        <span className="mr-2">{post.author}</span>
                        <CalendarDays className="h-3 w-3 mr-1" />
                        <span>{post.date}</span>
                      </div>
                      <CardTitle className="text-xl text-white hover:text-purple-400 transition-colors">
                        <Link href={`/FormatBot/blog/${post.id}`}>{post.title}</Link>
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="pb-2">
                      <p className="text-gray-300 line-clamp-2">{post.excerpt}</p>
                    </CardContent>

                    <CardFooter className="flex justify-between items-center">
                      <div className="flex items-center text-sm text-gray-400">
                        <Clock className="h-3 w-3 mr-1" />
                        <span>{post.readTime}</span>
                      </div>
                      <Link
                        href={`/FormatBot/blog/${post.id}`}
                        className="text-purple-400 hover:text-purple-300 transition-colors"
                      >
                        Ler mais
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="bg-zinc-800 rounded-lg p-8 text-center">
                <h3 className="text-xl font-bold text-white mb-2">Nenhum artigo encontrado</h3>
                <p className="text-gray-300 mb-4">
                  Não encontramos artigos que correspondam à sua busca. Tente outros termos ou categorias.
                </p>
                <Button
                  onClick={() => {
                    setSearchQuery("")
                    setActiveCategory("Todos")
                  }}
                >
                  Ver todos os artigos
                </Button>
              </div>
            )}

            {filteredPosts.length > 0 && (
              <div className="flex justify-center mt-8">
                <Button variant="outline" className="bg-zinc-800 border-zinc-700 text-white hover:bg-zinc-700">
                  Carregar mais artigos
                </Button>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Newsletter */}
            <Card className="bg-zinc-800 border-zinc-700">
              <CardHeader>
                <CardTitle className="text-white">Newsletter</CardTitle>
                <CardDescription className="text-gray-400">
                  Receba as últimas novidades diretamente no seu email
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <Input placeholder="Seu nome" className="bg-zinc-700 border-zinc-600" />
                  <Input placeholder="Seu melhor email" type="email" className="bg-zinc-700 border-zinc-600" />
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-500">Inscrever-se</Button>
                </form>
              </CardContent>
            </Card>

            {/* Popular Tags */}
            <Card className="bg-zinc-800 border-zinc-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Tag className="mr-2 h-5 w-5" />
                  Tags Populares
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="text-gray-300 border-gray-600 hover:bg-purple-600 hover:text-white hover:border-transparent cursor-pointer transition-colors"
                      onClick={() => setSearchQuery(tag)}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Posts */}
            <Card className="bg-zinc-800 border-zinc-700">
              <CardHeader>
                <CardTitle className="text-white">Artigos Recentes</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {blogPosts.slice(0, 4).map((post) => (
                  <div key={post.id} className="flex gap-3">
                    <div className="relative w-16 h-16 flex-shrink-0 rounded-md overflow-hidden">
                      <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                    </div>
                    <div>
                      <Link
                        href={`/FormatBot/blog/${post.id}`}
                        className="text-white hover:text-purple-400 transition-colors font-medium line-clamp-2 text-sm"
                      >
                        {post.title}
                      </Link>
                      <div className="flex items-center text-xs text-gray-400 mt-1">
                        <CalendarDays className="h-3 w-3 mr-1" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
