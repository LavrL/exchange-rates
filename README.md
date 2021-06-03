# Exchange Rates App

## Run locally
```bash
npm install
ng serve
```
Navigate to `http://localhost:4200/`.

## Run in Docker
```bash
npm install && npm run ng build && docker build . -t demo/exchange-rates
docker run -p 4202:4201 demo/exchange-rates
```
Navigate to
http://hostIP:4202

