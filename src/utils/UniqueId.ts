export function generateUniqueId(): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let uniqueId = '';

  for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      uniqueId += chars[randomIndex];
  }

  return uniqueId;
}