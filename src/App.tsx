import React, { useState } from 'react';
import { Menu, X, Leaf, MapPin, Phone, Clock, Instagram, Facebook, Mail } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-green-700" />
              <span className="text-2xl font-bold text-green-800">SANTO CAPIM</span>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('inicio')} className="text-gray-700 hover:text-green-700 transition-colors">
                Início
              </button>
              <button onClick={() => scrollToSection('sobre')} className="text-gray-700 hover:text-green-700 transition-colors">
                Sobre
              </button>
              <button onClick={() => scrollToSection('cardapio')} className="text-gray-700 hover:text-green-700 transition-colors">
                Cardápio
              </button>
              <button onClick={() => scrollToSection('contato')} className="text-gray-700 hover:text-green-700 transition-colors">
                Contato
              </button>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-gray-200 py-4">
              <nav className="flex flex-col space-y-4">
                <button onClick={() => scrollToSection('inicio')} className="text-gray-700 hover:text-green-700 transition-colors text-left">
                  Início
                </button>
                <button onClick={() => scrollToSection('sobre')} className="text-gray-700 hover:text-green-700 transition-colors text-left">
                  Sobre
                </button>
                <button onClick={() => scrollToSection('cardapio')} className="text-gray-700 hover:text-green-700 transition-colors text-left">
                  Cardápio
                </button>
                <button onClick={() => scrollToSection('contato')} className="text-gray-700 hover:text-green-700 transition-colors text-left">
                  Contato
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)'
          }}
        ></div>
        <div className="relative z-20 text-center text-white px-4">
          <div className="flex justify-center items-center mb-6">
            <Leaf className="h-16 w-16 text-green-400 mr-4" />
            <h1 className="text-5xl md:text-7xl font-bold">SANTO CAPIM</h1>
          </div>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Uma experiência gastronômica única no coração de São Paulo
          </p>
          <button 
            onClick={() => scrollToSection('cardapio')}
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
          >
            Ver Cardápio
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Nossa História</h2>
              <p className="text-lg text-gray-600 mb-6">
                O SANTO CAPIM nasceu da paixão pela culinária brasileira e pelo compromisso com ingredientes frescos e naturais. 
                Localizado no coração de Cerqueira César, oferecemos uma experiência gastronômica que celebra os sabores autênticos 
                do Brasil com um toque contemporâneo.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Nossa filosofia é simples: ingredientes de qualidade, preparo artesanal e atendimento excepcional. 
                Cada prato é cuidadosamente elaborado para proporcionar momentos únicos aos nossos clientes.
              </p>
              <div className="flex space-x-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">5+</div>
                  <div className="text-gray-600">Anos de Tradição</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">100%</div>
                  <div className="text-gray-600">Ingredientes Naturais</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=800&fit=crop"
                alt="Interior do restaurante"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="cardapio" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nosso Cardápio</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Descubra sabores únicos preparados com ingredientes selecionados e muito carinho
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Menu Item 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src="https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=400&fit=crop"
                alt="Prato especial"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Prato da Casa</h3>
                <p className="text-gray-600 mb-4">
                  Nossa especialidade com ingredientes frescos e temperos especiais que fazem a diferença.
                </p>
                <div className="text-2xl font-bold text-green-600">R$ 45,90</div>
              </div>
            </div>

            {/* Menu Item 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src="https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=400&fit=crop"
                alt="Salada gourmet"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Salada Santo Capim</h3>
                <p className="text-gray-600 mb-4">
                  Mix de folhas nobres, legumes orgânicos e molho especial da casa.
                </p>
                <div className="text-2xl font-bold text-green-600">R$ 32,90</div>
              </div>
            </div>

            {/* Menu Item 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src="https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=400&fit=crop"
                alt="Sobremesa"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Sobremesa Tradicional</h3>
                <p className="text-gray-600 mb-4">
                  Doce artesanal preparado com receita familiar e ingredientes selecionados.
                </p>
                <div className="text-2xl font-bold text-green-600">R$ 18,90</div>
              </div>
            </div>

            {/* Menu Item 4 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src="https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=400&fit=crop"
                alt="Peixe grelhado"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Peixe do Dia</h3>
                <p className="text-gray-600 mb-4">
                  Peixe fresco grelhado com acompanhamentos especiais e molho de ervas.
                </p>
                <div className="text-2xl font-bold text-green-600">R$ 52,90</div>
              </div>
            </div>

            {/* Menu Item 5 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src="https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?auto=compress&cs=tinysrgb&w=400&fit=crop"
                alt="Bebida especial"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Suco Natural</h3>
                <p className="text-gray-600 mb-4">
                  Sucos frescos preparados na hora com frutas selecionadas.
                </p>
                <div className="text-2xl font-bold text-green-600">R$ 12,90</div>
              </div>
            </div>

            {/* Menu Item 6 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=400&fit=crop"
                alt="Carne especial"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Carne Premium</h3>
                <p className="text-gray-600 mb-4">
                  Corte especial preparado no ponto ideal com acompanhamentos gourmet.
                </p>
                <div className="text-2xl font-bold text-green-600">R$ 68,90</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Contato</h2>
            <p className="text-xl text-gray-600">
              Venha nos visitar e viva uma experiência única
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Informações</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Endereço</h4>
                      <p className="text-gray-600">R. Ministro Rocha Azevedo, 471</p>
                      <p className="text-gray-600">Cerqueira César - São Paulo - SP</p>
                      <p className="text-gray-600">CEP: 01410-001</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Telefone</h4>
                      <p className="text-gray-600">(19) 3097-1518</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">E-mail</h4>
                      <p className="text-gray-600">contato@santocapim.com.br</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Clock className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Horário de Funcionamento</h4>
                      <p className="text-gray-600">Segunda a Quinta: 11h30 às 15h e 18h às 23h</p>
                      <p className="text-gray-600">Sexta e Sábado: 11h30 às 24h</p>
                      <p className="text-gray-600">Domingo: 11h30 às 22h</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-4">Redes Sociais</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="text-green-600 hover:text-green-700 transition-colors">
                      <Instagram className="h-6 w-6" />
                    </a>
                    <a href="#" className="text-green-600 hover:text-green-700 transition-colors">
                      <Facebook className="h-6 w-6" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Localização</h3>
                <div className="aspect-w-16 aspect-h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <MapPin className="h-12 w-12 mx-auto mb-2" />
                    <p>Mapa Interativo</p>
                    <p className="text-sm">R. Ministro Rocha Azevedo, 471</p>
                    <p className="text-sm">Cerqueira César - São Paulo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Leaf className="h-8 w-8 text-green-400" />
                <span className="text-2xl font-bold">SANTO CAPIM</span>
              </div>
              <p className="text-gray-300">
                Experiência gastronômica única no coração de São Paulo.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <button onClick={() => scrollToSection('inicio')} className="hover:text-green-400 transition-colors">
                    Início
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('sobre')} className="hover:text-green-400 transition-colors">
                    Sobre
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('cardapio')} className="hover:text-green-400 transition-colors">
                    Cardápio
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('contato')} className="hover:text-green-400 transition-colors">
                    Contato
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contato</h4>
              <div className="space-y-2 text-gray-300">
                <p>(19) 3097-1518</p>
                <p>contato@santocapim.com.br</p>
                <div className="flex space-x-4 mt-4">
                  <a href="#" className="text-green-400 hover:text-green-300 transition-colors">
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-green-400 hover:text-green-300 transition-colors">
                    <Facebook className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8">
            <div className="text-sm text-gray-400 space-y-2">
              <p><strong>Razão Social:</strong> SANTO CAPIM RESTAURANTE LTDA</p>
              <p><strong>CNPJ:</strong> 06.910.416/0001-23</p>
              <p><strong>Endereço:</strong> R MINISTRO ROCHA AZEVEDO 471, CERQUEIRA CESAR, SAO PAULO - SP, CEP: 01410-001</p>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-700 text-center text-gray-400">
              <p>&copy; 2025 Santo Capim Restaurante. Todos os direitos reservados.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;