import { ActiveModelSerializer, createServer, Factory, Model, Server } from "miragejs"

export function makeServer({ environment = "test" } = {}) {
  return createServer({
    environment,
    serializers: {
      application: ActiveModelSerializer,
    },

    models: {
      movie: Model,
    },

    seeds(server: Server) {
      server.create('movie', { name: 'Below Zero', year: 2021, score: 65 } as any);
      server.create('movie', { name: 'Godzilla: King of Monsters', year: 2019, score: 66 } as any);
      server.create('movie', { name: 'Bloodshot', year: 2020, score: 69 } as any);
      server.create('movie', { name: 'Avengers: Endgame', year: 2019, score: 83 } as any);
    },

    factories: {
      movie: Factory.extend({
        id(i: number) { return i + 1 },
        name(i: number) { return `movie ${i + 1}` },
      }),
    },

    routes() {
      this.namespace = "api"

      this.get("/movies")
      this.get("/movies/:id")
      this.put("/movies/:id", (schema, request) => {
        let attrs = JSON.parse(request.requestBody);
        let records = schema.db.movies.where({ id: attrs.id });
        if (records.length > 0) {
          return schema.db.movies.update(attrs.id, attrs);
        }
      })
      this.post("/movies", (schema, request) => {
        let attrs = JSON.parse(request.requestBody)
        attrs.id = Math.floor(Math.random() * 10000)
        this.create("movie", attrs)
        return { movie: attrs }
      })
      this.del("/movies/:id")
    },
  })
}