import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Linkedin, Twitter, Mail, Github, Globe } from "lucide-react"

const teamMembers = [
  {
    id: 1,
    name: "Ana Silva",
    role: "CEO & Fundadora",
    department: "Diretoria",
    image: "/FormatBot/images/AnaSilva.png",
    bio: "Com mais de 15 anos de experiência em tecnologia, Ana lidera a Format Soluções com visão inovadora e foco em resultados. Formada em Ciência da Computação com MBA em Gestão de Negócios.",
    skills: ["Liderança", "Estratégia", "Inovação", "Gestão de Negócios"],
    social: {
      linkedin: "#",
      twitter: "#",
      email: "ana@formatasolucoes.com.br",
    },
  },
  {
    id: 2,
    name: "Carlos Mendes",
    role: "CTO",
    department: "Diretoria",
    image: "/FormatBot/images/CarlosMendes.png",
    bio: "Especialista em IA e desenvolvimento de software, Carlos supervisiona todas as soluções tecnológicas da empresa. Com PhD em Inteligência Artificial, ele lidera a equipe de desenvolvimento.",
    skills: ["Inteligência Artificial", "Arquitetura de Software", "Cloud Computing", "Inovação Tecnológica"],
    social: {
      linkedin: "#",
      github: "#",
      email: "carlos@formatasolucoes.com.br",
    },
  },
  {
    id: 3,
    name: "Juliana Costa",
    role: "Diretora de Operações",
    department: "Diretoria",
    image: "/FormatBot/images/Juliana.png",
    bio: "Juliana garante que todos os projetos sejam entregues com qualidade e dentro do prazo. Com experiência em gestão de projetos e metodologias ágeis, ela coordena as equipes e processos.",
    skills: ["Gestão de Projetos", "Metodologias Ágeis", "Processos", "Liderança de Equipes"],
    social: {
      linkedin: "#",
      twitter: "#",
      email: "juliana@formatasolucoes.com.br",
    },
  },
  {
    id: 4,
    name: "Rafael Oliveira",
    role: "Líder de Desenvolvimento",
    department: "Desenvolvimento",
    image: "/FormatBot/images/Rafael.png",
    bio: "Com vasta experiência em desenvolvimento web, Rafael lidera nossa equipe de programadores. Especialista em React, Node.js e arquiteturas modernas.",
    skills: ["React", "Node.js", "TypeScript", "Arquitetura de Software"],
    social: {
      linkedin: "#",
      github: "#",
      website: "#",
      email: "rafael@formatasolucoes.com.br",
    },
  },
  {
    id: 5,
    name: "Mariana Santos",
    role: "Especialista em UX/UI",
    department: "Design",
    image: "/FormatBot/images/Mariana.png",
    bio: "Mariana transforma conceitos em interfaces intuitivas e atraentes. Com formação em Design e especialização em Experiência do Usuário, ela cria designs que combinam estética e funcionalidade.",
    skills: ["UI Design", "UX Research", "Prototipagem", "Design Systems"],
    social: {
      linkedin: "#",
      twitter: "#",
      website: "#",
      email: "mariana@formatasolucoes.com.br",
    },
  },
  {
    id: 6,
    name: "Lucas Ferreira",
    role: "Especialista em IA",
    department: "Desenvolvimento",
    image: "/FormatBot/images/LucasFerreira.png",
    bio: "Lucas desenvolve algoritmos de inteligência artificial e machine learning para nossas soluções. Com mestrado em Ciência de Dados, ele transforma dados em insights valiosos.",
    skills: ["Machine Learning", "Python", "Data Science", "Deep Learning"],
    social: {
      linkedin: "#",
      github: "#",
      email: "lucas@formatasolucoes.com.br",
    },
  },
  {
    id: 7,
    name: "Fernanda Lima",
    role: "Gerente de Projetos",
    department: "Operações",
    image: "/FormatBot/images/Fernanda.png",
    bio: "Fernanda coordena os projetos da Format Soluções, garantindo que sejam entregues no prazo e dentro do orçamento. Certificada em PMP e metodologias ágeis.",
    skills: ["Gestão de Projetos", "Scrum", "Kanban", "Liderança"],
    social: {
      linkedin: "#",
      twitter: "#",
      email: "fernanda@formatasolucoes.com.br",
    },
  },
  {
    id: 8,
    name: "Pedro Alves",
    role: "Especialista em Cloud",
    department: "Infraestrutura",
    image: "/FormatBot/images/Pedro.png",
    bio: "Pedro é responsável pelas soluções de infraestrutura em nuvem da Format Soluções. Certificado em AWS, Azure e Google Cloud, ele projeta arquiteturas escaláveis e seguras.",
    skills: ["AWS", "Azure", "Google Cloud", "DevOps", "Kubernetes"],
    social: {
      linkedin: "#",
      github: "#",
      website: "#",
      email: "pedro@formatasolucoes.com.br",
    },
  },
]

const departments = ["Todos", "Diretoria", "Desenvolvimento", "Design", "Operações", "Infraestrutura"]

export default function EquipePage() {
  return (
    <div className="bg-zinc-900 min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Nossa Equipe</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Conheça os profissionais talentosos que fazem a Format Soluções acontecer
          </p>
        </div>

        {/* Team Tabs */}
        <Tabs defaultValue="Todos" className="mb-16">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-zinc-800">
              {departments.map((dept) => (
                <TabsTrigger key={dept} value={dept} className="data-[state=active]:bg-purple-600">
                  {dept}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {departments.map((dept) => (
            <TabsContent key={dept} value={dept}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {teamMembers
                  .filter((member) => dept === "Todos" || member.department === dept)
                  .map((member) => (
                    <TeamMemberCard key={member.id} member={member} />
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Team Values */}
        <div className="bg-zinc-800 rounded-lg p-8 mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">Nossos Valores de Equipe</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-zinc-700 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-4">Colaboração</h3>
              <p className="text-gray-300">
                Acreditamos que as melhores soluções surgem quando trabalhamos juntos, combinando diferentes
                perspectivas e habilidades.
              </p>
            </div>

            <div className="bg-zinc-700 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-4">Inovação</h3>
              <p className="text-gray-300">
                Buscamos constantemente novas ideias e abordagens para resolver problemas e criar soluções que façam a
                diferença.
              </p>
            </div>

            <div className="bg-zinc-700 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-4">Excelência</h3>
              <p className="text-gray-300">
                Comprometemo-nos com os mais altos padrões de qualidade em tudo o que fazemos, buscando sempre superar
                expectativas.
              </p>
            </div>
          </div>
        </div>

        {/* Join Our Team */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Junte-se à Nossa Equipe</h2>
          <p className="text-white text-lg mb-6 max-w-2xl mx-auto">
            Estamos sempre em busca de talentos apaixonados por tecnologia e inovação. Confira nossas vagas abertas e
            faça parte do nosso time.
          </p>
          <button className="bg-white text-purple-600 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors">
            Ver Vagas Disponíveis
          </button>
        </div>
      </div>
    </div>
  )
}

function TeamMemberCard({ member }) {
  return (
    <Card className="bg-zinc-800 border-zinc-700 overflow-hidden hover:shadow-lg hover:shadow-purple-500/10 transition-all">
      <div className="relative h-64">
        <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent opacity-60"></div>
        <div className="absolute bottom-4 left-4">
          <h3 className="text-xl font-bold text-white">{member.name}</h3>
          <p className="text-purple-400">{member.role}</p>
        </div>
      </div>

      <CardContent className="pt-6">
        <p className="text-gray-300 mb-4 line-clamp-3">{member.bio}</p>

        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-400 mb-2">Especialidades:</h4>
          <div className="flex flex-wrap gap-2">
            {member.skills.map((skill, index) => (
              <span key={index} className="bg-zinc-700 text-gray-300 px-2 py-1 rounded text-xs">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="flex space-x-3">
          {member.social.linkedin && (
            <a href={member.social.linkedin} className="text-gray-400 hover:text-purple-400 transition-colors">
              <Linkedin size={18} />
            </a>
          )}
          {member.social.twitter && (
            <a href={member.social.twitter} className="text-gray-400 hover:text-purple-400 transition-colors">
              <Twitter size={18} />
            </a>
          )}
          {member.social.github && (
            <a href={member.social.github} className="text-gray-400 hover:text-purple-400 transition-colors">
              <Github size={18} />
            </a>
          )}
          {member.social.website && (
            <a href={member.social.website} className="text-gray-400 hover:text-purple-400 transition-colors">
              <Globe size={18} />
            </a>
          )}
          <a href={`mailto:${member.social.email}`} className="text-gray-400 hover:text-purple-400 transition-colors">
            <Mail size={18} />
          </a>
        </div>
      </CardContent>
    </Card>
  )
}
