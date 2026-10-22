/**
 * E-Commerce Discount & Cart Engine (JavaScript)
 * Real-world CI candidate module for Jenkins Scripted Pipeline.
 */

function applyDiscount(totalAmount, couponCode = '') {
  if (totalAmount < 0) {
    throw new Error('Total amount cannot be negative');
  }

  const coupons = {
    WELCOME10: 0.10,
    FESTIVE20: 0.20,
    SUPER50: 0.50
  };

  const code = (couponCode || '').toUpperCase();
  const discountPct = coupons[code] || 0.0;
  const discountVal = Number((totalAmount * discountPct).toFixed(2));
  const finalAmount = Number((totalAmount - discountVal).toFixed(2));

  return { finalAmount, discountVal };
}

function calculateTax(amount, taxRate = 0.05) {
  return Number((amount * taxRate).toFixed(2));
}

if (require.main === module) {
  const cartTotal = 1500.0;
  const coupon = 'FESTIVE20';
  const { finalAmount, discountVal } = applyDiscount(cartTotal, coupon);
  const tax = calculateTax(finalAmount);
  const totalPayable = Number((finalAmount + tax).toFixed(2));

  console.log('========================================');
  console.log('   REAL CI PIPELINE: INVOICE BUILD (JS) ');
  console.log('========================================');
  console.log(`Cart Total    : INR ${cartTotal}`);
  console.log(`Coupon Applied: ${coupon} (-INR ${discountVal})`);
  console.log(`Net Amount    : INR ${finalAmount}`);
  console.log(`Tax (5%)      : INR ${tax}`);
  console.log(`Total Payable : INR ${totalPayable}`);
  console.log('========================================');
}

module.exports = { applyDiscount, calculateTax };
