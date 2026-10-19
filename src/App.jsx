import './App.css';

const burgers = [
  {
    id: 1,
    name: 'HamBurger',
    description: 'A Hamburger is a sandwich made of a cooked, round patty of ground meat typically beef placed inside a sliced bun or bread roll.',
    price: 80,
    rating: 4,
    image:
      'https://www.epicurious.com/recipes/food/views/the-ultimate-hamburger-232191',
  },
  {
    id: 2,
    name: 'Chicken Burger',
    description: 'A Chicken Burger is a popular sandwich featuring a seasoned chicken patty or filet serve inside a sliced bread roll or burger bun.',
    price: 90,
    rating: 4,
    image:
      'https://www.delish.com/cooking/recipe-ideas/a13513/chicken-burgers-recipe-mslo1010/',
  },
  {
    id: 3,
    name: 'Veggie Burger',
    description: 'A Veggie Burger is a meet-free sandwich featuring a plant-based patty made from ingredients like beans, grains, vegatables, nuts, or mushrooms.',
    price: 90,
    rating: 5,
    image:
      'https://www.foodandwine.com/recipes/ultimate-veggie-burgers',
  },
   {
    id: 4,
    name: 'Chori Burger',
    description: 'A Chori Burger is a popular Filipino street food and snack featuring a sweet, smoky grilled chorizo or longganisa patty served in a soft bun',
    price: 85,
    rating: 4,
    image:
      'https://www.yummy.ph/recipe/chori-burger-recipe-a83-20160223',
  },
];

export default function App() {
  return (
    <>
      <header className="header">
        <a className="brand" href="#top" aria-label="Tasty Burger home">
          <span className="brand-mark" aria-hidden="true">🍔</span>
          <span> TASTY BURGER </span>
        </a>
        <nav className="navigation" aria-label="Main navigation">
          <a href="#about">ABOUT</a>
          <a href="#menu">OUR MENU</a>
          <a href="#shop">SHOP</a>
          <a href="#contact">CONTACT</a>
          <button className="cart-button" type="button" aria-label="Shopping cart, 2 items">
            <span aria-hidden="true">&#128722;</span>
          </button>
        </nav>
      </header>

      <main className="burger-page" id="top">
        <h1>Our Crazy Burgers</h1>
        <p className="main-subtitle">A Burger consists of cooked ground patty (usually beef, chicken, or plant-based) placed inside a sliced bread roll or bun, often enhance with cheese, fresh vegatables, and sauces.</p>
        <div className="burger-list" id="menu">
          {burgers.map((burger) => (
            <div key={burger.id} className="burger-card">
              <img src={burger.image} alt={burger.name} className="burger-image" />
              <div className="burger-info">
                <div className="rating-row">
                  <span className="burger-rating">
                        {'★'.repeat(burger.rating)}{'☆'.repeat(5 - burger.rating)}
                  </span>
                </div>
                <h2>{burger.name}</h2>
                <p style={{ flexGrow: 1 }}>{burger.description}</p>
                <div className="burger-meta">
                  <span className="burger-price">${burger.price.toFixed(2)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}