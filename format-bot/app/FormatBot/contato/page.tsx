"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin, Phone, Mail, Clock, MessageSquare, Building, User, CheckCircle } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function ContatoPage() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
    service: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Mensagem enviada com sucesso!",
      description: "Entraremos em contato em breve.",
    })

    setIsSuccess(true)
    setIsSubmitting(false)

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
        service: "",
      })
      setIsSuccess(false)
    }, 3000)
  }

  return (
    <div className="bg-zinc-900 min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Entre em Contato</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Estamos prontos para ajudar a transformar seu negócio com tecnologia
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <Card className="bg-zinc-800 border-zinc-700 h-full">
              <CardHeader>
                <CardTitle className="text-white">Informações de Contato</CardTitle>
                <CardDescription className="text-gray-400">Várias formas de entrar em contato conosco</CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-500/10 p-3 rounded-full">
                    <MapPin className="h-5 w-5 text-purple-500" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white">Endereço</h3>
                    <p className="text-gray-400">Rua General Osório, 189 - sala 03, Centro</p>
                    <p className="text-gray-400">Patos de Minas - MG, 38700-114</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-500/10 p-3 rounded-full">
                    <Phone className="h-5 w-5 text-purple-500" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white">Telefone</h3>
                    <p className="text-gray-400">(34) 99225-7630</p>
                    <p className="text-gray-400">(34) 99225-7630 (WhatsApp)</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-500/10 p-3 rounded-full">
                    <Mail className="h-5 w-5 text-purple-500" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white">Email</h3>
                    <p className="text-gray-400">contato@formatasolucoes.com.br</p>
                    <p className="text-gray-400">suporte@formatasolucoes.com.br</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-500/10 p-3 rounded-full">
                    <Clock className="h-5 w-5 text-purple-500" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white">Horário de Atendimento</h3>
                    <p className="text-gray-400">Segunda a Sexta: 8h às 12h, 13h às 19h</p>
                    <p className="text-gray-400">Sábado: 8h às 12h</p>
                  </div>
                </div>

                <div className="pt-6 border-t border-zinc-700">
                  <h3 className="font-medium text-white mb-4">Nos siga nas redes sociais</h3>
                  <div className="flex space-x-4">
                    <a href="https://www.facebook.com/formatsolucoes" className="bg-zinc-700 p-2 rounded-full hover:bg-purple-600 transition-colors">
                      <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a> 
                    <a href="https://www.instagram.com/formatsolucoes/" className="bg-zinc-700 p-2 rounded-full hover:bg-purple-600 transition-colors">
                      <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                    <a href="https://www.youtube.com/@formatsolucoes1979" className="bg-zinc-700 p-2 rounded-full hover:bg-purple-600 transition-colors">
                      <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="message" className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-zinc-800">
                <TabsTrigger value="message" className="data-[state=active]:bg-purple-600">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Enviar Mensagem
                </TabsTrigger>
                <TabsTrigger value="quote" className="data-[state=active]:bg-purple-600">
                  <Building className="mr-2 h-4 w-4" />
                  Solicitar Orçamento
                </TabsTrigger>
              </TabsList>

              <TabsContent value="message">
                <Card className="bg-zinc-800 border-zinc-700">
                  <CardHeader>
                    <CardTitle className="text-white">Envie uma Mensagem</CardTitle>
                    <CardDescription className="text-gray-400">
                      Preencha o formulário abaixo e entraremos em contato em breve
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    {isSuccess ? (
                      <div className="bg-green-900/20 border border-green-500 rounded-lg p-6 text-center">
                        <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-white mb-2">Mensagem Enviada!</h3>
                        <p className="text-gray-300">
                          Obrigado por entrar em contato. Nossa equipe responderá em breve.
                        </p>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="name" className="text-white">
                              Nome completo
                            </Label>
                            <div className="relative">
                              <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                              <Input
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Seu nome"
                                className="bg-zinc-700 border-zinc-600 pl-10"
                                required
                              />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="email" className="text-white">
                              Email
                            </Label>
                            <div className="relative">
                              <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                              <Input
                                id="email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="seu@email.com"
                                className="bg-zinc-700 border-zinc-600 pl-10"
                                required
                              />
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="phone" className="text-white">
                              Telefone
                            </Label>
                            <div className="relative">
                              <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                              <Input
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="(00) 00000-0000"
                                className="bg-zinc-700 border-zinc-600 pl-10"
                              />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="subject" className="text-white">
                              Assunto
                            </Label>
                            <Input
                              id="subject"
                              name="subject"
                              value={formData.subject}
                              onChange={handleChange}
                              placeholder="Assunto da mensagem"
                              className="bg-zinc-700 border-zinc-600"
                              required
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="message" className="text-white">
                            Mensagem
                          </Label>
                          <Textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Como podemos ajudar?"
                            className="bg-zinc-700 border-zinc-600 min-h-[120px]"
                            required
                          />
                        </div>

                        <Button
                          type="submit"
                          className="w-full bg-gradient-to-r from-purple-600 to-pink-500"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                        </Button>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="quote">
                <Card className="bg-zinc-800 border-zinc-700">
                  <CardHeader>
                    <CardTitle className="text-white">Solicitar Orçamento</CardTitle>
                    <CardDescription className="text-gray-400">
                      Informe suas necessidades para recebermos uma proposta personalizada
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    {isSuccess ? (
                      <div className="bg-green-900/20 border border-green-500 rounded-lg p-6 text-center">
                        <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-white mb-2">Solicitação Enviada!</h3>
                        <p className="text-gray-300">
                          Obrigado pelo interesse. Entraremos em contato em breve com seu orçamento.
                        </p>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="name" className="text-white">
                              Nome completo
                            </Label>
                            <Input
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              placeholder="Seu nome"
                              className="bg-zinc-700 border-zinc-600"
                              required
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="email" className="text-white">
                              Email
                            </Label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="seu@email.com"
                              className="bg-zinc-700 border-zinc-600"
                              required
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="phone" className="text-white">
                              Telefone
                            </Label>
                            <Input
                              id="phone"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              placeholder="(00) 00000-0000"
                              className="bg-zinc-700 border-zinc-600"
                              required
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="company" className="text-white">
                              Empresa
                            </Label>
                            <Input
                              id="company"
                              name="company"
                              value={formData.company}
                              onChange={handleChange}
                              placeholder="Nome da empresa"
                              className="bg-zinc-700 border-zinc-600"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="service" className="text-white">
                            Serviço de interesse
                          </Label>
                          <Select
                            value={formData.service}
                            onValueChange={(value) => handleSelectChange("service", value)}
                          >
                            <SelectTrigger className="bg-zinc-700 border-zinc-600">
                              <SelectValue placeholder="Selecione um serviço" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="desenvolvimento">Desenvolvimento de Software</SelectItem>
                              <SelectItem value="infraestrutura">Infraestrutura de TI</SelectItem>
                              <SelectItem value="cloud">Soluções em Cloud</SelectItem>
                              <SelectItem value="seguranca">Segurança Digital</SelectItem>
                              <SelectItem value="consultoria">Consultoria em TI</SelectItem>
                              <SelectItem value="outro">Outro</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="message" className="text-white">
                            Detalhes do projeto
                          </Label>
                          <Textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Descreva suas necessidades e objetivos"
                            className="bg-zinc-700 border-zinc-600 min-h-[120px]"
                            required
                          />
                        </div>

                        <Button
                          type="submit"
                          className="w-full bg-gradient-to-r from-purple-600 to-pink-500"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? "Enviando..." : "Solicitar Orçamento"}
                        </Button>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* Map */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">Nossa Localização</h2>
          <div className="rounded-lg overflow-hidden h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3486.224328063881!2d-46.5161775!3d-18.589037699999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ae61c2bbe94ca7%3A0x31c9094ca510d883!2zRm9ybWF0IFNvbHXDp8O1ZXM!5e1!3m2!1spt-BR!2sbr!4v1748646385177!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              title="Mapa da localização da Format Soluções"
            ></iframe>
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-zinc-800 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Perguntas Frequentes</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-zinc-700 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-3">Qual o horário de atendimento?</h3>
              <p className="text-gray-300">
                Nosso horário de atendimento é de segunda a sexta, das 9h às 18h, e aos sábados das 9h às 13h.
              </p>
            </div>

            <div className="bg-zinc-700 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-3">Como solicitar um orçamento?</h3>
              <p className="text-gray-300">
                Você pode solicitar um orçamento através do formulário em nossa página de contato, por telefone ou
                e-mail.
              </p>
            </div>

            <div className="bg-zinc-700 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-3">Vocês atendem em todo o Brasil?</h3>
              <p className="text-gray-300">
                Sim, oferecemos serviços remotos para todo o Brasil e presenciais em São Paulo e região metropolitana.
              </p>
            </div>

            <div className="bg-zinc-700 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-3">Qual o prazo para resposta de contatos?</h3>
              <p className="text-gray-300">
                Respondemos a todos os contatos em até 24 horas úteis, mas geralmente muito antes disso.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
