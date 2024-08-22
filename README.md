## Running the app via docker

```bash
$ docker build -t dockerize .

$ docker-compose up -d
```

tests is running in two different steps (e2e/units) after build phase within docker build (as per mock real ci it should fail build)

visit http://localhost:3000 to see actual app

## Running the app locally (mongo connection required/node 20v)

build dev and prod orchestrated by turborepo alogside with local build

```bash
$ npm run build

$ npm run dev
```