# Playwright on Cloud Run

## deploy

1. Create image in gcr.io
```
export PROJECT_ID=""
export BROWSER=chrome  # or firefox
export VERSION=92.0

docker pull playwright/${BROWSER}:${VERSION}
docker tag playwright/${BROWSER}:${VERSION} gcr.io/${PROJECT_ID}/playwright/${BROWSER}:${VERSION}
docker push gcr.io/${PROJECT_ID}/playwright/${BROWSER}:${VERSION}
```

2. Deploy to Cloud Run
```
export CLOUDRUN_SERVICE_ACCOUNT=""

gcloud run deploy playwright-${BROWSER} --image=gcr.io/${PROJECT_ID}/playwright/${BROWSER}:${VERSION} \
--platform managed \
--allow-unauthenticated \
--ingress all \
--service-account $CLOUDRUN_SERVICE_ACCOUNT \
--port 4444 \
--concurrency 1
```

3. run example
```
node example.mjs
```
