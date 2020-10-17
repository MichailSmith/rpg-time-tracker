package main

import (
	"context"
	"fmt"
	"log"
	"net/http"
	"os"
	"strings"

	"github.com/99designs/gqlgen/graphql/handler"
	"github.com/99designs/gqlgen/graphql/playground"
	"github.com/michailsmith/rpg-time-tracker/configs"
	"github.com/michailsmith/rpg-time-tracker/graph"
	"github.com/michailsmith/rpg-time-tracker/graph/generated"
	"github.com/rs/cors"
	"google.golang.org/api/idtoken"
)

const defaultPort = "8080"

func authHandler(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		authHeader := strings.Split(r.Header.Get("Authorization"), "Bearer ")
		if len(authHeader) != 2 {
			fmt.Println("Malformed Token")
			w.WriteHeader(http.StatusUnauthorized)
			w.Write([]byte("Malformed Token"))
		} else {
			payload, err := idtoken.Validate(context.TODO(), authHeader[1], "928217569437-khgurobdp0dbd4b5jht526fad0m80l5a.apps.googleusercontent.com")
			if err != nil {
				log.Printf(err.Error())
			} else {
				log.Printf(payload.Subject)
				// userid provided by oauth is too large for int
				// sub, err := strconv.ParseUInt(payload.Subject, 10, 64)
				// if err != nil {
				// 	panic(err)
				// }
				ctx := context.WithValue(r.Context(), "userID", payload.Subject)
				next.ServeHTTP(w, r.WithContext(ctx))
			}
		}
	})
}

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
	mux.Handle("/query", authHandler(srv))

	log.Printf("connect to http://localhost:%s/ for GraphQL playground", port)
	handler := cors.AllowAll().Handler(mux)
	log.Fatal(http.ListenAndServe(":"+port, handler))
}
