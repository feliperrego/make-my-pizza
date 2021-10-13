export interface CurrencyFormatOptions extends Intl.NumberFormatOptions {
  locale?: string;
}

export const currencyFormat = (num: number, options?: CurrencyFormatOptions): string => {
  if (options) {
    const { locale, ...localeOptions } = options;
    return `R$ ${num.toLocaleString(locale || 'pt-br', localeOptions)}`;
  }

  return `R$ ${num.toLocaleString('pt-br', { minimumFractionDigits: 2 })}`;
};
