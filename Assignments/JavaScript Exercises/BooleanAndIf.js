function evaluateConditions(obj) {
    if (obj.age > 18 && obj.hasLicense) {
      return "Eligible to drive";
    }
  
    if (obj.temperature > 30 || obj.humidity > 70) {
      return "Warning: High discomfort level";
    }
  
    if ((obj.role === "admin" || obj.role === "editor") && obj.isActive) {
      return "Access granted";
    }
  
    if ((obj.subscription === "premium" && obj.usage < 100) || obj.hasBonusAccess) {
      return "Content access approved";
    }
  
    if (obj.balance <= 0 || !obj.paymentMethod) {
      return "Payment required";
    }
  
    if ((obj.country === "US" || obj.country === "Canada") && obj.age >= 21 && obj.verified) {
      return "Eligible for North America promo";
    }
  
    return "Not Mentioned";
  }
  