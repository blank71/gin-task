# run

## Container

Tested with podman but, I think it works on docker.

```
TAG=0.0.1
podman pull ghcr.io/blank71/gin-task/gin-task:${TAG}
podman run --rm -p 8080:8080 --name gin-task gin-task/gin-task:${TAG}
```

## From Source

```
git pull https://github.com/blank71/gin-task.git
go run main.go
```

# test connection 

```
curl localhost:8080
```

# Containerfile

## build form source

Tested with podman but, I think it works on docker.

```
podman build -t gin-task .
podman run --rm -p 8080:8080 --name gin-task localhost/gin-task:latest
```