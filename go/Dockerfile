FROM golang:1.21 as go-builder

WORKDIR /usr/src/app

COPY . .
RUN go build -o app main.go

FROM scratch
COPY --from=go-builder /usr/src/app .
CMD ["./app" ]