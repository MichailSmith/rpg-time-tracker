// Code generated by github.com/99designs/gqlgen, DO NOT EDIT.

package model

type Node interface {
	IsNode()
}

type NewTime struct {
	ID           string `json:"id"`
	UserID       string `json:"user_id"`
	CampaignName string `json:"campaign_name"`
	ElapsedTime  int    `json:"elapsed_time"`
}

type NewUser struct {
	ID       string `json:"id"`
	Username string `json:"username"`
	Password string `json:"password"`
	Email    string `json:"email"`
	IsGm     bool   `json:"is_gm"`
}

type PageInfo struct {
	HasNextPage     bool    `json:"hasNextPage"`
	HasPreviousPage bool    `json:"hasPreviousPage"`
	StartCursor     *string `json:"startCursor"`
	EndCursor       *string `json:"endCursor"`
}

type Time struct {
	ID           string `json:"id"`
	UserID       string `json:"user_id"`
	CampaignName string `json:"campaign_name"`
	ElapsedTime  int    `json:"elapsed_time"`
}

type User struct {
	ID       string `json:"id"`
	Username string `json:"username"`
	Password string `json:"password"`
	Email    string `json:"email"`
	IsGm     bool   `json:"is_gm"`
}
