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

//Currently using find and where to use only the first time record
func (r *mutationResolver) AdvanceTime(ctx context.Context, by int) (int, error) {
	var time model.Time
	err := configs.DB.Where("ID = 1").Find(&time).Error
	if err != nil {
		return 0, err
	}
	err2 := configs.DB.Model(&time).Update("ElapsedTime", (time.ElapsedTime + by)).Error
	if err2 != nil {
		return 0, err2
	}
	return time.ElapsedTime, nil
}

//Currently using find and where to use only the first time record
func (r *mutationResolver) ResetTime(ctx context.Context, to int) (int, error) {
	var time model.Time
	err2 := configs.DB.Model(&time).Where("ID = 1").Update("ElapsedTime", to).Error
	if err2 != nil {
		return 0, err2
	}
	return to, nil
}

func (r *mutationResolver) CreateUser(ctx context.Context, input model.NewUser) (*model.User, error) {
	user := model.User{ID: input.ID, Username: input.Username, Email: input.Email, Password: input.Password, IsGm: input.IsGm}
	err := configs.DB.Create(&user).Error
	if err != nil {
		return nil, err
	}
	return &user, nil
}

func (r *mutationResolver) CreateTime(ctx context.Context, input model.NewTime) (*model.Time, error) {
	time := model.Time{ID: input.ID, UserID: input.UserID, CampaignName: input.CampaignName, ElapsedTime: input.ElapsedTime}
	err := configs.DB.Create(&time).Error
	if err != nil {
		return nil, err
	}
	return &time, nil
}

func (r *queryResolver) Node(ctx context.Context, id string) (model.Node, error) {
	panic(fmt.Errorf("not implemented"))
}

//Currently using find and where to return the first time record
func (r *queryResolver) ElapsedTime(ctx context.Context) (int, error) {
	var time model.Time
	err := configs.DB.Where("ID = 1").Find(&time).Error
	if err != nil {
		return 0, err
	}
	return time.ElapsedTime, nil
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

//var currentTime = 0
