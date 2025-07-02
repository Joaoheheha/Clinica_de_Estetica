import Image from "next/image"
import { Star, Shield, Users, Award, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function BeautyClinicLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-rose-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">B</span>
              </div>
              <span className="text-2xl font-bold text-gray-900">Beauty</span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <span className="text-gray-600">📞 (11) 9999-9999</span>
              <Badge variant="secondary" className="bg-rose-100 text-rose-700">
                Avaliação Gratuita
              </Badge>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Redescubra Sua <span className="text-rose-500">Beleza Natural</span> com Nossa{" "}
                <span className="text-rose-500">Avaliação Gratuita!</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Agende Hoje Mesmo e Conheça os Tratamentos Personalizados que Realçam a Sua Beleza.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg border border-rose-100">
              <p className="text-gray-700 leading-relaxed">
                Na Clínica Estética Beauty, oferecemos uma <strong className="text-rose-600">avaliação gratuita</strong>{" "}
                para entender suas necessidades específicas e recomendar os melhores tratamentos estéticos para você.
                Com nossa tecnologia avançada e uma equipe de especialistas, você estará em mãos seguras para realçar
                sua beleza natural.
              </p>
            </div>

            <Button
              size="lg"
              className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Agende Sua Avaliação Gratuita Agora! ✨
            </Button>
          </div>

          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/placeholder.svg?height=600&width=500"
                alt="Cliente sorridente e confiante após tratamento estético"
                width={500}
                height={600}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-rose-500/20 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-lg">
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm font-semibold text-gray-700">4.7/5</span>
              </div>
              <p className="text-xs text-gray-600 mt-1">+150 avaliações</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Por que Escolher a Clínica Beauty?</h2>
            <p className="text-xl text-gray-600">
              Oferecemos o melhor em tratamentos estéticos com total segurança e qualidade
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-rose-100 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-rose-500" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Avaliação Gratuita</h3>
                <p className="text-gray-600 text-sm">
                  Sem custo para você, conheça nossos tratamentos e descubra como podemos ajudar.
                </p>
              </CardContent>
            </Card>

            <Card className="border-rose-100 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-rose-500" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Profissionais Especializados</h3>
                <p className="text-gray-600 text-sm">
                  Equipe composta por especialistas com ampla experiência em estética.
                </p>
              </CardContent>
            </Card>

            <Card className="border-rose-100 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-rose-500" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Tecnologia Avançada</h3>
                <p className="text-gray-600 text-sm">
                  Utilizamos os equipamentos mais modernos para garantir resultados excepcionais.
                </p>
              </CardContent>
            </Card>

            <Card className="border-rose-100 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-rose-500" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Ambiente Acolhedor</h3>
                <p className="text-gray-600 text-sm">
                  Um espaço projetado para o seu conforto e bem-estar durante cada visita.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="bg-gradient-to-r from-rose-50 to-pink-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Agende Sua Avaliação Gratuita</h2>
              <p className="text-lg text-gray-600">
                Preencha seus dados e nossa equipe entrará em contato em até 24 horas
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-gray-700 font-medium">
                    Nome Completo *
                  </Label>
                  <Input
                    id="name"
                    placeholder="Digite seu nome completo"
                    className="border-gray-300 focus:border-rose-500 focus:ring-rose-500"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-gray-700 font-medium">
                    WhatsApp *
                  </Label>
                  <Input
                    id="phone"
                    placeholder="(11) 99999-9999"
                    className="border-gray-300 focus:border-rose-500 focus:ring-rose-500"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-700 font-medium">
                  E-mail *
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  className="border-gray-300 focus:border-rose-500 focus:ring-rose-500"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="interest" className="text-gray-700 font-medium">
                  Qual tratamento te interessa?
                </Label>
                <Input
                  id="interest"
                  placeholder="Ex: Harmonização facial, preenchimento, botox..."
                  className="border-gray-300 focus:border-rose-500 focus:ring-rose-500"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-rose-500 hover:bg-rose-600 text-white py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Quero Minha Avaliação Gratuita! 💖
              </Button>

              <p className="text-xs text-gray-500 text-center">
                Seus dados estão seguros conosco. Não compartilhamos informações pessoais.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Veja o que Nossos Clientes Dizem</h2>
            <p className="text-xl text-gray-600">Histórias reais de transformação e satisfação</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-rose-100 shadow-lg">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-gray-700 text-lg mb-4 italic">
                  "Os tratamentos na Beauty transformaram minha vida! Me sinto muito mais confiante e feliz com minha
                  aparência."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-rose-600 font-semibold">JM</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Juliana M.</p>
                    <p className="text-gray-600 text-sm">Cliente há 2 anos</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-rose-100 shadow-lg">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-gray-700 text-lg mb-4 italic">
                  "Estou muito satisfeita com os resultados e o atendimento! Profissionais super atenciosos e
                  competentes."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-rose-600 font-semibold">CS</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Carla S.</p>
                    <p className="text-gray-600 text-sm">Cliente há 1 ano</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Rating Summary */}
          <div className="text-center">
            <div className="inline-flex items-center space-x-4 bg-rose-50 px-8 py-4 rounded-full">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div className="text-left">
                <p className="text-2xl font-bold text-gray-900">4.7/5</p>
                <p className="text-gray-600 text-sm">Mais de 150 avaliações</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-rose-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">B</span>
                </div>
                <span className="text-2xl font-bold">Beauty</span>
              </div>
              <p className="text-gray-400">
                Clínica especializada em tratamentos estéticos com tecnologia avançada e profissionais qualificados.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contato</h3>
              <div className="space-y-2 text-gray-400">
                <p>📞 (11) 9999-9999</p>
                <p>📧 contato@beauty.com.br</p>
                <p>📍 Rua da Beleza, 123 - São Paulo/SP</p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Certificações</h3>
              <div className="flex space-x-4">
                <Badge variant="outline" className="border-gray-600 text-gray-400">
                  ANVISA
                </Badge>
                <Badge variant="outline" className="border-gray-600 text-gray-400">
                  CRM
                </Badge>
                <Badge variant="outline" className="border-gray-600 text-gray-400">
                  ISO 9001
                </Badge>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Clínica Estética Beauty. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
