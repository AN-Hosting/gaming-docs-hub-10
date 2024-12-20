import { Layout } from '@/components/layout/Layout';
import { Link } from 'react-router-dom';

const games = [
  {
    id: 'minecraft',
    name: 'Minecraft',
    description: 'Set up and manage your Minecraft server with ease.',
    icon: '🎮'
  },
  {
    id: 'dayz',
    name: 'DayZ',
    description: 'Host your own DayZ server and customize it to your needs.',
    icon: '🎮'
  },
  {
    id: 'fivem',
    name: 'FiveM',
    description: 'Create and manage your FiveM server for GTA V multiplayer.',
    icon: '🎮'
  },
  {
    id: 'cs2',
    name: 'Counter-Strike 2',
    description: 'Configure and optimize your CS2 server for competitive play.',
    icon: '🎮'
  }
];

const Index = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">
            Game Server Documentation
          </h1>
          <p className="text-lg text-muted-foreground">
            Comprehensive guides for setting up and managing your game servers
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {games.map((game) => (
            <Link key={game.id} to={`/games/${game.id}`}>
              <div className="game-card h-full">
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{game.icon}</span>
                  <div>
                    <h2 className="text-xl font-semibold mb-2">{game.name}</h2>
                    <p className="text-muted-foreground">{game.description}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 p-6 glass-card text-center">
          <h2 className="text-xl font-semibold mb-4">Need Help?</h2>
          <p className="text-muted-foreground mb-4">
            Can't find what you're looking for? Check out our community forums or contact support.
          </p>
          <div className="flex justify-center gap-4">
            <button className="px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
              Visit Forums
            </button>
            <button className="px-4 py-2 rounded-lg border border-primary/50 hover:bg-primary/10 transition-colors">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;