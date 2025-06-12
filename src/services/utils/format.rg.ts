export function formatRG(rg: number): string {
  const cleaned = String(rg).replace(/\D/g, '').slice(0, 9);
  return cleaned.replace(/(\d{2})(\d{3})(\d{3})(\d{0,1})/, '$1.$2.$3-$4').replace(/[-.]$/, '');
}