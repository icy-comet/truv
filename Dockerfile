FROM icycomet/dockered-solana-dev

SHELL ["/bin/bash", "-l", "-c"]
USER apprunner
WORKDIR /home/apprunner/5mini
COPY --chown=apprunner:apprunner . /home/apprunner/5mini/
# nvm requires interactive shell
# ensure initial dependencies are met
RUN source /home/apprunner/.nvm/nvm.sh && npm install -g npm@latest && npm install && anchor build && cargo update -p bytemuck_derive@1.9.2 --precise 1.8.1 && solana config set -ul && solana-keygen new --no-bip39-passphrase && cd ui && npm install --force
# nextjs
EXPOSE 3000
# solana validator
EXPOSE 8899
EXPOSE 1024
EXPOSE 1027

CMD ["sleep", "infinity"]
