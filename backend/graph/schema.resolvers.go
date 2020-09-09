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
	var time model.Time
	err := configs.DB.Where("ID = 1").Find(&time).Error
	if err != nil {
		return 0, err
	}
	err = configs.DB.Model(&time).Update("ElapsedTime", (time.ElapsedTime + by)).Error
	if err != nil {
		return 0, err
	}
	return time.ElapsedTime, nil
}

func (r *mutationResolver) ResetTime(ctx context.Context, to int) (int, error) {
	var time model.Time
	err := configs.DB.Model(&time).Where("ID = 1").Update("ElapsedTime", to).Error
	if err != nil {
		return 0, err
	}
	return time.ElapsedTime, nil
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

func (r *mutationResolver) DeleteUser(ctx context.Context, id int) (*model.User, error) {
	var user model.User
	err := configs.DB.Where("ID = ?", id).Find(&user).Error
	if err != nil {
		return nil, err
	}
	err = configs.DB.Model(&user).Delete(&user).Error
	if err != nil {
		return nil, err
	}
	return &user, nil
}

func (r *mutationResolver) DeleteTime(ctx context.Context, id int) (*model.Time, error) {
	var time model.Time
	err := configs.DB.Where("ID = ?", id).Find(&time).Error
	if err != nil {
		return nil, err
	}
	err = configs.DB.Model(&time).Delete(&time).Error
	if err != nil {
		return nil, err
	}
	return &time, nil
}

func (r *mutationResolver) TransferTime(ctx context.Context, id int, userID int) (string, error) {
	var time model.Time
	err := configs.DB.Model(&time).Where("ID = ?", id).Update("UserID", userID).Error
	if err != nil {
		return "", err
	}
	return time.UserID, nil
}

func (r *queryResolver) Node(ctx context.Context, id string) (model.Node, error) {
	panic(fmt.Errorf("not implemented"))
}

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

func (r *subscriptionResolver) ElapsedTimeUpdated(ctx context.Context, id string) (<-chan int, error) {
	panic(fmt.Errorf("not implemented"))
}

// Mutation returns generated.MutationResolver implementation.
func (r *Resolver) Mutation() generated.MutationResolver { return &mutationResolver{r} }

// Query returns generated.QueryResolver implementation.
func (r *Resolver) Query() generated.QueryResolver { return &queryResolver{r} }

// Subscription returns generated.SubscriptionResolver implementation.
func (r *Resolver) Subscription() generated.SubscriptionResolver { return &subscriptionResolver{r} }

type mutationResolver struct{ *Resolver }
type queryResolver struct{ *Resolver }
type subscriptionResolver struct{ *Resolver }

// !!! WARNING !!!
// The code below was going to be deleted when updating resolvers. It has been copied here so you have
// one last chance to move it out of harms way if you want. There are two reasons this happens:
//  - When renaming or deleting a resolver the old code will be put in here. You can safely delete
//    it when you're done.
//  - You have helper methods in this file. Move them out to keep these resolver files clean.
