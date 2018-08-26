
/**
 * checkLevel, login middleware function for users.
 *
 * @param {String} amount
 * @param {String} frequency
 * @return {String} Response
 */
const checkLevel = (amount, frequency) => {
    const total = Number(amount) * Number(frequency)
    if (total <= 500) {
        const remainder = 500 - total
        if (remainder % Number(amount) === 0) {
            const divided = (remainder/Number(amount))
            return `You are in the safe zone! you can consume your favorite drink ${divided} more time(s).`;
        } else if (remainder % Number(amount) !== 0 && (remainder/Number(amount)) >= 1) {
            const d = Math.floor(remainder/Number(amount))
            const leftover = remainder - (Number(amount) * d)
            return `You are in the safe zone! you can consume your favorite drink ${d} more time(s), you would then have ${leftover} mg left.`;
        }
        return `You are in the safe zone! ${remainder} mg away from the unsafe level.`;
    } else  {
        return `You have consumed a bit too much caffeine, time to cut down a bit! You consumed ${total} mg of caffeine.`;
    }
};

export default checkLevel;