export const mockVideoGames = [
  {
    title: 'Metal Gear Solid',
    developer: 'Konami',
    completed: true
  },
  {
    title: 'Super Mario 64',
    developer: 'Nintendo',
    completed: false
  },
  {
    title: 'Pokemon Red',
    developer: 'Game Freak',
    completed: true
  },
  {
    title: 'Final Fantasy 7',
    developer: 'Square',
    completed: true
  },
  {
    title: 'The Legend of Zelda: Ocarina of Time',
    developer: 'Nintendo',
    completed: true
  },
  {
    title: 'The Elder Scrolls V: Skyrim',
    developer: 'Bethesda Game Studios',
    completed: false
  },
  {
    title: 'Fallout 3',
    developer: 'Bethesda Game Studios',
    completed: false
  },
  {
    title: 'Starcraft',
    developer: 'Blizzard Entertainment',
    completed: true
  },
  {
    title: 'World of Warcraft',
    developer: 'Blizzard Entertainment',
    completed: false
  },
  {
    title: 'Half-Life',
    developer: 'Valve',
    completed: true
  },
  {
    title: 'Portal',
    developer: 'Valve',
    completed: false
  },
  {
    title: 'Grand Theft Auto V',
    developer: 'Rockstar Games',
    completed: true
  },
  {
    title: 'Red Ded Redemption',
    developer: 'Rockstar Games',
    completed: false
  }
].map((videoGame, index) => Object.assign({}, videoGame, { id: String(index) }))
