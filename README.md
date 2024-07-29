# run

```
$ go run main.go
```

# Containerfile

## build form source

Tested with podman but, I think it works on docker.

```
podman build -t gin-task .
podman run --rm -p 8080:8080 --name gin-task localhost/gin-task:latest
```

```
curl localhost:8080
```