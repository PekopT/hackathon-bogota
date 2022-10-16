FROM mythril/myth

WORKDIR /home/analyze

RUN curl -fsSL https://deb.nodesource.com/setup_lts.x | bash - && \
    apt-get install -y nodejs

CMD ["/usr/bin/bash"]

