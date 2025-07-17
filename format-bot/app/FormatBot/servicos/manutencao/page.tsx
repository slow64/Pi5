import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, Clock, PenToolIcon as Tool, Shield, Cpu, HardDrive } from "lucide-react"
import Link from "next/link"

export default function ManutencaoPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4 text-center">Manutenção de Computadores</h1>
      <p className="text-lg text-center mb-12 max-w-3xl mx-auto">
        Serviços especializados de manutenção preventiva e corretiva para computadores, notebooks e servidores.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-bold mb-4">Por que escolher nosso serviço?</h2>
          <p className="mb-4">
            A Format Soluções oferece serviços de manutenção de computadores com excelência técnica e atendimento
            personalizado. Nossa equipe de técnicos certificados utiliza ferramentas e peças de qualidade para garantir
            o melhor desempenho do seu equipamento.
          </p>
          <p className="mb-4">
            Realizamos diagnósticos precisos e solucionamos problemas de hardware e software com agilidade, minimizando
            o tempo de inatividade dos seus equipamentos.
          </p>
          <p>
            Atendemos tanto usuários domésticos quanto empresas, com planos personalizados de manutenção preventiva e
            corretiva.
          </p>

          <div className="mt-6 space-y-4">
            <div className="flex items-start">
              <CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-2" />
              <div>
                <h3 className="font-medium">Técnicos Certificados</h3>
                <p className="text-sm text-muted-foreground">
                  Nossa equipe possui certificações e treinamentos específicos para cada tipo de equipamento.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-2" />
              <div>
                <h3 className="font-medium">Garantia de Serviço</h3>
                <p className="text-sm text-muted-foreground">
                  Todos os nossos serviços possuem garantia, assegurando sua tranquilidade.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-2" />
              <div>
                <h3 className="font-medium">Atendimento Rápido</h3>
                <p className="text-sm text-muted-foreground">
                  Priorizamos a agilidade no atendimento para minimizar o tempo de inatividade.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-2" />
              <div>
                <h3 className="font-medium">Peças Originais</h3>
                <p className="text-sm text-muted-foreground">
                  Utilizamos apenas componentes de qualidade e com garantia do fabricante.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <img
            src="/FormatBot/images/manutencao.jpg"
            alt="Técnico realizando manutenção em computador"
            className="rounded-lg shadow-lg max-w-full h-auto"
          />
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Nossos Serviços de Manutenção</h2>
        <Tabs defaultValue="preventiva" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="preventiva">Manutenção Preventiva</TabsTrigger>
            <TabsTrigger value="corretiva">Manutenção Corretiva</TabsTrigger>
          </TabsList>
          <TabsContent value="preventiva" className="mt-6">
            <Card>
              <CardHeader>
                <div className="flex items-center mb-2">
                  <Shield className="h-6 w-6 text-primary mr-2" />
                  <CardTitle>Manutenção Preventiva</CardTitle>
                </div>
                <CardDescription>
                  Serviços regulares para evitar problemas e prolongar a vida útil do seu equipamento.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-2" />
                    <div>
                      <h3 className="font-medium">Limpeza Interna</h3>
                      <p className="text-sm text-muted-foreground">
                        Remoção de poeira e sujeira dos componentes internos.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-2" />
                    <div>
                      <h3 className="font-medium">Limpeza Externa</h3>
                      <p className="text-sm text-muted-foreground">
                        Higienização de teclado, mouse, gabinete e monitor.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-2" />
                    <div>
                      <h3 className="font-medium">Verificação de Temperatura</h3>
                      <p className="text-sm text-muted-foreground">Análise e correção de problemas de aquecimento.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-2" />
                    <div>
                      <h3 className="font-medium">Atualização de Drivers</h3>
                      <p className="text-sm text-muted-foreground">Instalação das versões mais recentes dos drivers.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-2" />
                    <div>
                      <h3 className="font-medium">Verificação de Disco</h3>
                      <p className="text-sm text-muted-foreground">
                        Análise de integridade e desfragmentação do disco rígido.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-2" />
                    <div>
                      <h3 className="font-medium">Remoção de Programas Desnecessários</h3>
                      <p className="text-sm text-muted-foreground">Limpeza de softwares que prejudicam o desempenho.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="corretiva" className="mt-6">
            <Card>
              <CardHeader>
                <div className="flex items-center mb-2">
                  <Tool className="h-6 w-6 text-primary mr-2" />
                  <CardTitle>Manutenção Corretiva</CardTitle>
                </div>
                <CardDescription>Soluções para problemas já existentes em seu equipamento.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-2" />
                    <div>
                      <h3 className="font-medium">Diagnóstico de Problemas</h3>
                      <p className="text-sm text-muted-foreground">Identificação precisa da causa do problema.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-2" />
                    <div>
                      <h3 className="font-medium">Reparo de Hardware</h3>
                      <p className="text-sm text-muted-foreground">
                        Conserto ou substituição de componentes defeituosos.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-2" />
                    <div>
                      <h3 className="font-medium">Recuperação de Dados</h3>
                      <p className="text-sm text-muted-foreground">Resgate de informações de discos com problemas.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-2" />
                    <div>
                      <h3 className="font-medium">Remoção de Vírus</h3>
                      <p className="text-sm text-muted-foreground">
                        Eliminação de malwares, vírus e programas maliciosos.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-2" />
                    <div>
                      <h3 className="font-medium">Reinstalação de Sistema</h3>
                      <p className="text-sm text-muted-foreground">Formatação e instalação do sistema operacional.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 mr-2" />
                    <div>
                      <h3 className="font-medium">Upgrade de Componentes</h3>
                      <p className="text-sm text-muted-foreground">Atualização de hardware para melhor desempenho.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <Card className="text-center p-6">
          <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
          <CardTitle className="mb-2">Atendimento Rápido</CardTitle>
          <p>Diagnóstico em até 24 horas após a solicitação do serviço.</p>
        </Card>

        <Card className="text-center p-6">
          <Cpu className="h-12 w-12 text-primary mx-auto mb-4" />
          <CardTitle className="mb-2">Técnicos Especializados</CardTitle>
          <p>Profissionais certificados com ampla experiência em manutenção.</p>
        </Card>

        <Card className="text-center p-6">
          <HardDrive className="h-12 w-12 text-primary mx-auto mb-4" />
          <CardTitle className="mb-2">Peças Originais</CardTitle>
          <p>Utilizamos apenas componentes de qualidade com garantia.</p>
        </Card>
      </div>

      <div className="bg-muted p-8 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Solicite um Orçamento</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Entre em contato conosco para um diagnóstico personalizado e um orçamento sem compromisso.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/FormatBot/contato">
            <Button size="lg">Solicitar orçamento</Button>
          </Link>
          <Link href="/FormatBot/servicos">
            <Button variant="outline" size="lg">
              Ver outros serviços
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
