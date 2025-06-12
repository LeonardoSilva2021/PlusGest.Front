export function formatDataNascimento(data: string): string {
  const cleaned = String(data).replace(/\D/g, '').slice(0, 8);
  return cleaned.replace(/(\d{2})(\d{2})(\d{0,4})/, '$1/$2/$3').replace(/\/$/, '');
}