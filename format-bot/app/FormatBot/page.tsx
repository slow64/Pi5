"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Code, Server, Database, Shield, Smartphone } from "lucide-react"

export default function HomePage() {
  return (
    <div className="bg-zinc-900 min-h-screen">
      {/* Hero Section - Imagem ocupando toda a largura */}
      <section className="relative h-screen w-full">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/FormatBot/images/homeformat.jpg')",
            filter: "brightness(0.4)",
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Soluções em{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text">TI</span>{" "}
              para sua Empresa
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transforme seu negócio com tecnologia de ponta e suporte especializado
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/FormatBot/servicos">
                <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-medium rounded-md hover:opacity-90 transition-opacity">
                  Nossos Serviços
                </button>
              </Link>
              <Link href="/FormatBot/contato">
                <button className="px-6 py-3 bg-transparent border border-white text-white font-medium rounded-md hover:bg-white/10 transition-colors">
                  Fale Conosco
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Seção com imagem média e texto - espaçamentos compactados */}
      <section className="py-12 bg-zinc-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/2">
              <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/FormatBot/images/mediaHome.png"
                  alt="Soluções de TI"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Tecnologia que <span className="text-purple-500">impulsiona</span> seu crescimento
              </h2>
              <p className="text-gray-300 text-lg mb-6">
                A Format Soluções oferece serviços completos de TI para empresas de todos os portes. Nossa equipe de
                especialistas está pronta para ajudar sua empresa a alcançar todo o seu potencial através da tecnologia.
              </p>
              <p className="text-gray-300 text-lg">
                Com mais de 10 anos de experiência no mercado, desenvolvemos soluções personalizadas que atendem às
                necessidades específicas do seu negócio, garantindo eficiência, segurança e inovação.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Container com 5 tópicos expansíveis - altura maior como versão 18 */}
      <section className="py-6 bg-zinc-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-10">
            Nossas <span className="text-purple-500">Especialidades</span>
          </h2>

          <ExpandableTopicsVertical />
        </div>
      </section>

      {/* Carrossel de ícones de tecnologia - espaçamentos compactados */}
      <section className="py-12 bg-zinc-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-10">
            Tecnologias que <span className="text-purple-500">Dominamos</span>
          </h2>

          <TechCarouselCentered />
        </div>
      </section>
    </div>
  )
}

// Componente para os tópicos expansíveis na vertical
function ExpandableTopicsVertical() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const topics = [
    {
      icon: Code,
      title: "Desenvolvimento de Software",
      description:
        "Criamos soluções personalizadas para seu negócio, desde aplicativos web até sistemas completos de gestão empresarial.",
      image: "/FormatBot/images/devSoftware.png",
    },
    {
      icon: Server,
      title: "Infraestrutura de TI",
      description:
        "Projetamos e implementamos infraestruturas robustas e escaláveis para suportar as operações da sua empresa.",
      image: "/FormatBot/images/infra.png",
    },
    {
      icon: Database,
      title: "Gestão de Dados",
      description:
        "Soluções para armazenamento, processamento e análise de dados, transformando informações em insights valiosos.",
      image: "/FormatBot/images/GestaodeDados.png",
    },
    {
      icon: Shield,
      title: "Segurança Digital",
      description:
        "Protegemos seu negócio contra ameaças cibernéticas com soluções avançadas de segurança da informação.",
      image: "/FormatBot/images/segDigital.png",
    },
    {
      icon: Smartphone,
      title: "Mobilidade Empresarial",
      description:
        "Estratégias e ferramentas para garantir produtividade e segurança em ambientes de trabalho móveis e remotos.",
      image: "/FormatBot/images/mobilidade.png",
    },
  ]

  return (
    <div className="flex h-[600px] w-full">
      {topics.map((topic, index) => (
        <div
          key={index}
          className={`relative transition-all duration-300 overflow-hidden border-r last:border-r-0 border-zinc-700
            ${activeIndex === index ? "w-3/5" : "w-1/5"}
          `}
          onMouseEnter={() => setActiveIndex(index)}
          onMouseLeave={() => setActiveIndex(null)}
        >
          {/* Conteúdo compacto (visível quando não expandido) */}
          <div
            className={`h-full flex flex-col items-center transition-opacity duration-300 
              ${activeIndex === index ? "opacity-0" : "opacity-100"}
            `}
            style={{ paddingTop: "5%" }}
          >
            {/* Ícone mantido na posição original: 5% do topo */}
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center mb-4">
              <topic.icon className="h-8 w-8 text-white" />
            </div>
            <div className="flex-grow flex items-center">
              <h3 className="text-xl font-semibold text-white transform rotate-90 whitespace-nowrap">{topic.title}</h3>
            </div>
          </div>

          {/* Conteúdo expandido (visível quando expandido) */}
          <div
            className={`absolute inset-0 p-6 transition-opacity duration-300 
            ${activeIndex === index ? "opacity-100" : "opacity-0 pointer-events-none"}
          `}
            style={{ paddingTop: "4%" }}
          >
            <div className="h-full flex flex-col">
              {/* Ícone + Título na mesma linha */}
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center mr-4">
                  <topic.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-white">{topic.title}</h3>
              </div>

              {/* Layout horizontal: Texto e Imagem alinhados */}
              <div className="flex-grow flex items-start">
                {/* Texto à esquerda */}
                <div className="w-1/2 pr-4 flex items-center h-full">
                  <p className="text-gray-300 text-lg leading-relaxed">{topic.description}</p>
                </div>

                {/* Imagem quadrada à direita (1600x1600) */}
                <div className="w-1/2 h-full flex items-center justify-center">
                  <div
                    className="w-full aspect-square relative rounded-lg overflow-hidden"
                    style={{ maxHeight: "85%" }}
                  >
                    <Image src={topic.image || "/placeholder.svg"} alt={topic.title} fill className="object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

// Componente para o carrossel de tecnologias centralizado
function TechCarouselCentered() {
  const [activeIndex, setActiveIndex] = useState(2) // Começa com o item do meio ativo
  const carouselRef = useRef<HTMLDivElement>(null)

  const technologies = [
    { icon: "/placeholder.svg?height=80&width=80", name: "React", realIcon: "⚛️" },
    { icon: "/placeholder.svg?height=80&width=80", name: "Node.js", realIcon: "🟢" },
    { icon: "/placeholder.svg?height=80&width=80", name: "Python", realIcon: "🐍" },
    { icon: "/placeholder.svg?height=80&width=80", name: "AWS", realIcon: "☁️" },
    { icon: "/placeholder.svg?height=80&width=80", name: "Docker", realIcon: "🐳" },
    { icon: "/placeholder.svg?height=80&width=80", name: "Kubernetes", realIcon: "⎈" },
    { icon: "/placeholder.svg?height=80&width=80", name: "Angular", realIcon: "🅰️" },
    { icon: "/placeholder.svg?height=80&width=80", name: "Vue.js", realIcon: "🟩" },
    { icon: "/placeholder.svg?height=80&width=80", name: "MongoDB", realIcon: "🍃" },
    { icon: "/placeholder.svg?height=80&width=80", name: "SQL Server", realIcon: "🗄️" },
    { icon: "/placeholder.svg?height=80&width=80", name: "Java", realIcon: "☕" },
    { icon: "/placeholder.svg?height=80&width=80", name: "PHP", realIcon: "🐘" },
  ]

  // Função para avançar o carrossel
  const nextItem = () => {
    setActiveIndex((prev) => (prev + 1) % technologies.length)
  }

  // Função para voltar o carrossel
  const prevItem = () => {
    setActiveIndex((prev) => (prev - 1 + technologies.length) % technologies.length)
  }

  // Efeito para rotação automática
  useEffect(() => {
    const interval = setInterval(() => {
      nextItem()
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  // Função para obter os 5 itens visíveis (2 antes, o atual e 2 depois)
  const getVisibleItems = () => {
    const items = []
    for (let i = -2; i <= 2; i++) {
      const index = (activeIndex + i + technologies.length) % technologies.length
      items.push({
        ...technologies[index],
        position: i,
      })
    }
    return items
  }

  return (
    <div className="relative max-w-3xl mx-auto">
      <div className="flex justify-center items-center h-40">
        {getVisibleItems().map((item, index) => (
          <div
            key={index}
            className={`transition-all duration-300 flex flex-col items-center mx-4
              ${item.position === 0 ? "scale-125 opacity-100" : "scale-100 opacity-70"}
            `}
          >
            <div className="w-20 h-20 rounded-full bg-zinc-700 flex items-center justify-center mb-3 text-4xl">
              {item.realIcon}
            </div>
            {item.position === 0 && <span className="text-white font-medium">{item.name}</span>}
          </div>
        ))}
      </div>

      <button
        onClick={prevItem}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-zinc-700 hover:bg-zinc-600 text-white rounded-full w-10 h-10 flex items-center justify-center"
        aria-label="Anterior"
      >
        ←
      </button>
      <button
        onClick={nextItem}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-zinc-700 hover:bg-zinc-600 text-white rounded-full w-10 h-10 flex items-center justify-center"
        aria-label="Próximo"
      >
        →
      </button>
    </div>
  )
}
