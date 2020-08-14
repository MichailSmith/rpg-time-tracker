package main

import (
	"log"
	"net/http"
	"os"

	"github.com/99designs/gqlgen/graphql/handler"
	"github.com/99designs/gqlgen/graphql/playground"
	"github.com/michailsmith/rpg-time-tracker/configs"
	"github.com/michailsmith/rpg-time-tracker/graph"
	"github.com/michailsmith/rpg-time-tracker/graph/generated"
	"github.com/rs/cors"
)

const defaultPort = "8080"

func main() {
	if err := configs.InitDatabase(); err != nil {
		panic(err)
	}
	port := os.Getenv("PORT")
	if port == "" {
		port = defaultPort
	}
	mux := http.NewServeMux()

	srv := handler.NewDefaultServer(generated.NewExecutableSchema(generated.Config{Resolvers: &graph.Resolver{}}))

	mux.Handle("/", playground.Handler("GraphQL playground", "/query"))
	mux.Handle("/query", srv)

	log.Printf("connect to http://localhost:%s/ for GraphQL playground", port)
	handler := cors.AllowAll().Handler(mux)
	log.Fatal(http.ListenAndServe(":"+port, handler))
}
