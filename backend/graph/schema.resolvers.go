package graph

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
	"fmt"

	"github.com/michailsmith/rpg-time-tracker/graph/generated"
	"github.com/michailsmith/rpg-time-tracker/graph/model"
)

var currentTime = 0

func (r *mutationResolver) AdvanceTime(ctx context.Context, by int) (int, error) {
	currentTime += by
	return currentTime, nil
}

func (r *mutationResolver) ResetTime(ctx context.Context, to int) (int, error) {
	currentTime = to
	return currentTime, nil
}

func (r *queryResolver) Node(ctx context.Context, id string) (model.Node, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *queryResolver) ElapsedTime(ctx context.Context) (int, error) {
	return currentTime, nil
}

// Mutation returns generated.MutationResolver implementation.
func (r *Resolver) Mutation() generated.MutationResolver { return &mutationResolver{r} }

// Query returns generated.QueryResolver implementation.
func (r *Resolver) Query() generated.QueryResolver { return &queryResolver{r} }

type mutationResolver struct{ *Resolver }
type queryResolver struct{ *Resolver }

// !!! WARNING !!!
// The code below was going to be deleted when updating resolvers. It has been copied here so you have
// one last chance to move it out of harms way if you want. There are two reasons this happens:
//  - When renaming or deleting a resolver the old code will be put in here. You can safely delete
//    it when you're done.
//  - You have helper methods in this file. Move them out to keep these resolver files clean.
