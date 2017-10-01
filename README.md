# README

curl -XPOST http://localhost:3000/graphql \
  -H 'content-type: application/json' \
  -d '{"query":"{movie(id: 1){title}}","variables":null,"operationName":null}'

curl -XPOST http://localhost:3000/graphql \
  -H 'content-type: application/json' \
  -d '{"query":"query ($id: Int!) {movies(year: $id){title}}","variables":"{\"id\": 1981}","operationName":null}'
