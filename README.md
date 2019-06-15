# About this package:

This package is responsible for listing the daily quotation of foreign currencies against the Brazillian Real (BRL), all based on SOAP services provided by Banco do Brasil for free, which you can see here: [SOAL Service Banco do Brasil](https://www3.bcb.gov.br/sgspub/JSP/sgsgeral/FachadaWSSGS.wsdl)

You can use destructor to get the requisition function and an object in the desired currency to get the daily quote.

```javascript
const { CurrencyCode, getLastQuote } = require('./')

getLastQuote(CurrencyCode.EURO_BUY).then(console.log)
```

With this code, you will obtain an object like this:

```javascript
{ 
  id: '21620',
  isSpecial: 'false',
  source: 'PTAX',
  fullName: 'Exchange rate - Free - Euro (bid)',
  shortName: 'Euro (bid)',
  fullNamePTbr: 'Taxa de câmbio - Livre - Euro (compra)',
  shortNamePTbr: 'Euro (compra)',
  periodicity: 'Diária',
  periodicityInitials: 'D',
  isLocked: 'false',
  isPublic: 'true',
  lastValue: '4.3522000',
  defaultUnitPTbr: 'R$/u.m.c.',
  defaultUnit: 'R$/c.m.u.',
  dateCurrency: 2019-06-14T03: 00: 00.000Z
}
```

The quotation obtained is the daily, for more information and consultation of other services, on different dates for example, unfortunately we will have to wait for further updates of this package.

Thanks for use this package!!!