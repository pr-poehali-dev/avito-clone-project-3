import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const categories = [
  { name: 'Электроника', icon: 'Laptop', count: 1250 },
  { name: 'Транспорт', icon: 'Car', count: 890 },
  { name: 'Недвижимость', icon: 'Home', count: 2340 },
  { name: 'Работа', icon: 'Briefcase', count: 567 },
  { name: 'Услуги', icon: 'Wrench', count: 430 },
  { name: 'Мода', icon: 'Shirt', count: 1780 },
];

const listings = [
  {
    id: 1,
    title: 'iPhone 15 Pro Max',
    price: '89 990 ₽',
    location: 'Москва',
    image: 'https://via.placeholder.com/400x300/8B5CF6/FFFFFF?text=iPhone',
    category: 'Электроника',
    featured: true,
  },
  {
    id: 2,
    title: 'Toyota Camry 2023',
    price: '2 850 000 ₽',
    location: 'Санкт-Петербург',
    image: 'https://via.placeholder.com/400x300/D946EF/FFFFFF?text=Toyota',
    category: 'Транспорт',
    featured: false,
  },
  {
    id: 3,
    title: 'Квартира 2 комнаты',
    price: '8 500 000 ₽',
    location: 'Москва',
    image: 'https://via.placeholder.com/400x300/0EA5E9/FFFFFF?text=Квартира',
    category: 'Недвижимость',
    featured: true,
  },
  {
    id: 4,
    title: 'MacBook Pro M3',
    price: '165 000 ₽',
    location: 'Казань',
    image: 'https://via.placeholder.com/400x300/8B5CF6/FFFFFF?text=MacBook',
    category: 'Электроника',
    featured: false,
  },
  {
    id: 5,
    title: 'Диван угловой',
    price: '35 000 ₽',
    location: 'Екатеринбург',
    image: 'https://via.placeholder.com/400x300/D946EF/FFFFFF?text=Диван',
    category: 'Мебель',
    featured: false,
  },
  {
    id: 6,
    title: 'Дрон DJI Mavic',
    price: '78 000 ₽',
    location: 'Новосибирск',
    image: 'https://via.placeholder.com/400x300/0EA5E9/FFFFFF?text=Дрон',
    category: 'Электроника',
    featured: true,
  },
];

export default function Index() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('all');
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (id: number) => {
    setFavorites(prev =>
      prev.includes(id) ? prev.filter(fav => fav !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-purple-100 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 gradient-primary rounded-xl flex items-center justify-center">
                <Icon name="Sparkles" size={24} className="text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Турист Хаус
              </h1>
            </div>

            <nav className="hidden md:flex items-center gap-6">
              {['Главная', 'Категории', 'Мои объявления', 'Избранное', 'Профиль'].map((item) => (
                <button
                  key={item}
                  className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
                >
                  {item}
                </button>
              ))}
            </nav>

            <Button className="gradient-primary text-white hover:opacity-90">
              <Icon name="Plus" size={18} className="mr-2" />
              Разместить
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12 animate-fade-in">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              Найди всё, что нужно
            </h2>
            <p className="text-gray-600 text-lg">
              Тысячи объявлений в одном месте
            </p>
          </div>

          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Icon name="Search" size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Поиск товаров и услуг..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-6 text-lg rounded-2xl border-2 border-purple-100 focus:border-purple-400 shadow-lg"
              />
              <Button className="absolute right-2 top-1/2 -translate-y-1/2 gradient-primary text-white">
                Найти
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category, idx) => (
              <Card
                key={category.name}
                className="hover-scale cursor-pointer border-2 border-purple-100 hover:border-purple-300 transition-all"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <CardContent className="pt-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-3 gradient-accent rounded-2xl flex items-center justify-center">
                    <Icon name={category.icon as any} size={32} className="text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-1">{category.name}</h3>
                  <p className="text-sm text-gray-500">{category.count} объявлений</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-3xl font-bold text-gray-800">Популярные объявления</h3>
            <div className="flex gap-2">
              {['all', 'featured', 'new'].map((tab) => (
                <Button
                  key={tab}
                  variant={activeTab === tab ? 'default' : 'outline'}
                  onClick={() => setActiveTab(tab)}
                  className={activeTab === tab ? 'gradient-primary text-white' : ''}
                >
                  {tab === 'all' ? 'Все' : tab === 'featured' ? 'Премиум' : 'Новые'}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {listings.map((listing, idx) => (
              <Card
                key={listing.id}
                className="overflow-hidden hover-scale border-2 border-purple-100 hover:shadow-2xl transition-all animate-fade-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="relative">
                  <img
                    src={listing.image}
                    alt={listing.title}
                    className="w-full h-48 object-cover"
                  />
                  {listing.featured && (
                    <Badge className="absolute top-3 left-3 gradient-primary text-white border-0">
                      <Icon name="Star" size={14} className="mr-1" />
                      Премиум
                    </Badge>
                  )}
                  <button
                    onClick={() => toggleFavorite(listing.id)}
                    className="absolute top-3 right-3 w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                  >
                    <Icon
                      name="Heart"
                      size={20}
                      className={favorites.includes(listing.id) ? 'fill-red-500 text-red-500' : 'text-gray-600'}
                    />
                  </button>
                </div>

                <CardHeader>
                  <Badge variant="secondary" className="w-fit mb-2">
                    {listing.category}
                  </Badge>
                  <h4 className="text-xl font-semibold text-gray-800">{listing.title}</h4>
                </CardHeader>

                <CardContent>
                  <div className="flex items-center gap-2 text-gray-600 mb-3">
                    <Icon name="MapPin" size={16} />
                    <span className="text-sm">{listing.location}</span>
                  </div>
                  <p className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    {listing.price}
                  </p>
                </CardContent>

                <CardFooter>
                  <Button className="w-full gradient-accent text-white hover:opacity-90">
                    Подробнее
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white mt-16 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
                  <Icon name="Sparkles" size={18} className="text-white" />
                </div>
                <h3 className="text-xl font-bold">Турист Хаус</h3>
              </div>
              <p className="text-gray-400">
                Современная площадка объявлений для всех
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">О проекте</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Помощь</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Категории</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Электроника</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Транспорт</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Недвижимость</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Связь</h4>
              <div className="flex gap-3">
                {['Mail', 'Phone', 'MessageCircle'].map((icon) => (
                  <button
                    key={icon}
                    className="w-10 h-10 bg-gray-800 hover:bg-purple-600 rounded-lg flex items-center justify-center transition-colors"
                  >
                    <Icon name={icon as any} size={20} />
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2024 Турист Хаус. Все права защищены</p>
          </div>
        </div>
      </footer>
    </div>
  );
}