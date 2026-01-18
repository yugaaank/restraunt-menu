import { MenuItem } from '../models/models';

export const MOCK_MENU_ITEMS: MenuItem[] = [
    // Appetizers
    {
        id: 1,
        name: 'Bruschetta',
        description: 'Toasted baguette topped with diced tomatoes, garlic, basil, and olive oil.',
        price: 8.99,
        category: 'Appetizers',
        imageUrl: 'assets/menu/bruschetta_1768755734144.png'
    },
    {
        id: 2,
        name: 'Calamari',
        description: 'Crispy fried calamari served with spicy marinara sauce.',
        price: 11.50,
        category: 'Appetizers',
        imageUrl: 'assets/menu/calamari_1768755754252.png'
    },
    {
        id: 3,
        name: 'Caesar Salad',
        description: 'Crisp romaine lettuce, croutons, parmesan cheese, and Caesar dressing.',
        price: 9.50,
        category: 'Appetizers',
        imageUrl: 'assets/menu/caesar_salad_1768755772608.png'
    },
    {
        id: 4,
        name: 'Garlic Bread',
        description: 'Toasted baguette slices with garlic butter and herbs.',
        price: 5.99,
        category: 'Appetizers',
        imageUrl: 'assets/menu/garlic_bread_1768755790320.png'
    },

    // Main Course
    {
        id: 5,
        name: 'Margherita Pizza',
        description: 'Classic cheese and tomato pizza with fresh basil.',
        price: 14.99,
        category: 'Main Course',
        imageUrl: 'assets/menu/margherita_pizza_1768755832441.png'
    },
    {
        id: 6,
        name: 'Grilled Salmon',
        description: 'Fresh Atlantic salmon grilled to perfection, served with asparagus.',
        price: 22.99,
        category: 'Main Course',
        imageUrl: 'assets/menu/grilled_salmon_1768755852381.png'
    },
    {
        id: 7,
        name: 'Wagyu Burger',
        description: 'Premium Wagyu beef patty with caramelized onions, arugula, and truffle mayo.',
        price: 18.99,
        category: 'Main Course',
        imageUrl: 'assets/menu/wagyu_burger_1768755869853.png'
    },
    {
        id: 8,
        name: 'Mushroom Risotto',
        description: 'Creamy arborio rice with wild mushrooms and truffle oil.',
        price: 16.99,
        category: 'Main Course',
        imageUrl: 'assets/menu/mushroom_risotto_1768755895412.png'
    },
    {
        id: 9,
        name: 'Pasta Carbonara',
        description: 'Spaghetti with pancetta, egg, pecorino cheese, and black pepper.',
        price: 15.99,
        category: 'Main Course',
        imageUrl: 'assets/menu/pasta_carbonara_1768755913851.png'
    },

    // Desserts
    {
        id: 10,
        name: 'Tiramisu',
        description: 'Classic Italian dessert with layers of coffee-soaked sponge cake.',
        price: 7.99,
        category: 'Desserts',
        imageUrl: 'assets/menu/tiramisu_1768755939328.png'
    },
    {
        id: 11,
        name: 'Chocolate Lava Cake',
        description: 'Molten chocolate cake served with vanilla ice cream.',
        price: 8.99,
        category: 'Desserts',
        imageUrl: 'assets/menu/chocolate_lava_cake_1768755956287.png'
    },
    {
        id: 12,
        name: 'Panna Cotta',
        description: 'Silky vanilla bean pudding with strawberry coulis.',
        price: 7.50,
        category: 'Desserts',
        imageUrl: 'assets/menu/panna_cotta_1768755972413.png'
    },

    // Beverages
    {
        id: 13,
        name: 'Craft Mojito',
        description: 'Refreshing mix of rum, mint, lime, and soda water.',
        price: 9.50,
        category: 'Beverages',
        imageUrl: 'assets/menu/craft_mojito_1768756002698.png'
    },
    {
        id: 14,
        name: 'Berry Smoothie',
        description: 'Blend of mixed berries, yogurt, and honey.',
        price: 6.50,
        category: 'Beverages',
        imageUrl: 'assets/menu/berry_smoothie_1768756023843.png'
    },
    {
        id: 15,
        name: 'Iced Latte',
        description: 'Espresso poured over ice with your choice of milk.',
        price: 5.50,
        category: 'Beverages',
        imageUrl: 'assets/menu/iced_latte_1768756044189.png'
    },
    {
        id: 16,
        name: 'Fresh Orange Juice',
        description: 'Freshly squeezed oranges, served chilled.',
        price: 4.99,
        category: 'Beverages',
        imageUrl: 'assets/menu/fresh_orange_juice_1768756077577.png'
    }
];
