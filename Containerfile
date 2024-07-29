FROM registry.fedoraproject.org/fedora

# install sqlite
RUN dnf update && \
dnf install -y sqlite-devel gcc && \
dnf clean all && \
rm -rf /var/cache/yum

# install go 
RUN goversion=$(curl https://go.dev/VERSION?m=text 2>/dev/null) && \
goversion=$(echo ${goversion} | cut -d " " -f1) && \
echo ${goversion} && \
curl -O https://dl.google.com/go/${goversion}.linux-amd64.tar.gz && \
tar -C /usr/local -xzf ${goversion}.linux-amd64.tar.gz && \
rm ${goversion}.linux-amd64.tar.gz && \
export PATH=$PATH:/usr/local/go/bin

COPY . /root/work/
WORKDIR /root/work

RUN /usr/local/go/bin/go mod download
RUN /usr/local/go/bin/go build

EXPOSE 8080

CMD ["./web"]
