
# ---------stage-1---------

FROM node:18 AS builder

WORKDIR /app

COPY  package*.json ./

RUN  npm install

COPY  backend/ ./backend/

#----------stage-2----------

FROM node:18-slim AS production

WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/backend ./backend

#---------for security user and group added---------

RUN addgroup --system devgrp && adduser --system --ingroup devgrp devuser
USER devuser

#-----------devuser and devgrp are added----------

EXPOSE 5000

CMD ["node", "backend/index.js"]
