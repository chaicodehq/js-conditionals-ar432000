/**
 * ☕ Bean & Brew Cafe
 *
 * Bean & Brew, the cozy neighborhood cafe, wants to go digital! They
 * need a system that calculates the total price of a coffee order.
 * Here's their menu:
 *
 * Base price by size:
 *   - "small"  → $3.00
 *   - "medium" → $4.00
 *   - "large"  → $5.00
 *
 * Add-on for coffee type:
 *   - "regular"    → +$0.00
 *   - "latte"      → +$1.00
 *   - "cappuccino" → +$1.50
 *   - "mocha"      → +$2.00
 *
 * Optional extras:
 *   - whippedCream → +$0.50 (if true)
 *   - extraShot    → +$0.75 (if true)
 *
 * Rules:
 *   - If size is not "small", "medium", or "large", return -1
 *   - If type is not "regular", "latte", "cappuccino", or "mocha", return -1
 *   - Return the total price rounded to 2 decimal places
 *
 * @param {string} size - "small", "medium", or "large"
 * @param {string} type - "regular", "latte", "cappuccino", or "mocha"
 * @param {{ whippedCream?: boolean, extraShot?: boolean }} extras - Optional extras
 * @returns {number} Total price or -1 for invalid input
 */
export function calculateCoffeePrice(size, type, extras = {}) {
  // Your code here
  if (!["small", "medium", "large"].includes(size)) return -1;
  // if (size !== 'small; && size !== 'medium' && size !== 'large') return -1;
  if (!["regular", "latte", "cappuccino", "mocha"].includes(type)) return -1;
  // if (type !== 'regular' && type !== 'latte' && type !== 'cappuccino' && type !== 'mocha') return -1;

  let finalPrice = 0.0;
  // if (size === "small") finalPrice += 3.0;
  // else if (size === "medium") finalPrice += 4.0;
  // else if (size === "large") finalPrice += 5.0;

  finalPrice += size === "small" ? 3.0 : size === "medium" ? 4.0 : 5.0;

  finalPrice +=
    type === "mocha"
      ? 2.0
      : type === "cappuccino"
        ? 1.5
        : type === "latte"
          ? 1.0
          : 0.0;

  if (Object.keys(extras).length === 0) return +finalPrice.toFixed(2);

  if ("whippedCream" in extras) finalPrice += 0.5;
  if ("extraShot" in extras) finalPrice += 0.75;

  return +finalPrice.toFixed(2);
}
