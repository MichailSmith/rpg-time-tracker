package graph

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
	"fmt"

	"github.com/michailsmith/rpg-time-tracker/configs"
	"github.com/michailsmith/rpg-time-tracker/graph/generated"
	"github.com/michailsmith/rpg-time-tracker/graph/model"
)

func (r *mutationResolver) AdvanceTime(ctx context.Context, by int) (int, error) {
	currentTime += by
	return currentTime, nil
}

func (r *mutationResolver) ResetTime(ctx context.Context, to int) (int, error) {
	currentTime = to
	return currentTime, nil
}

func (r *mutationResolver) CreateUser(ctx context.Context, input model.NewUser) (*model.User, error) {
	user := model.User{ID: input.ID, Username: input.Username, Email: input.Email, Password: input.Password, IsGm: input.IsGm}
	err := configs.DB.Create(&user).Error
	if err != nil {
		return nil, err
	}
	return &user, nil
}

func (r *queryResolver) Node(ctx context.Context, id string) (model.Node, error) {
	panic(fmt.Errorf("not implemented"))
}

func (r *queryResolver) ElapsedTime(ctx context.Context) (int, error) {
	return currentTime, nil
}

func (r *queryResolver) Times(ctx context.Context) ([]*model.Time, error) {
	var times []*model.Time
	err := configs.DB.Find(&times).Error
	if err != nil {
		return nil, err
	}
	return times, nil
}

func (r *queryResolver) Users(ctx context.Context) ([]*model.User, error) {
	var users []*model.User
	err := configs.DB.Find(&users).Error
	if err != nil {
		return nil, err
	}
	return users, nil
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
var currentTime = 0
