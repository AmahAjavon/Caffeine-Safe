import FiveHour from '../assets/images/5_hour_energy.jpg';
import AmericanoCoffee from '../assets/images/americano.jpg';
import BlackCoffee from '../assets/images/black_coffee.jpg';
import Monster from '../assets/images/monster_ultra_sunrise.jpg';
import SugarFree from '../assets/images/sugar_free_NOS.jpeg';


/**
 * Add array of favorite caffeine drinks
 * for request action options.
 *
 */
const caffeineItems = [
    {
        id: 0,
        img: `${Monster}`,
        title: 'Monster Ultra Sunrise',
        description: 'A refreshing orange beverage that has 75mg of caffeine per serving. Every can has two servings.',
        amount: 75,
    },
    {
        id: 1,
        img: `${BlackCoffee}`,
        title: 'Black Coffee',
        description: 'The classic, the average 8oz. serving of black coffee has 95mg of caffeine.',
        amount: 95,
    },
    {
        id: 2,
        img: `${AmericanoCoffee}`,
        title: 'Americano',
        description: 'Sometimes you need to water it down a bit... and in comes the americano with an average of 77mg. of caffeine per serving.',
        amount: 77,
    },
    {
        id: 3,
        img: `${SugarFree}`,
        title: 'Sugar free NOS',
        description: 'Another orange delight without the sugar. It has 130 mg. per serving and each can has two servings.',
        amount: 130,
    },
    {
        id: 4,
        img: `${FiveHour}`,
        title: '5 Hour Energy',
        description: 'And amazing shot of get up and go! Each 2 fl. oz. container has 200mg of caffeine to get you going.',
        amount: 200,
    },
];

export default caffeineItems