# Reto K8s con App Node.js

Este proyecto despliega una aplicación web simple en Node.js usando Kubernetes y GitHub Actions para CI/CD completo.

## Estructura

- `Dockerfile`: Construye la imagen de la app.
- `app/`: Código fuente Node.js.
- `k8s/deployment.yaml`: Despliegue de la app en el clúster.
- `k8s/service.yaml`: Exposición mediante LoadBalancer.
- `.github/workflows/deploy.yml`: Pipeline de construcción y despliegue.

## Requisitos

- Secrets en GitHub:
  - `DOCKER_USERNAME`
  - `DOCKER_PASSWORD`
  - `KUBECONFIG`

## Uso

1. Push a `main`.
2. GitHub Actions construye la imagen, la pushea y despliega automáticamente.
3. Minikube o clúster gestionado expondrá el servicio en el puerto 80.

